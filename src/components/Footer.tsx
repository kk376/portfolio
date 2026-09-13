import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenShortcuts?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShortcuts }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Note */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-0.5 font-bold text-xl text-slate-900 dark:text-white"
          >
            <span>KK</span>
            <span className="w-2 h-2 rounded-full bg-[#FF4C60]" />
          </a>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2026 {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        {/* Social Icons & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[#FF4C60] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[#FF4C60] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Kushagra"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[#FF4C60] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              title="Keyboard Shortcuts"
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-[#252536] border border-slate-200 dark:border-white/5 text-slate-500 hover:text-[#FF4C60] transition-colors"
            >
              ?
            </button>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="w-9 h-9 rounded-full bg-[#FF4C60] text-white flex items-center justify-center shadow-md hover:bg-[#E63946] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
