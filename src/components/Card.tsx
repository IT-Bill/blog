import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-(--color-bg-card) border border-white/5 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-(--color-bg-card-hover) ${className}`}>
      <div className={noPadding ? '' : 'p-5'}>
        {children}
      </div>
    </div>
  );
};
