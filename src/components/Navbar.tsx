import React, { useState, useEffect } from 'react';
import { Search, Book, Coffee, Users, PenTool, Menu, Archive, Layers, Hash } from 'lucide-react';
import { Link } from './Link';

export const Navbar: React.FC = () => {
  const [showLibraryMenu, setShowLibraryMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-10 bg-(--color-bg-card) backdrop-blur-md border-b border-white/5 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-base font-medium text-primary hover:text-accent transition-colors">Bill的小破站</Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <div 
          className="relative"
          onMouseEnter={() => setShowLibraryMenu(true)}
          onMouseLeave={() => setShowLibraryMenu(false)}
        >
          <div className="flex items-center gap-1.5 text-accent transition-colors border-b-2 border-(--color-border-accent) pb-0.5">
            <Book size={16} /> 文库
          </div>
          
          {/* 下拉菜单 */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-28 transition-all duration-200 ${showLibraryMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
            {/* 向上箭头 */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-accent/40"></div>
            
            <div className="bg-(--color-bg-secondary)/95 backdrop-blur-md border border-accent/30 rounded-lg shadow-lg shadow-accent/10 overflow-hidden">
              <Link 
                href="/"
                className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${isActive('/') ? 'text-accent bg-accent/10' : 'text-tertiary hover:text-accent hover:bg-white/5'}`}
              >
                <Archive size={14} />
                文章归档
              </Link>
              <Link 
                href="/categories" 
                className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${isActive('/categories') ? 'text-accent bg-accent/10' : 'text-tertiary hover:text-accent hover:bg-white/5'}`}
              >
                <Layers size={14} />
                分类列表
              </Link>
              <Link 
                href="/tags" 
                className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${isActive('/tags') ? 'text-accent bg-accent/10' : 'text-tertiary hover:text-accent hover:bg-white/5'}`}
              >
                <Hash size={14} />
                标签列表
              </Link>
            </div>
          </div>
        </div>
        <a href="#" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Coffee size={16} /> 小站
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Users size={16} /> 社交
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <PenTool size={16} /> 工具
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block w-36">
          <input 
            type="text" 
            placeholder="搜索内容..." 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-36 bg-(--color-bg-secondary) border border-(--color-bg-secondary) rounded-full py-1.5 pl-4 pr-10 text-sm text-secondary focus:outline-none focus:border-accent focus:ring-0.5 focus:ring-accent focus:w-56 transition-all duration-300 ease-in-out"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 bg-accent/20 rounded-full text-accent hover:text-accent-hover z-10">
            <Search size={14} />
          </button>
        </div>
        <button className="md:hidden text-tertiary">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
