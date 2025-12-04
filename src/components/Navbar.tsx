import React from 'react';
import { Search, Book, Coffee, Users, PenTool, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-10 bg-(--color-bg-card) backdrop-blur-md border-b border-white/5 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium text-primary tracking-wide">Bill的小破站</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <a href="#" className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors border-b-2 border-(--color-border-accent) pb-0.5">
          <Book size={16} /> 文库
        </a>
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
