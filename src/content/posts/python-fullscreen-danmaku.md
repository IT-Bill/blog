---
title: 'python实现全屏弹幕'
summary: '随手记一些安全之外的技术'
date: '2025-10-29'
category: '随手记'
cover: 'https://picsum.photos/seed/python/400/200'
tags: ['Python', 'Tech']
views: 1506
comments: 0
---

## 前言

最近刷视频刷到一个全屏弹幕的视频，所以我自己也做了一个。

先看视频: [https://v.douyin.com/P8WleYN3vsI/](https://v.douyin.com/P8WleYN3vsI/)

## 代码实现

源码如下

```python
#!/usr/bin/env python3
import tkinter as tk
import random
import sys
from time import sleep

# 弹幕数量
WINDOWS_NUM = 128
# 弹幕大小
WINDOWS_SIZE = (500, 80)
```

## 预览图

整体脚本还是比较简单，我对它进行了封装，方便调用和二次开发拓展。核心参数就可以在代码的头部继续修改。
