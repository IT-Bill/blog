import React from 'react';
import { Calendar, Folder } from 'lucide-react';
import { Card } from './Card';
import { Link } from './Link';
import type { Post } from '../types';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  // 按年份分组文章
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));
  return (
    <div className="space-y-4">
      {years.map((year, yearIndex) => (
        <React.Fragment key={year}>
          {/* Year Label */}
          <div className={`flex items-center gap-2 ${yearIndex > 0 ? 'mt-4' : ''}`}>
            <span className="px-3 py-1 bg-(--color-bg-secondary)/80 rounded text-xs font-mono text-muted">{year}</span>
            <div className="h-px bg-(--color-bg-secondary) flex-1"></div>
          </div>

          {postsByYear[year].map((post, index) => (
            <div key={post.id} className="relative pl-6 sm:pl-0">
              {/* Timeline dot for mobile/small views mainly */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-(--color-bg-secondary) rounded-full border-2 border-(--color-bg-primary) sm:hidden"></div>
              
              <Card className="group cursor-pointer" noPadding>
                <Link href={`/posts/${post.id}`} className="flex flex-col md:flex-row">
                  {post.cover && (
                    <div className="md:w-48 h-32 md:h-auto relative overflow-hidden shrink-0">
                      <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
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
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
