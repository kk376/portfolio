import React from 'react';
import { GitPullRequest, Code2, ArrowUpRight, Award, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-20 md:pt-32 md:pb-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Entry Stamp */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
            CATALOG ENTRY NO. 01
          </span>
          <span className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 shadow-swiss-sm">
            ACADEMICS: BCA 8.2 CGPA
          </span>
          <span className="border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 shadow-swiss-sm">
            WORKSTATION: FEDORA 44
          </span>
          <span className="border-2 border-black dark:border-white bg-[#15803D] text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 shadow-swiss-sm">
            AI PAIRING: DIRECTED
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Editorial Headline & Deck */}
          <div className="lg:col-span-8 space-y-7">
            {/* Monumental Editorial Serif Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-semibold tracking-tight text-black dark:text-white leading-[1.02]">
              Learning modern Frontend. Directing AI across upstream open-source architectures.
            </h1>

            {/* Subtitle / Lead Deck in Swiss Grotesk */}
            <p className="font-sans text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-3xl">
              I am <span className="font-bold text-black dark:text-white">{PERSONAL_INFO.name}</span> (
              <span className="font-mono text-[#1D4ED8] dark:text-[#60a5fa] font-bold">@{PERSONAL_INFO.handle}</span>), a BCA graduate actively building fluency in HTML, CSS, JavaScript, React, and Tailwind. In parallel with UI studies, I pair-program with AI to diagnose Linux hardware friction points, author microsecond Rust CLI utilities, and land upstream contributions in projects like Cesium, Mission Center, and Zed.
            </p>

            {/* Tactile Hard-Shadow Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#upstream"
                className="px-6 py-3.5 border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-2"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>UPSTREAM DISPATCHES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[#1D4ED8]" />
                <span>VIEW CODEBASES</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Plate I */}
          <div className="lg:col-span-4">
            <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-6 space-y-6">
              {/* Plate Header */}
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF4F00]">
                  PLATE I // IDENTIFICATION
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  FIG. 1.0
                </span>
              </div>

              {/* Photo Frame */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 shrink-0 overflow-hidden shadow-swiss-sm">
                  <img
                    src="/avatar.jpg"
                    alt="Kushagra Kumar"
                    className="w-full h-full object-cover grayscale contrast-125"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-2xl font-bold text-black dark:text-white leading-tight">
                    Kushagra Kumar
                  </div>
                  <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    BCA Graduate (2022)
                  </div>
                  <div className="font-mono text-[11px] text-[#1D4ED8] dark:text-[#60a5fa] font-bold">
                    Suresh Gyan Vihar Univ.
                  </div>
                </div>
              </div>

              {/* Specification Table */}
              <div className="space-y-2 font-mono text-xs border-t-2 border-black/10 dark:border-white/10 pt-4">
                <div className="flex items-center justify-between py-1 border-b border-black/10 dark:border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#FF4F00]" />
                    Academic Standing
                  </span>
                  <span className="font-bold text-black dark:text-white">8.2 CGPA</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-black/10 dark:border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    Primary Platform
                  </span>
                  <span className="font-bold text-black dark:text-white">Fedora 44 / Wayland</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-black/10 dark:border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#15803D]" />
                    Engineering Mode
                  </span>
                  <span className="font-bold text-black dark:text-white">AI-Assisted Craft</span>
                </div>
              </div>

              {/* Philosophical Axiom */}
              <div className="p-3.5 border border-black/20 dark:border-white/20 bg-neutral-50 dark:bg-black/30 font-serif italic text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                "Creativity proves feasibility through rapid iteration. Disciplined engineering, hardware verification, and maintainer reviews ensure lasting production quality."
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Index Metric Plates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1: Frontend Mastery */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF4F00]">
                  INDEX 01 // FOCUS
                </span>
                <span className="font-mono text-xs text-neutral-400">ACTIVE</span>
              </div>
              <div className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                Frontend UI
              </div>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Active daily immersion in semantic HTML, CSS layout geometry, JavaScript, React components, and Tailwind styling.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/15 dark:border-white/15 font-mono text-[10px] uppercase tracking-wider text-black dark:text-white font-bold">
              HTML • CSS • REACT • TAILWIND
            </div>
          </div>

          {/* Metric 2: Academic Standing */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#1D4ED8]">
                  INDEX 02 // ACADEMICS
                </span>
                <span className="font-mono text-xs text-neutral-400">DEGREE</span>
              </div>
              <div className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                8.2 CGPA
              </div>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Bachelor of Computer Applications degree completed with distinction from Suresh Gyan Vihar University in 2022.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/15 dark:border-white/15 font-mono text-[10px] uppercase tracking-wider text-black dark:text-white font-bold">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          {/* Metric 3: Upstream Footprint */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#15803D]">
                  INDEX 03 // MERGED
                </span>
                <span className="font-mono text-xs text-neutral-400">UPSTREAM</span>
              </div>
              <div className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                Upstream PRs
              </div>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Merged Cesium Tactical Sonar shader, Mission Center D3cold GPU power thrash diagnosis, and Zed Wayland issue root causes.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/15 dark:border-white/15 font-mono text-[10px] uppercase tracking-wider text-black dark:text-white font-bold">
              CESIUM • MISSION CENTER • ZED
            </div>
          </div>

          {/* Metric 4: Workstation Codebases */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black dark:text-white">
                  INDEX 04 // CODEBASES
                </span>
                <span className="font-mono text-xs text-neutral-400">TOOLING</span>
              </div>
              <div className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                0.8 µs & 1600 LOC
              </div>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Authored microsecond Rust system fetcher (kkfetch) and comprehensive Fedora Workstation setup automation suite.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black/15 dark:border-white/15 font-mono text-[10px] uppercase tracking-wider text-black dark:text-white font-bold">
              RUST • BASH • ARCHITECTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
