import React from 'react';
import { GitPullRequest, Code2, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Wise Badge Row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] border border-black/5 dark:border-white/10 text-xs font-mono font-bold text-[#163300] dark:text-[#9fe870]">
            <span className="w-2 h-2 rounded-full bg-[#9fe870]" />
            <span>APPRENTICE TELEMETRY</span>
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white dark:bg-[#191b16] border border-black/5 dark:border-white/10 text-xs font-mono font-medium text-[#0e0f0c] dark:text-[#f4f6f2]">
            BCA 8.2 CGPA
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white dark:bg-[#191b16] border border-black/5 dark:border-white/10 text-xs font-mono font-medium text-[#0e0f0c] dark:text-[#f4f6f2]">
            FEDORA 44 WORKSTATION
          </span>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Massive Scandinavian Display Typography */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-[#0e0f0c] dark:text-[#f4f6f2] leading-[1.02] max-w-3xl">
              Learning modern Frontend. Directing AI models across upstream Linux systems.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#454745] dark:text-[#b5b8b2] leading-relaxed max-w-2xl">
              I am <span className="font-bold text-[#0e0f0c] dark:text-white">{PERSONAL_INFO.name}</span> (
              <span className="font-mono text-[#163300] dark:text-[#9fe870] font-bold">@{PERSONAL_INFO.handle}</span>), a BCA graduate actively building fluency in HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside daily frontend studies, I direct AI coding agents to diagnose Linux bottlenecks, verify low-level system behaviors, and ship upstream contributions to projects like Cesium, Mission Center, and Zed.
            </p>

            {/* Wise Pill CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#upstream"
                className="px-6 py-3.5 rounded-full bg-[#9fe870] hover:bg-[#cdffad] text-[#0e0f0c] font-sans text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all flex items-center gap-2 active:scale-95"
              >
                <GitPullRequest className="w-4 h-4 stroke-[2.5]" />
                <span>Explore Upstream Dispatches</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-[#191b16] border border-black/10 dark:border-white/15 text-[#0e0f0c] dark:text-[#f4f6f2] font-sans text-xs sm:text-sm font-bold hover:border-[#9fe870] transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <Code2 className="w-4 h-4 text-[#0e0f0c] dark:text-[#9fe870]" />
                <span>Codebases & Tools</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white dark:bg-[#191b16] border border-black/10 dark:border-white/15 text-[#0e0f0c] dark:text-[#f4f6f2] hover:border-[#9fe870] transition-all shadow-sm active:scale-95"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white dark:bg-[#191b16] border border-black/10 dark:border-white/15 text-[#0e0f0c] dark:text-[#f4f6f2] hover:border-[#9fe870] transition-all shadow-sm active:scale-95"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Wise-Style Converter & Specimen Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] p-6 sm:p-7 space-y-5 shadow-sm">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9fe870]" />
                  <span className="font-mono text-xs font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">
                    WORKFLOW ENGINE
                  </span>
                </div>
                <span className="font-mono text-[11px] font-semibold text-[#868685] bg-[#e8ebe6] dark:bg-[#22251e] px-2.5 py-0.5 rounded-full">
                  DIRECTED AI PIPELINE
                </span>
              </div>

              {/* Wise-Style Interactive Exchange Wells */}
              <div className="space-y-2">
                {/* Input Well */}
                <div className="p-4 rounded-2xl bg-[#e8ebe6] dark:bg-[#22251e] border border-black/5 dark:border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#868685]">
                    <span>YOU INPUT (FRICTION POINT)</span>
                    <span className="font-semibold text-[#0e0f0c] dark:text-white">FEDORA / LINUX</span>
                  </div>
                  <div className="font-display text-lg font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">
                    Hardware Bottlenecks & Missing Tools
                  </div>
                  <div className="text-xs text-[#454745] dark:text-[#b5b8b2]">
                    Wayland freezes, procfs overhead, GPU power thrash
                  </div>
                </div>

                {/* Conversion Rate Indicator */}
                <div className="flex items-center justify-center py-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#191b16] border border-black/10 dark:border-white/10 text-[11px] font-mono font-medium shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#9fe870]" />
                    <span className="text-[#0e0f0c] dark:text-[#f4f6f2]">Conversion Rate: 100% Transparent Disclosure</span>
                  </div>
                </div>

                {/* Output Well */}
                <div className="p-4 rounded-2xl bg-[#e2f6d5] dark:bg-[#163300]/40 border border-[#9fe870]/30 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#163300] dark:text-[#9fe870]">
                    <span className="font-bold">YOU OUTPUT (UPSTREAM IMPACT)</span>
                    <span className="font-bold">VERIFIED</span>
                  </div>
                  <div className="font-display text-lg font-bold text-[#163300] dark:text-[#cdffad]">
                    Merged Upstream Code & Benchmarks
                  </div>
                  <div className="text-xs text-[#163300] dark:text-[#9fe870]">
                    Cesium shader, Mission Center MR, 0.8 µs Rust fetcher
                  </div>
                </div>
              </div>

              {/* Profile Bar */}
              <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#22251e] shrink-0 overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Kushagra Kumar"
                    className="w-full h-full object-cover grayscale contrast-125"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-base font-bold text-[#0e0f0c] dark:text-[#f4f6f2] truncate">
                    Kushagra Kumar
                  </div>
                  <div className="text-xs text-[#454745] dark:text-[#b5b8b2]">
                    BCA Graduate (2022) | Suresh Gyan Vihar University
                  </div>
                </div>
              </div>

              {/* Quick Spec Attributes */}
              <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs pt-1">
                <div className="p-2 rounded-xl bg-[#e8ebe6] dark:bg-[#22251e]">
                  <div className="text-[10px] text-[#868685]">DEGREE</div>
                  <div className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">8.2 CGPA</div>
                </div>
                <div className="p-2 rounded-xl bg-[#e8ebe6] dark:bg-[#22251e]">
                  <div className="text-[10px] text-[#868685]">OS</div>
                  <div className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">Fedora 44</div>
                </div>
                <div className="p-2 rounded-xl bg-[#e8ebe6] dark:bg-[#22251e]">
                  <div className="text-[10px] text-[#868685]">GPU</div>
                  <div className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">RX 6700 XT</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Oversized Wise Metric Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-7 rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] shadow-sm hover:border-[#9fe870] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#868685]">
                <span className="font-bold text-[#163300] dark:text-[#9fe870]">01 // ACTIVE TRACK</span>
                <span>LEARNING</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] mb-2 tracking-tight">
                Frontend
              </div>
              <p className="text-xs text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                Daily immersion in semantic HTML, CSS layout geometry, JavaScript, React components, and Tailwind styling.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-[#868685] font-semibold">
              HTML • CSS • REACT • TAILWIND
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] shadow-sm hover:border-[#9fe870] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#868685]">
                <span className="font-bold text-[#163300] dark:text-[#9fe870]">02 // ACADEMICS</span>
                <span>GRADUATED</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] mb-2 tracking-tight">
                8.2 CGPA
              </div>
              <p className="text-xs text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                Bachelor of Computer Applications degree completed with distinction from Suresh Gyan Vihar University in 2022.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-[#868685] font-semibold">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] shadow-sm hover:border-[#9fe870] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#868685]">
                <span className="font-bold text-[#163300] dark:text-[#9fe870]">03 // BENCHMARK</span>
                <span>LATENCY</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] mb-2 tracking-tight">
                0.8 µs
              </div>
              <p className="text-xs text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                Microsecond Rust system fetcher kkfetch parsing Linux kernel procfs directly with zero external process spawns.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-[#868685] font-semibold">
              RUST • PROCFS • TELEMETRY
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-7 rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] shadow-sm hover:border-[#9fe870] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#868685]">
                <span className="font-bold text-[#163300] dark:text-[#9fe870]">04 // ETHICS</span>
                <span>DISCLOSURE</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] mb-2 tracking-tight">
                100%
              </div>
              <p className="text-xs text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                Full transparency with upstream maintainers on all AI-assisted bug diagnostics, shaders, and merge requests.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-[#868685] font-semibold">
              TRANSPARENT AI PAIRING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
