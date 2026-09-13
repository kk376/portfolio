import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionFooterProps {
  phrase: string;
  link: string;
  toAddress: string;
}

export const SectionFooter: React.FC<SectionFooterProps> = ({
  phrase,
  link,
  toAddress,
}) => {
  return (
    <div className="mt-16 text-center pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <p className="font-montserrat text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 inline-flex flex-wrap items-center justify-center gap-2">
        <span>{phrase}</span>
        <a
          href={toAddress}
          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 underline underline-offset-4 decoration-2 decoration-blue-400 dark:decoration-cyan-400 hover:scale-105 transition-all cursor-pointer"
        >
          <span>{link}</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </a>
      </p>
    </div>
  );
};
