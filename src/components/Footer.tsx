import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151515] text-[#fcfcfc] py-16 transition-colors duration-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea2804]" />
            <span className="font-semibold text-white">REPLICATE LAB NOTEBOOK // DIRECTION 03</span>
          </div>
          <div className="text-neutral-400">
            Open Source Systems & Frontend Exploration
          </div>
        </div>

        {/* Multi-column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          {/* Col 1: Identity & Apprentice Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-white">
                Kushagra Kumar
              </span>
              <span className="font-mono text-xs text-[#ea2804] font-medium">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-sm">
              Apprentice software engineer with a BCA degree (8.2 CGPA), actively mastering modern frontend architecture while steering AI partners to diagnose Linux bottlenecks and ship upstream contributions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-neutral-200 font-mono text-[11px]">
              <span>Station: Fedora 44 Workstation</span>
            </div>
          </div>

          {/* Col 2: Typographic Engine */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-semibold text-white border-b border-white/10 pb-1">
              Design Architecture
            </div>
            <div className="space-y-2 text-neutral-400">
              <div>
                <span className="text-white font-medium">Display Type: </span>
                <span>Bricolage Grotesque (tight leading)</span>
              </div>
              <div>
                <span className="text-white font-medium">Body / UI: </span>
                <span>Plus Jakarta Sans & Inter</span>
              </div>
              <div>
                <span className="text-white font-medium">Code & Telemetry: </span>
                <span>JetBrains Mono</span>
              </div>
              <div>
                <span className="text-white font-medium">Brand Accent: </span>
                <span>Replicate Fire Orange (#ea2804)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-semibold text-white border-b border-white/10 pb-1">
              Direct Channels
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-[#ea2804] text-neutral-300 hover:text-white transition-all"
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
                className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-[#ea2804] text-neutral-300 hover:text-white transition-all"
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
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            (c) 2026 Kushagra Kumar. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#ea2804] font-semibold">[EDITION NO. 03 // REPLICATE AI LAB]</span>
            <span>Local Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
