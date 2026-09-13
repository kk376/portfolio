import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0f0c] text-[#e8ebe6] py-16 transition-colors duration-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9fe870]" />
            <span className="font-bold text-white">APPRENTICE DISPATCH // DIRECTION 04</span>
          </div>
          <div className="text-[#868685]">
            Open Source Systems & Frontend Exploration
          </div>
        </div>

        {/* Multi-column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          {/* Col 1: Identity & Apprentice Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black text-white">
                Kushagra Kumar
              </span>
              <span className="font-mono text-xs text-[#9fe870] font-bold">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
            <p className="font-sans text-xs text-[#b5b8b2] leading-relaxed max-w-sm">
              Apprentice software engineer with a BCA degree (8.2 CGPA), actively mastering modern frontend architecture while steering AI partners to diagnose Linux bottlenecks and ship upstream contributions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f4f6f2] font-mono text-[11px]">
              <span>Station: Fedora 44 Workstation</span>
            </div>
          </div>

          {/* Col 2: Typographic Engine */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-bold text-white border-b border-white/10 pb-1">
              Design Architecture
            </div>
            <div className="space-y-2 text-[#b5b8b2]">
              <div>
                <span className="text-white font-medium">Display Type: </span>
                <span>Inter Black (weight 900)</span>
              </div>
              <div>
                <span className="text-white font-medium">Body / UI: </span>
                <span>Inter (weights 400 & 600)</span>
              </div>
              <div>
                <span className="text-white font-medium">Code & Telemetry: </span>
                <span>JetBrains Mono</span>
              </div>
              <div>
                <span className="text-white font-medium">Brand Accent: </span>
                <span className="text-[#9fe870] font-bold">Wise Electric Lime (#9fe870)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-bold text-white border-b border-white/10 pb-1">
              Direct Channels
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-[#9fe870] hover:text-[#0e0f0c] text-[#b5b8b2] transition-all font-semibold"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </span>
                <span>-&gt;</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-[#9fe870] hover:text-[#0e0f0c] text-[#b5b8b2] transition-all font-semibold"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </span>
                <span>-&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Metadata */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#868685]">
          <div>
            (c) 2026 Kushagra Kumar. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#9fe870] font-bold">[EDITION NO. 04 // WISE SCANDINAVIAN]</span>
            <span>Local Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
