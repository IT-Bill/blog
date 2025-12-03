import React from 'react';

interface ProgressBarProps {
  label: string;
  subLabel: string;
  percent: number;
  colorClass: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, subLabel, percent, colorClass }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">{subLabel}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${colorClass} relative overflow-hidden`} 
            style={{ width: `${percent}%` }}
          >
             <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
        <span className="text-xs text-gray-400 w-8 text-right">{percent}%</span>
      </div>
    </div>
  );
};
