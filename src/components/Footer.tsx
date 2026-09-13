import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416] py-16 text-[#111111] dark:text-[#E5E5E0] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monograph Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-[0.16em]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF4F00] inline-block" />
            <span className="font-bold">Colophon // Archival Record No. 02</span>
          </div>
          <div className="text-black/60 dark:text-white/60">
            Swiss Neo-Brutalist Architecture Monograph
          </div>
        </div>

        {/* Multi-column Colophon Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          {/* Col 1: Identity & Apprentice Statement */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-black dark:text-white">
              Kushagra Kumar
            </h3>
            <p className="font-sans text-xs text-black/75 dark:text-white/75 leading-relaxed max-w-sm">
              Apprentice software engineer with a BCA degree (8.2 CGPA), actively mastering modern frontend architecture while steering AI partners to diagnose Linux bottlenecks and ship upstream contributions.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black font-mono text-[11px] font-bold uppercase tracking-wider">
              <span>Station: Fedora 44 Workstation</span>
            </div>
          </div>

          {/* Col 2: Typographic Matrix */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-bold uppercase tracking-[0.16em] text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-1">
              Typographic Engine
            </div>
            <div className="space-y-2 text-black/70 dark:text-white/70">
              <div>
                <span className="text-black dark:text-white font-bold">Display: </span>
                <span>Newsreader & Playfair Display</span>
              </div>
              <div>
                <span className="text-black dark:text-white font-bold">Body: </span>
                <span>Space Grotesk & Inter</span>
              </div>
              <div>
                <span className="text-black dark:text-white font-bold">Spec Data: </span>
                <span>JetBrains Mono (0.16em tracking)</span>
              </div>
              <div>
                <span className="text-black dark:text-white font-bold">Accents: </span>
                <span>International Orange (#FF4F00) & Klein Blue (#1D4ED8)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Architectural Standards */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-bold uppercase tracking-[0.16em] text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-1">
              Direct Channels
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 bg-white dark:bg-[#1f1f23] border-2 border-black dark:border-white font-mono text-xs font-bold uppercase tracking-wider shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-transform"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </span>
                <span>-&gt;</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 bg-white dark:bg-[#1f1f23] border-2 border-black dark:border-white font-mono text-xs font-bold uppercase tracking-wider shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-transform"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </span>
                <span>-&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Double-Rule Colophon Metadata */}
        <div className="pt-6 border-t-2 border-black dark:border-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-black/60 dark:text-white/60">
          <div>
            (c) 2026 Kushagra Kumar. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#FF4F00] font-bold">[EDITION NO. 02 // SWISS NEO-BRUTALIST]</span>
            <span>Handcrafted Typography</span>
            <span className="text-black dark:text-white font-bold">Local Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
