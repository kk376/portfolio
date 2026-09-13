import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f9fc] dark:bg-[#080b11] text-[#0d253d] dark:text-[#f8fafc] py-16 transition-colors duration-200 border-t border-[#e3e8ee] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#e3e8ee] dark:border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#533afd] dark:bg-[#00d4ff]" />
            <span className="font-semibold text-[#0d253d] dark:text-white">APPRENTICE DISPATCH // DIRECTION 05</span>
          </div>
          <div className="text-[#64748d] dark:text-[#94a3b8]">
            Open Source Systems & Frontend Exploration
          </div>
        </div>

        {/* Multi-column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          {/* Col 1: Identity & Apprentice Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-light text-[#0d253d] dark:text-white tracking-tight">
                Kushagra Kumar
              </span>
              <span className="font-mono text-xs text-[#533afd] dark:text-[#00d4ff] font-semibold">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
            <p className="font-sans text-xs text-[#64748d] dark:text-[#94a3b8] leading-relaxed max-w-sm">
              Apprentice software engineer with a BCA degree (8.2 CGPA), actively mastering modern frontend architecture while steering AI partners to diagnose Linux bottlenecks and ship upstream contributions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1e293b] border border-[#e3e8ee] dark:border-white/10 text-[#273951] dark:text-[#cbd5e1] font-mono text-[11px] tabular-nums">
              <span>Station: Fedora 44 Workstation</span>
            </div>
          </div>

          {/* Col 2: Typographic Engine */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-semibold text-[#0d253d] dark:text-white border-b border-[#e3e8ee] dark:border-white/10 pb-1">
              Design Architecture
            </div>
            <div className="space-y-2 text-[#64748d] dark:text-[#94a3b8]">
              <div>
                <span className="text-[#0d253d] dark:text-white font-medium">Display Type: </span>
                <span>Inter Light (weight 300, -0.03em tracking)</span>
              </div>
              <div>
                <span className="text-[#0d253d] dark:text-white font-medium">Body / UI: </span>
                <span>Inter (weights 400 & 500, ss01)</span>
              </div>
              <div>
                <span className="text-[#0d253d] dark:text-white font-medium">Figures & Telemetry: </span>
                <span>JetBrains Mono (tabular-nums)</span>
              </div>
              <div>
                <span className="text-[#0d253d] dark:text-white font-medium">Atmosphere: </span>
                <span className="text-[#533afd] dark:text-[#00d4ff] font-semibold">Stripe Electric Indigo (#533afd) & Horizon Mesh</span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-semibold text-[#0d253d] dark:text-white border-b border-[#e3e8ee] dark:border-white/10 pb-1">
              Direct Channels
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-[#1e293b] border border-[#e3e8ee] dark:border-white/10 hover:border-[#533afd] text-[#273951] dark:text-[#cbd5e1] hover:text-[#533afd] dark:hover:text-white transition-all font-medium shadow-sm"
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
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-[#1e293b] border border-[#e3e8ee] dark:border-white/10 hover:border-[#533afd] text-[#273951] dark:text-[#cbd5e1] hover:text-[#533afd] dark:hover:text-white transition-all font-medium shadow-sm"
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
        <div className="pt-6 border-t border-[#e3e8ee] dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8]">
          <div>
            (c) 2026 Kushagra Kumar. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#533afd] dark:text-[#00d4ff] font-semibold tabular-nums">[EDITION NO. 05 // STRIPE IRIDESCENT HORIZON]</span>
            <span>Local Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
