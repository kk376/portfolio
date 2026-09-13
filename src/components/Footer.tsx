import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050609] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Frontend Learner & Open Source Explorer</span>
          </div>

          <div className="text-slate-500 text-[11px] text-center">
            Built with React, TypeScript & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
