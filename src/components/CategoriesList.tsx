import React, { useMemo } from 'react';
import { Card } from './Card';
import { Layers, ChevronRight, FileText } from 'lucide-react';
import type { Post } from '../types';

interface CategoriesListProps {
  posts: Post[];
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ posts }) => {
  // 按分类分组
  const categories = useMemo(() => {
    const categoryMap = new Map<string, Post[]>();
    posts.forEach(post => {
      const cat = post.category || '默认分类';
      if (!categoryMap.has(cat)) {
        categoryMap.set(cat, []);
      }
      categoryMap.get(cat)!.push(post);
    });
    
    return Array.from(categoryMap.entries())
      .map(([name, posts]) => ({ name, posts }))
      .sort((a, b) => b.posts.length - a.posts.length);
  }, [posts]);

  const totalCategories = categories.length;

  const [expandedCategories, setExpandedCategories] = React.useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getColorClass = (index: number) => {
    const colors = [
      'bg-accent', 'bg-success', 'bg-warning', 'bg-danger',
      'bg-purple', 'bg-accent-hover', 'bg-pink-400', 'bg-teal-400'
    ];
    return colors[index % colors.length];
  };

  return (
    <Card noPadding>
      <div className="p-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-purple/20 rounded-lg">
            <Layers className="w-4 h-4 text-purple" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">文章分类</h1>
            <p className="text-sm text-muted">共 {totalCategories} 个分类，{posts.length} 篇文章</p>
          </div>
        </div>
      </div>

      <div className="p-3 space-y-2">
        {categories.map((category, index) => (
          <div key={category.name} className="group">
            <div 
              className="flex items-center justify-between p-2 bg-(--color-bg-secondary)/30 rounded-lg hover:bg-(--color-bg-secondary)/50 transition-colors cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getColorClass(index)}`}></div>
                <span className="text-secondary font-medium">{category.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted bg-(--color-bg-secondary) px-2 py-0.5 rounded-full">{category.posts.length}</span>
                <ChevronRight className={`w-4 h-4 text-dimmed group-hover:text-accent transition-all duration-200 ${expandedCategories.has(index) ? 'rotate-90' : ''}`} />
              </div>
            </div>
            
            {expandedCategories.has(index) && (
              <div className="mt-1.5 ml-3 pl-3 border-l-2 border-white/10 space-y-0.5">
                {category.posts.map(post => (
                  <a 
                    key={post.id}
                    href={`/posts/${post.id}`}
                    className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-3.5 h-3.5 text-dimmed shrink-0" />
                      <span className="text-sm text-tertiary group-hover/item:text-accent transition-colors truncate">{post.title}</span>
                    </div>
                    <span className="text-xs text-dimmed shrink-0 ml-2">{post.date}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
