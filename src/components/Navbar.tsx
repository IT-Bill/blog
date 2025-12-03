import React from 'react';
import { Search, Book, Coffee, Users, PenTool, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(40,44,52,0.6)] backdrop-blur-md border-b border-white/5 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium text-slate-100 tracking-wide">Asteri5m的小破站</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-blue-400 pb-0.5">
          <Book size={16} /> 文库
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
          <Coffee size={16} /> 小站
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
          <Users size={16} /> 社交
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
          <PenTool size={16} /> 工具
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="搜索内容..." 
            className="w-48 bg-slate-800/50 border border-slate-700 rounded-full py-1.5 pl-4 pr-10 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <button className="absolute right-1 top-1 p-1 bg-blue-500/20 rounded-full text-blue-400 hover:text-blue-300">
            <Search size={14} />
          </button>
        </div>
        <button className="md:hidden text-slate-300">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
