import React from 'react';

interface AndrewSectionHeaderProps {
  id: string;
  title: string;
  lede?: string;
  badge?: string;
}

export const AndrewSectionHeader: React.FC<AndrewSectionHeaderProps> = ({
  id,
  title,
  lede,
  badge,
}) => {
  return (
    <div className="mb-10 sm:mb-12">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-100 dark:bg-purple-950/60 text-[#7148fc] dark:text-[#09d8ff] border border-purple-200 dark:border-purple-900/50 mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7148fc] dark:bg-[#09d8ff] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <div>
        <a href={`/#${id}`} className="andrew-section-title">
          {title}
        </a>
      </div>
      {lede && (
        <p className="font-quicksand text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mt-3 leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
};
