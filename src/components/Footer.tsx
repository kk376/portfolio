import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenShortcuts?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShortcuts }) => {
  return (
    <footer className="bg-slate-100 dark:bg-[#101117] text-slate-900 dark:text-white py-16 transition-colors duration-200 border-t border-slate-200 dark:border-[#2d3042]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-[#2d3042]">
          {/* Identity & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#7148fc] flex items-center justify-center text-white font-quicksand font-bold text-sm shadow-xs">
                KK
              </span>
              <div>
                <span className="font-quicksand text-xl font-bold tracking-tight text-slate-900 dark:text-white block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-xs text-[#7148fc] dark:text-[#09d8ff] font-semibold">
                  @{PERSONAL_INFO.handle}
                </span>
              </div>
            </div>

            <p className="font-quicksand text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md font-medium">
              Apprentice software engineer with a BCA degree (8.2 CGPA distinction), mastering modern web frontend craftsmanship while directing AI partners to investigate Linux hardware bottlenecks and land upstream contributions.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#202230] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fedora 44 Workstation • Kernel 6.14</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3 font-quicksand text-xs font-bold">
            <div className="text-slate-400 uppercase tracking-wider font-mono text-[11px]">
              Directory
            </div>
            <div className="flex flex-col space-y-2 text-slate-600 dark:text-slate-400 font-medium">
              <a href="#home" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">About</a>
              <a href="#socialmedia" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Developer Network</a>
              <a href="#skills" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Tech Stack</a>
              <a href="#projects" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Flagship Projects</a>
              <a href="#upstream" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Upstream Dispatches</a>
              <a href="#system" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Workstation Telemetry</a>
              <a href="#contact" className="hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-colors">Contact</a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3 font-quicksand text-xs font-bold">
            <div className="text-slate-400 uppercase tracking-wider font-mono text-[11px]">
              Direct Channels
            </div>
            <div className="flex flex-col space-y-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-[#202230] border border-slate-200 dark:border-slate-700 hover:border-[#7148fc] text-slate-700 dark:text-slate-300 hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-all shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <span>-&gt;</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-[#202230] border border-slate-200 dark:border-slate-700 hover:border-[#7148fc] text-slate-700 dark:text-slate-300 hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-all shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <span>-&gt;</span>
              </a>

              {onOpenShortcuts && (
                <button
                  onClick={onOpenShortcuts}
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-200/60 dark:bg-[#15161e] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-[#7148fc] dark:hover:text-[#09d8ff] transition-all text-left cursor-pointer"
                >
                  <span>Keyboard Shortcuts</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#202230] border border-slate-200 dark:border-slate-700 font-mono text-[10px]">
                    ?
                  </kbd>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <div>
            (c) 2026 Kushagra Kumar. Engineered with React and Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#7148fc] dark:text-[#09d8ff] font-semibold">[Andrew Baisden Architecture Edition]</span>
            <span>Local Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
