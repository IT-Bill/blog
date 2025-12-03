import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-[#1e293b]/60 backdrop-blur-md border border-white/5 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-[#1e293b]/80 ${className}`}>
      <div className={noPadding ? '' : 'p-5'}>
        {children}
      </div>
    </div>
  );
};
