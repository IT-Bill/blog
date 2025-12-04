import React from 'react';
import { Calendar, Folder, Tag, MoreHorizontal } from 'lucide-react';
import { Card } from './Card';
import { MOCK_POSTS } from '../constants';

interface PostListProps {
  onPostClick: (id: string) => void;
}

export const PostList: React.FC<PostListProps> = ({ onPostClick }) => {
  return (
    <div className="space-y-4">
      {/* 2025 Year Label */}
      <div className="flex items-center gap-2">
         <span className="px-3 py-1 bg-(--color-bg-secondary)/80 rounded text-xs font-mono text-muted">2025</span>
         <div className="h-px bg-(--color-bg-secondary) flex-1"></div>
      </div>

      {MOCK_POSTS.slice(0, 3).map((post, index) => (
        <div key={post.id} className="relative pl-6 sm:pl-0">
             {/* Timeline dot for mobile/small views mainly */}
             <div className="absolute left-0 top-6 w-3 h-3 bg-(--color-bg-secondary) rounded-full border-2 border-(--color-bg-primary) sm:hidden"></div>
             
             <Card className="group cursor-pointer" noPadding>
                <div onClick={() => onPostClick(post.id)} className="flex flex-col md:flex-row">
                    {post.cover && (
                        <div className="md:w-48 h-32 md:h-auto relative overflow-hidden">
                            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                            {index === 0 && <div className="absolute top-2 left-2 px-2 py-0.5 bg-accent/80 backdrop-blur-sm text-[10px] text-white rounded">置顶</div>}
                        </div>
                    )}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-xs text-muted mb-2">
                                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                                {post.category && <span className="flex items-center gap-1"><Folder size={12}/> {post.category}</span>}
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{post.title}</h2>
                            <p className="text-sm text-muted line-clamp-2 mb-4">{post.summary}</p>
                        </div>
                        {/* <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-2">
                             <div className="flex items-center gap-2">
                                <img src="https://picsum.photos/seed/avatar/30/30" className="w-6 h-6 rounded-full" alt="avatar" />
                                <span className="text-xs text-muted">Bill</span>
                             </div>
                             <MoreHorizontal size={16} className="text-dimmed" />
                        </div> */}
                    </div>
                </div>
             </Card>
        </div>
      ))}

      {/* 2024 Year Label */}
      <div className="flex items-center gap-2 mt-4">
         <span className="px-3 py-1 bg-(--color-bg-secondary)/80 rounded text-xs font-mono text-muted">2024</span>
         <div className="h-px bg-(--color-bg-secondary) flex-1"></div>
      </div>
      
       {MOCK_POSTS.slice(3).map((post) => (
         <div key={post.id} className="relative pl-6 sm:pl-0">
             <div className="absolute left-0 top-6 w-3 h-3 bg-(--color-bg-secondary) rounded-full border-2 border-(--color-bg-primary) sm:hidden"></div>
             <Card className="group cursor-pointer" noPadding>
                <div onClick={() => onPostClick(post.id)} className="flex flex-col md:flex-row">
                    {post.cover && (
                         <div className="md:w-48 h-32 md:h-auto relative overflow-hidden shrink-0">
                            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}
                    <div className="p-4 flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted mb-1">
                             <span>{post.date}</span>
                        </div>
                         <h2 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{post.title}</h2>
                         <p className="text-xs text-muted line-clamp-1">{post.summary}</p>
                    </div>
                </div>
            </Card>
         </div>
       ))}
    </div>
  );
};
