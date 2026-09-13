import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Mail, ArrowUp, Command } from 'lucide-react';
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
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
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
            className="w-9 h-9 rounded-full bg-white dark:bg-[#181825] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#181825] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Kushagra"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#181825] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              title="Keyboard Shortcuts (? or ⌘K)"
              aria-label="Keyboard Shortcuts"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-[#181825] border border-slate-200 dark:border-white/10 text-slate-500 hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/40 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-200" />
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#181825] border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-700 dark:text-slate-300 group-hover:text-[var(--accent-primary)] transition-colors">
                ?
              </kbd>
              <span className="hidden sm:inline text-[11px] font-medium text-slate-600 dark:text-slate-400 group-hover:text-[var(--accent-primary)] transition-colors">
                Shortcuts
              </span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="w-9 h-9 rounded-full bg-[var(--btn-primary-bg)] text-white flex items-center justify-center shadow-md hover:bg-[var(--btn-primary-hover)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
