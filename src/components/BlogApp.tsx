import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { PostList } from './PostList';
import { ArrowUp } from 'lucide-react';

export default function BlogApp() {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 pt-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar (Sticky) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>

          {/* Main Content (Scrollable) */}
          <div className="lg:col-span-9 min-h-[80vh]">
            <PostList />
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden">
            <Sidebar />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-xs text-dimmed pb-8">
        <p>© 2025 • Bill的小破站 • Powered by Astro</p>
        <p className="mt-1">建站 1506 天 03 时 59 分 27 秒</p>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 p-3 bg-accent/80 hover:bg-accent text-white rounded-full shadow-lg backdrop-blur-sm transition-all z-40 hidden md:block"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
