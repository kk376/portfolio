import React from 'react';

interface SectionHeaderProps {
  heading: string;
  subHeading: string;
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  subHeading,
  badge,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-14 px-4">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-900/50 mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
        {heading}
      </h2>
      <p className="font-montserrat text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
        {subHeading}
      </p>
      <div className="w-16 h-1 rounded-full anand-gradient-bg mt-4" />
    </div>
  );
};
