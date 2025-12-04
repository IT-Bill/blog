---
title: 'Python可以被玩到多骚?'
summary: '奇怪的知识增加了'
date: '2024-12-31'
category: '奇怪的知识增加了'
cover: 'https://picsum.photos/seed/pyfun/400/200'
tags: ['Python', 'Fun']
---

## 前言

Python 是一门非常灵活的语言，今天来看看一些有趣的用法。

## 一行代码实现各种功能

### 九九乘法表

```python
print('\n'.join([' '.join([f'{i}x{j}={i*j}' for j in range(1, i+1)]) for i in range(1, 10)]))
```

### 斐波那契数列

```python
fib = lambda n: n if n < 2 else fib(n-1) + fib(n-2)
```

### 列表扁平化

```python
flatten = lambda x: [y for l in x for y in flatten(l)] if isinstance(x, list) else [x]
```

## 元编程技巧

### 动态创建类

```python
MyClass = type('MyClass', (), {'greet': lambda self: 'Hello!'})
```

### 装饰器工厂

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator
```

## 黑魔法

### 修改导入系统

```python
import sys
sys.meta_path.insert(0, MyCustomImporter())
```

### 运行时修改字节码

这个就太硬核了，不建议在生产环境使用！

## 总结

Python 的灵活性让它可以实现很多有趣的功能，但要注意代码的可读性和维护性。
