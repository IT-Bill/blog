import React from 'react';
import { Calendar, Eye, MessageSquare, Clock, ThumbsUp, DollarSign, Share2 } from 'lucide-react';
import { Card } from './Card';
import type { Post } from '../types';
import { MOCK_POSTS } from '../constants';

interface ArticleDetailProps {
    postId: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ postId }) => {
  const post = MOCK_POSTS.find(p => p.id === postId) || MOCK_POSTS[0];

  return (
    <div className="animate-fade-in">
        {/* Banner Image */}
        <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6 relative group">
             <img src={post.cover || "https://picsum.photos/seed/default/800/400"} className="w-full h-full object-cover" alt="Cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
             <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                 <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
                 <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300">
                     <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                         <img src="https://picsum.photos/seed/avatar/30/30" className="w-5 h-5 rounded-full" alt="avatar" />
                         <span>Asteri5m</span>
                     </div>
                     <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                     <span className="flex items-center gap-1"><Eye size={14}/> {post.views}</span>
                     <span className="flex items-center gap-1"><MessageSquare size={14}/> {post.comments}</span>
                     <span className="flex items-center gap-1"><Clock size={14}/> 15 分钟</span>
                 </div>
             </div>
        </div>

        <Card className="mb-6">
            {/* Note block mimicking screenshot 3 top part */}
            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r mb-8 text-sm text-slate-300">
                <p>如果有下次，我希望我不是那个主动的人。</p>
            </div>

            {/* Quote block */}
            <div className="relative p-6 mb-8 text-center">
                 <div className="text-xl md:text-2xl font-serif italic text-slate-200 relative z-10 leading-relaxed">
                    其实我也被谁坚定地选择一次<br/>
                    人这一生，最怕突然想通又突然心痛<br/>
                    我笑着说没关系，其实已经碎了一地
                 </div>
                 <div className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif">"</div>
                 <div className="absolute -bottom-10 -right-2 text-6xl text-white/5 font-serif">"</div>
            </div>

            {/* Content */}
            <div 
                className="prose prose-invert prose-sm md:prose-base max-w-none text-slate-300"
                dangerouslySetInnerHTML={{ __html: post.content || '<p>Content placeholder...</p>' }} 
            />

            {/* Copyright / Footer of article */}
            <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex gap-4">
                     <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 rounded-full text-sm transition-colors border border-yellow-500/20">
                         <DollarSign size={16} /> 打赏
                     </button>
                     <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 rounded-full text-sm transition-colors border border-white/5">
                         <ThumbsUp size={16} /> 赞 2
                     </button>
                 </div>
                 <div className="text-xs text-slate-500 text-center md:text-right">
                     如果觉得文章对你有用，请随意赞赏
                 </div>
            </div>
            
            <div className="mt-6 bg-[#182030] rounded-lg p-4 border border-white/5 text-xs text-slate-400">
                <p className="font-bold text-slate-300 mb-1">python实现全屏弹幕</p>
                <p className="mb-1 text-blue-400/80">https://asteri5m.icu/archives/fff7d8fa-947e-4636-8783-d7dc3165c649</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 pt-2 border-t border-white/5">
                    <div>
                        <span className="block text-slate-500">作者</span>
                        <span className="text-slate-300">Asteri5m</span>
                    </div>
                     <div>
                        <span className="block text-slate-500">发布于</span>
                        <span className="text-slate-300">{post.date}</span>
                    </div>
                     <div>
                        <span className="block text-slate-500">更新于</span>
                        <span className="text-slate-300">2025-10-30</span>
                    </div>
                     <div>
                        <span className="block text-slate-500">许可协议</span>
                        <span className="text-slate-300">@CC BY 4.0</span>
                    </div>
                </div>
            </div>
        </Card>

        {/* Comment Section Placeholder */}
        <Card>
            <div className="flex items-center gap-2 mb-6 font-bold text-white">
                <MessageSquare size={18} /> 评论
            </div>
            <div className="bg-[#182030] p-4 rounded-xl border border-white/5 mb-6">
                <textarea 
                    className="w-full bg-transparent border-none text-slate-300 text-sm focus:ring-0 resize-none h-24 placeholder-slate-600"
                    placeholder="编写评论..."
                ></textarea>
                <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-2">
                    <div className="flex gap-2 text-slate-500">
                         {/* Formatting icons placeholder */}
                         <span className="cursor-pointer hover:text-white">B</span>
                         <span className="cursor-pointer hover:text-white">/</span>
                         <span className="cursor-pointer hover:text-white">U</span>
                         <span className="cursor-pointer hover:text-white">{'{}'}</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="text" placeholder="昵称" className="bg-[#0f172a] border border-white/10 rounded px-2 py-1 text-xs text-white" />
                        <input type="text" placeholder="邮箱" className="bg-[#0f172a] border border-white/10 rounded px-2 py-1 text-xs text-white hidden md:block" />
                         <button className="px-4 py-1 bg-green-600 hover:bg-green-500 text-white text-xs rounded transition-colors">提交评论</button>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-slate-500">
                0 条评论
            </div>
        </Card>
    </div>
  );
};
