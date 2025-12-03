import type { Post, Comment, Category } from './types';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'python实现全屏弹幕',
    summary: '随手记一些安全之外的技术',
    date: '2025-10-29',
    category: '随手记',
    cover: 'https://picsum.photos/seed/python/400/200',
    tags: ['Python', 'Tech'],
    views: 1506,
    comments: 0,
    content: `
      <h2>前言</h2>
      <p>最近刷视频刷到一个全屏弹幕的视频，所以我自己也做了一个。</p>
      <p>先看视频: <a href="#" class="text-blue-400 hover:underline">https://v.douyin.com/P8WleYN3vsI/</a></p>
      
      <h2>代码实现</h2>
      <p>源码如下</p>
      
      <div class="bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm border border-gray-700 my-4">
        <div class="flex items-center gap-2 mb-2 border-b border-gray-700 pb-2">
           <div class="w-3 h-3 rounded-full bg-red-500"></div>
           <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div class="w-3 h-3 rounded-full bg-green-500"></div>
           <span class="ml-2 text-gray-400">main.py</span>
        </div>
        <div class="text-green-400">#!/usr/bin/env python3</div>
        <div class="text-blue-300">import</div> <div class="inline text-white">tkinter</div> <div class="inline text-blue-300">as</div> <div class="inline text-white">tk</div>
        <div class="text-blue-300">import</div> <div class="inline text-white">random</div>
        <div class="text-blue-300">import</div> <div class="inline text-white">sys</div>
        <div class="text-blue-300">from</div> <div class="inline text-white">time</div> <div class="inline text-blue-300">import</div> <div class="inline text-white">sleep</div>
        <br/>
        <div class="text-gray-500"># 弹幕数量</div>
        <div class="text-white">WINDOWS_NUM = 128</div>
        <div class="text-gray-500"># 弹幕大小</div>
        <div class="text-white">WINDOWS_SIZE = (500, 80)</div>
      </div>

      <h2>预览图</h2>
      <p>整体脚本还是比较简单，我对它进行了封装，方便调用和二次开发拓展。核心参数就可以在代码的头部继续修改。</p>
    `
  },
  {
    id: '2',
    title: '初入Mac，快速上手',
    summary: '默认分类',
    date: '2025-01-18',
    category: '默认分类',
    cover: 'https://picsum.photos/seed/mac/400/200',
    tags: ['Mac', 'Tutorial'],
    views: 320,
    comments: 5
  },
  {
    id: '3',
    title: 'hdc使用指南',
    summary: 'Reserve基础知识',
    date: '2025-01-16',
    category: 'Reserve基础知识',
    tags: ['HarmonyOS'],
    views: 128,
    comments: 2
  },
  {
    id: '4',
    title: 'Mac优雅的截图姿势',
    summary: '默认分类',
    date: '2025-01-01',
    category: '默认分类',
    cover: 'https://picsum.photos/seed/screen/400/200',
    tags: ['Mac', 'Tools'],
    views: 89,
    comments: 0
  },
  {
    id: '5',
    title: 'Python可以被玩到多骚?',
    summary: '奇怪的知识增加了',
    date: '2024-12-31',
    category: '奇怪的知识增加了',
    cover: 'https://picsum.photos/seed/pyfun/400/200',
    tags: ['Python', 'Fun'],
    views: 2045,
    comments: 12
  }
];

export const RECENT_COMMENTS: Comment[] = [
  {
    id: '1',
    author: '米老虎',
    avatar: 'https://picsum.photos/seed/user1/50/50',
    date: '2025-09-17',
    content: '名称: 左手平凡网站: https://blog.perass.com/网站图标: ...',
  },
  {
    id: '2',
    author: 'Asteri5m',
    avatar: 'https://picsum.photos/seed/avatar/50/50',
    date: '2025-08-26',
    content: '哦？官方评论组件支持显示用户浏览器信息了诶，试一试。',
    isAdmin: true
  },
  {
    id: '3',
    author: '茶备案',
    avatar: 'https://picsum.photos/seed/user2/50/50',
    date: '2025-08-12',
    content: '博主你好，茶备案项目新开张，希望得到更大的支持加入茶备案！注册得到您的专属...',
  }
];

export const CATEGORIES: Category[] = [
  { name: '默认分类', count: 6 },
  { name: 'CTF赛后总结', count: 4 },
  { name: '随手记一些安全之外的技术', count: 5 },
  { name: 'Reserve基础知识', count: 5 },
  { name: '奇怪的知识增加了', count: 6 },
  { name: 'Pwn基础知识', count: 8 },
];
