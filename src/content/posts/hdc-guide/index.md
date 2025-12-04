---
title: 'hdc使用指南'
summary: 'Reserve基础知识'
date: '2025-01-16'
category: 'Reserve基础知识'
tags: ['HarmonyOS']
---

## 什么是 HDC

HDC (HarmonyOS Device Connector) 是华为鸿蒙系统的设备连接工具，类似于 Android 的 ADB。

## 安装配置

### Windows

1. 下载 HDC 工具包
2. 配置环境变量
3. 验证安装：`hdc version`

### macOS

```bash
# 下载并解压
# 配置环境变量
export PATH=$PATH:/path/to/hdc
```

## 常用命令

```bash
# 查看连接的设备
hdc list targets

# 安装应用
hdc install app.hap

# 卸载应用
hdc uninstall com.example.app

# 文件传输
hdc file send local_file /data/local/tmp/
hdc file recv /data/local/tmp/remote_file ./
```

## 调试技巧

使用 HDC 可以方便地进行应用调试和日志查看。
