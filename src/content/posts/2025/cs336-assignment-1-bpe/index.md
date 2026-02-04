---
title: 'CS336: Assignment 1 - BPE'
summary: ''
date: '2025-12-08'
category: 'CS336: Language Models From Scratch'
cover: 'https://stanford-cs336.github.io/spring2025-lectures/images/course-staff.png'
tags: ['CS336', 'LLM', 'PBE']

---

## collections.Counter

1. 直接`print`和`for items`的顺序是不一样的
   ```python
   from collections import Counter
   
   c = Counter()
   
   c[0] += 10
   c[1] += 20
   
   print(c)
   # Counter({1: 20, 0: 10})
   
   for a, b in c.items():
       print(a, b)
       # 0 10
   	# 1 20
   ```

2. `defaultdict`的效率比`Counter`高

   ```python
   import timeit
   from collections import Counter, defaultdict
   import random
   
   # 1. 模拟数据准备
   # 模拟 BPE 中的 (pair, count) 数据流
   # 假设有 1000 种不同的 pair，总共进行 100,000 次累加操作
   unique_pairs = [(f"byte_{i}".encode(), f"byte_{i+1}".encode()) for i in range(1000)]
   data_stream = [random.choice(unique_pairs) for _ in range(100000)]
   # 模拟权重（BPE 中是 += count，而不是简单的 += 1）
   weights = [random.randint(1, 100) for _ in range(100000)]
   data = list(zip(data_stream, weights))
   
   def test_counter():
       """使用 Counter 进行统计"""
       c = Counter()
       for pair, weight in data:
           c[pair] += weight
       return c
   
   def test_defaultdict():
       """使用 defaultdict(int) 进行统计"""
       d = defaultdict(int)
       for pair, weight in data:
           d[pair] += weight
       return d
   
   # --- 运行累加性能测试 ---
   print(f"{'='*10} 累加 (Accumulation) 性能对比 {'='*10}")
   loops = 100
   
   t_counter = timeit.timeit(test_counter, number=loops)
   print(f"Counter 耗时:      {t_counter:.4f} 秒")
   
   t_defaultdict = timeit.timeit(test_defaultdict, number=loops)
   print(f"defaultdict 耗时:  {t_defaultdict:.4f} 秒")
   
   speedup = (t_counter - t_defaultdict) / t_counter * 100
   print(f"--> defaultdict 比 Counter 快了 {speedup:.1f}%")
   ```

   ```structured text
   ========== 累加 (Accumulation) 性能对比 ==========
   Counter 耗时:      1.3501 秒
   defaultdict 耗时:  0.7618 秒
   --> defaultdict 比 Counter 快了 43.6%
   ```

### `__getitem__`

`__getitem__`的底层是C编写的，速度非常快。而`lambda`是Python级别的函数，速度会慢很多。

**使用 `lambda` 时**，Python 内部实际上是在做这样的事（伪代码）：
```python
def process(i):
    return BYTE_TABLE[i]  # 这里有变量查找、下标访问等 Python 指令

for x in data:            # map 在 C 里循环
    process(x)            # 但每一轮都要调用这个 Python 函数
```

**使用 `__getitem__` 时**，Python 内部是在做这样的事：
```c
// C 语言伪代码
for (int i = 0; i < len(data); i++) {
    // 直接调用 C 指针，极快
    result[i] = PyTuple_GetItem(BYTE_TABLE, data[i]); 
}
```

当你使用 `map` 进行优化时，**千万不要塞进去一个 `lambda`**。

*   ❌ **慢**：`map(lambda x: x.upper(), my_list)` -> 因为 `lambda` 是 Python 函数。
*   ✅ **快**：`map(str.upper, my_list)` -> 因为 `str.upper` 是 C 实现的方法。
*   ❌ **慢**：`map(lambda x: lookup[x], my_list)`
*   ✅ **快**：`map(lookup.__getitem__, my_list)`
