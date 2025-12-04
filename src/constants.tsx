import type { Post, Comment, Category } from './types';

// 文章数据现在存储在 src/content/posts/*.md 中
// 这里保留一个映射，用于客户端组件导航
export const POST_SLUGS: Record<string, string> = {
  '1': 'python-fullscreen-danmaku',
  '2': 'mac-quickstart',
  '3': 'hdc-guide',
  '4': 'mac-screenshot',
  '5': 'python-tricks',
};

// 保留 MOCK_POSTS 用于侧边栏等组件的显示
export const MOCK_POSTS: Post[] = [
  {
    id: 'python-fullscreen-danmaku',
    title: 'python实现全屏弹幕',
    summary: '随手记一些安全之外的技术',
    date: '2025-10-29',
    category: '随手记',
    cover: 'https://picsum.photos/seed/python/400/200',
    tags: ['Python', 'Tech'],
    views: 1506,
    comments: 0,
  },
  {
    id: 'mac-quickstart',
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
    id: 'hdc-guide',
    title: 'hdc使用指南',
    summary: 'Reserve基础知识',
    date: '2025-01-16',
    category: 'Reserve基础知识',
    tags: ['HarmonyOS'],
    views: 128,
    comments: 2
  },
  {
    id: 'mac-screenshot',
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
    id: 'python-tricks',
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
    author: 'Bill',
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
