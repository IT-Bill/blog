import React, { useMemo } from 'react';
import { Card } from '@/components/Card';
import { Link } from '@/components/Link';
import { Hash, FileText } from 'lucide-react';
import type { Post } from '@/types';

interface TagsListProps {
  posts: Post[];
}

export const TagsList: React.FC<TagsListProps> = ({ posts }) => {
  // 按标签分组
  const tags = useMemo(() => {
    const tagMap = new Map<string, Post[]>();
    posts.forEach(post => {
      post.tags?.forEach(tag => {
        if (!tagMap.has(tag)) {
          tagMap.set(tag, []);
        }
        tagMap.get(tag)!.push(post);
      });
    });

    const colors = [
      'bg-accent/20 text-accent border-accent/30',
      'bg-success/20 text-success border-success/30',
      'bg-warning/20 text-warning border-warning/30',
      'bg-danger/20 text-danger border-danger/30',
      'bg-purple/20 text-purple border-purple/30',
      'bg-accent-hover/20 text-accent-hover border-accent-hover/30',
      'bg-pink-400/20 text-pink-400 border-pink-400/30',
      'bg-teal-400/20 text-teal-400 border-teal-400/30',
      'bg-orange-400/20 text-orange-400 border-orange-400/30',
      'bg-cyan-400/20 text-cyan-400 border-cyan-400/30',
    ];

    return Array.from(tagMap.entries())
      .map(([name, posts], index) => ({ name, posts, color: colors[index % colors.length] }))
      .sort((a, b) => b.posts.length - a.posts.length);
  }, [posts]);

  const totalTags = tags.length;

  const scrollToTag = (tagName: string) => {
    const element = document.getElementById(`tag-${tagName}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Card noPadding>
      <div className="p-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-success/20 rounded-lg">
            <Hash className="w-4 h-4 text-success" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">文章标签</h1>
            <p className="text-sm text-muted">共 {totalTags} 个标签，{posts.length} 篇文章</p>
          </div>
        </div>
      </div>

      {/* 标签云 */}
      <div className="p-3 border-b border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => scrollToTag(tag.name)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition-all hover:scale-105 ${tag.color}`}
            >
              <span>{tag.name}</span>
              <span className="text-xs opacity-70">{tag.posts.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 标签详情列表 */}
      <div className="p-3 space-y-4">
        {tags.map((tag) => (
          <div key={tag.name} id={`tag-${tag.name}`} className="scroll-mt-16">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm font-medium ${tag.color}`}>
                <Hash className="w-3.5 h-3.5" />
                {tag.name}
              </span>
              <span className="text-xs text-muted">{tag.posts.length} 篇文章</span>
            </div>
            
            <div className="ml-2 pl-3 border-l-2 border-white/10 space-y-0.5">
              {tag.posts.map(post => (
                <Link 
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-3.5 h-3.5 text-dimmed shrink-0" />
                    <span className="text-sm text-tertiary group-hover:text-accent transition-colors truncate">{post.title}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {post.category && (
                      <span className="text-xs text-muted bg-(--color-bg-secondary)/50 px-1.5 py-0.5 rounded hidden sm:inline">{post.category}</span>
                    )}
                    <span className="text-xs text-dimmed">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
