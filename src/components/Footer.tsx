import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080b] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-semibold">Kushagra Kumar</span>
            <span className="text-slate-700">/</span>
            <span>Local Station (portfolio_v2)</span>
          </div>

          <div className="text-center text-slate-500 text-[11px]">
            Engineered with React, TypeScript & Tailwind CSS. Zero em dashes.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://gitlab.com/Kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" />
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
