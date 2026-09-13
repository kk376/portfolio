import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle }) => {
  return (
    <div id={id} className="text-center mb-14">
      <h2 className="greg-section-title relative inline-block">
        {title}
        {/* Greg Sithole signature decorative dots */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF4C60]" />
          <span className="w-6 h-1.5 rounded-full bg-[#FFD15C]" />
          <span className="w-2 h-2 rounded-full bg-[#6C6CE5]" />
        </span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
