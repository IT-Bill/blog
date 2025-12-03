import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-[rgba(40,44,52,0.6)] backdrop-blur-md border border-white/5 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-[rgba(40,44,52,0.8)] ${className}`}>
      <div className={noPadding ? '' : 'p-5'}>
        {children}
      </div>
    </div>
  );
};
