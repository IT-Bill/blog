import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { PostList } from './PostList';
import { ArticleDetail } from './ArticleDetail';
import { ArrowUp } from 'lucide-react';

export default function BlogApp() {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handlePostClick = (id: string) => {
    setSelectedPostId(id);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-12">
      <div onClick={handleHomeClick} className="cursor-pointer">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 md:px-6 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar (Sticky) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>

          {/* Main Content (Scrollable) */}
          <div className="lg:col-span-9 min-h-[80vh]">
            {currentView === 'home' ? (
              <PostList onPostClick={handlePostClick} />
            ) : (
              <ArticleDetail postId={selectedPostId!} />
            )}
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden">
            <Sidebar />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-xs text-dimmed pb-8">
        <p>© 2021-2025 • Asteri5m的小破站 • Powered by Halo & Dream2.0 Plus</p>
        <div className="flex justify-center items-center gap-2 mt-2">
           <span className="w-4 h-4 rounded-full bg-(--color-bg-secondary) block"></span>
           <span>蜀ICP备2021029058号</span>
           <span>川公网安备 51011202000479号</span>
        </div>
        <p className="mt-1">建站 1506 天 03 时 59 分 27 秒</p>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 p-3 bg-(--color-accent)/80 hover:bg-(--color-accent) text-white rounded-full shadow-lg backdrop-blur-sm transition-all z-40 hidden md:block"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
