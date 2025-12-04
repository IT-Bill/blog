import React, { useMemo } from 'react';
import { Github, Mail, Rss, Bell, Music, ChevronRight, Hash, FileText, Layers, Link as LinkIcon } from 'lucide-react';
import { Card } from './Card';
import { Link } from './Link';
import type { Post } from '../types';

interface SidebarProps {
  posts: Post[];
}

export const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  // 从 posts 中提取分类和统计数量
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    posts.forEach(post => {
      if (post.category) {
        categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
      }
    });
    return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // 从 posts 中提取所有标签
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [posts]);
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="text-center pt-4 pb-6">
        <div className="relative inline-block mb-4 group">
          <div className="w-24 h-24 rounded-full p-1 bg-linear-to-tr from-accent to-(--color-text-primary) mx-auto">
            <img 
              src="https://picsum.photos/seed/avatar/200/200" 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover border-4 border-(--color-bg-secondary)"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-success w-5 h-5 rounded-full border-4 border-(--color-bg-secondary)"></div>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-1">Bill</h2>
        {/* <p className="text-sm text-muted mb-6">这件事很难给你解释...</p> */}
        
        <div className="flex justify-center gap-8 mb-6 border-t border-b border-white/5 py-4">
          <div className="text-center">
            <div className="text-lg font-bold text-white">38</div>
            <div className="text-xs text-dimmed uppercase">文章</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">8</div>
            <div className="text-xs text-dimmed uppercase">分类</div>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 text-muted">
          <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Bell size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Mail size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Rss size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </Card>

      {/* Music Widget */}
      <Card noPadding className="relative group cursor-pointer">
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <Music size={14} className="text-white" />
          <span className="text-xs text-white/90 shadow-sm">接着奏乐接着舞</span>
        </div>
        <div className="h-28 overflow-hidden relative">
           <img src="https://picsum.photos/seed/music/500/300" className="w-full h-full object-cover opacity-60" alt="Music Cover" />
           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
           
           <div className="absolute bottom-3 left-3 right-3">
             <div className="flex justify-between items-end mb-1">
               <div className="text-xs text-white font-bold">第一次爱的人</div>
               <div className="text-[10px] text-white/70">00:00 / 02:18</div>
             </div>
             <div className="h-1 bg-white/20 rounded-full overflow-hidden">
               <div className="h-full w-1/3 bg-accent-hover rounded-full"></div>
             </div>
           </div>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
             <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white border-b-[6px] border-b-transparent ml-1"></div>
           </div>
        </div>
      </Card>

      {/* Recent Posts Mini List */}
      <Card noPadding>
        <div className="p-3 border-b border-white/5 flex justify-between items-center">
            <span className="flex items-center gap-2 text-primary text-sm font-medium"><FileText size={16}/> 最新文章</span>
            <Link href="/" className="text-xs text-dimmed cursor-pointer hover:text-accent flex items-center gap-0.5">更多 <ChevronRight size={14} /></Link>
        </div>
        <div className="">
            {posts.slice(0, 5).map(post => (
                <Link key={post.id} href={`/posts/${post.id}`} className="px-3 py-2 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm text-tertiary group-hover:text-accent truncate max-w-[180px]">{post.title}</span>
                    <LinkIcon size={12} className="text-dimmed group-hover:text-accent transition-transform duration-300 group-hover:rotate-225" />
                </Link>
            ))}
        </div>
      </Card>
      
      {/* Categories */}
      <Card noPadding>
        <div className="p-3 border-b border-white/5 flex justify-between items-center">
            <span className="flex items-center gap-2 text-primary text-sm font-medium"><Layers size={16}/> 分类</span>
            <Link href="/categories" className="text-xs text-dimmed cursor-pointer hover:text-accent flex items-center gap-0.5">更多 <ChevronRight size={14} /></Link>
        </div>
        <div className="p-1">
            {categories.map((cat, i) => (
                <div key={i} className="flex justify-between items-center p-1.5 rounded hover:bg-white/5 cursor-pointer text-sm text-tertiary">
                    <span>{cat.name}</span>
                    <span className="bg-(--color-bg-secondary)/50 px-1.5 py-0.5 rounded text-xs text-muted">{cat.count}</span>
                </div>
            ))}
        </div>
      </Card>

       {/* Tags */}
       <Card noPadding>
        <div className="p-3 border-b border-white/5 flex justify-between items-center">
            <span className="flex items-center gap-2 text-primary text-sm font-medium"><Hash size={16}/> 标签</span>
            <Link href="/tags" className="text-xs text-dimmed cursor-pointer hover:text-accent flex items-center gap-0.5">更多 <ChevronRight size={14} /></Link>
        </div>
        <div className="p-3 flex flex-wrap gap-2">
            {allTags.map((tag, i) => (
                <span key={i} className={`text-xs px-2 py-1 rounded border border-white/10 hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-pointer ${
                    i % 3 === 0 ? 'text-(--color-text-purple)' : i % 2 === 0 ? 'text-success' : 'text-accent'
                }`}>
                    {tag}
                </span>
            ))}
        </div>
      </Card>
    </div>
  );
};
