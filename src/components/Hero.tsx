import React from 'react';
import { GitPullRequest, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0a101d] overflow-hidden transition-colors duration-200">
      {/* Stripe Atmospheric Iridescent Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none stripe-mesh stripe-mesh-mask opacity-90 dark:opacity-75 transition-opacity -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Stripe Micro-Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-medium text-[#533afd] dark:text-[#b9b9f9]">
            <span className="w-2 h-2 rounded-full bg-[#533afd] animate-pulse" />
            <span>INFRASTRUCTURE & CODE</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm border border-[#e3e8ee] dark:border-white/10 text-xs font-mono text-[#273951] dark:text-[#f8fafc] tabular-nums">
            BCA 8.2 CGPA
          </span>
          <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm border border-[#e3e8ee] dark:border-white/10 text-xs font-mono text-[#273951] dark:text-[#f8fafc]">
            FEDORA 44 WORKSTATION
          </span>
        </div>

        {/* Hero Main Content */}
        <div className="max-w-4xl space-y-6 mb-16">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[70px] font-light tracking-[-0.03em] text-[#0d253d] dark:text-[#f8fafc] leading-[1.05]">
            Learning modern Frontend. Directing AI models across upstream Linux systems.
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#273951] dark:text-[#94a3b8] font-light leading-relaxed max-w-3xl">
            I am <span className="font-medium text-[#0d253d] dark:text-white">{PERSONAL_INFO.name}</span> (
            <span className="font-mono text-[#533afd] dark:text-[#b9b9f9] font-medium">@{PERSONAL_INFO.handle}</span>), a BCA graduate actively building fluency in HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside daily frontend studies, I direct AI coding agents to diagnose Linux bottlenecks, verify low-level system behaviors, and ship upstream contributions to projects like Cesium, Mission Center, and Zed.
          </p>

          {/* Stripe Action Controls */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#upstream"
              className="px-5 py-2.5 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
            >
              <GitPullRequest className="w-4 h-4" />
              <span>Explore Upstream Dispatches</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white dark:bg-[#0f172a] border border-[#e3e8ee] dark:border-white/15 text-[#0d253d] dark:text-[#f8fafc] font-sans text-xs sm:text-sm font-medium hover:border-[#533afd] transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              <Code2 className="w-4 h-4 text-[#533afd]" />
              <span>Codebases & Tools</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-[#0f172a] border border-[#e3e8ee] dark:border-white/15 text-[#273951] dark:text-[#f8fafc] hover:border-[#533afd] hover:text-[#533afd] transition-all shadow-sm active:scale-95"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-[#0f172a] border border-[#e3e8ee] dark:border-white/15 text-[#273951] dark:text-[#f8fafc] hover:border-[#533afd] hover:text-[#533afd] transition-all shadow-sm active:scale-95"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Live "Now" Micro-Status Indicator (Derek Sivers Pattern) */}
        <div id="now" className="mb-10 rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs font-semibold text-[#0d253d] dark:text-white">
                  STATION STATUS // LIVE:
                </span>
                <span className="font-mono text-xs text-[#533afd] dark:text-[#00d4ff] font-medium">
                  Fedora 44 Workstation (Kernel 6.13, Wayland)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#533afd]/10 text-[#533afd] dark:text-[#b9b9f9] border border-[#533afd]/20 font-medium">
                FOCUS: React Architecture & WebGL GLSL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#00d4ff]/10 text-[#008ba3] dark:text-[#00d4ff] border border-[#00d4ff]/20 font-medium">
                DISPATCH: Merged Cesium PR #214
              </span>
            </div>
          </div>
        </div>

        {/* 4 Stripe Tabular Feature Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="stripe-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#64748d]">
                <span className="font-semibold text-[#533afd] dark:text-[#b9b9f9]">01 // ACTIVE TRACK</span>
                <span>LEARNING</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] mb-2 tracking-tight">
                Frontend
              </div>
              <p className="text-xs text-[#273951] dark:text-[#94a3b8] font-light leading-relaxed">
                Daily immersion in semantic HTML, CSS layout geometry, JavaScript, React components, and Tailwind styling.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/10 font-mono text-[10px] text-[#64748d]">
              HTML • CSS • REACT • TAILWIND
            </div>
          </div>

          {/* Card 2 */}
          <div className="stripe-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#64748d]">
                <span className="font-semibold text-[#533afd] dark:text-[#b9b9f9]">02 // ACADEMICS</span>
                <span>GRADUATED</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] mb-2 tracking-tight tabular-nums">
                8.2 CGPA
              </div>
              <p className="text-xs text-[#273951] dark:text-[#94a3b8] font-light leading-relaxed">
                Bachelor of Computer Applications degree completed with distinction from Suresh Gyan Vihar University in 2022.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/10 font-mono text-[10px] text-[#64748d]">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          {/* Card 3 */}
          <div className="stripe-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#64748d]">
                <span className="font-semibold text-[#533afd] dark:text-[#b9b9f9]">03 // BENCHMARK</span>
                <span>LATENCY</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] mb-2 tracking-tight tabular-nums">
                0.8 µs
              </div>
              <p className="text-xs text-[#273951] dark:text-[#94a3b8] font-light leading-relaxed">
                Microsecond Rust system fetcher kkfetch parsing Linux kernel procfs directly with zero external process spawns.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/10 font-mono text-[10px] text-[#64748d]">
              RUST • PROCFS • TELEMETRY
            </div>
          </div>

          {/* Card 4 */}
          <div className="stripe-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#64748d]">
                <span className="font-semibold text-[#533afd] dark:text-[#b9b9f9]">04 // ETHICS</span>
                <span>DISCLOSURE</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] mb-2 tracking-tight tabular-nums">
                100%
              </div>
              <p className="text-xs text-[#273951] dark:text-[#94a3b8] font-light leading-relaxed">
                Full transparency with upstream maintainers on all AI-assisted bug diagnostics, shaders, and merge requests.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/10 font-mono text-[10px] text-[#64748d]">
              TRANSPARENT AI PAIRING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
