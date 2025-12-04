import type { Comment } from './types';

// 文章数据现在存储在 src/content/posts/*.md 中
// 并通过 Astro Content Collections 获取

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
