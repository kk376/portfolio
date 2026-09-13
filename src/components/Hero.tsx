import React from 'react';
import { GitPullRequest, Code2, ArrowUpRight, Award, Terminal, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Lab Dispatch Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#ea2804]" />
            <span>AI LAB NOTEBOOK</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            BCA 8.2 CGPA
          </span>
          <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            FEDORA 44 WORKSTATION
          </span>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Massive Display Typography */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[74px] font-extrabold tracking-tight text-[#202020] dark:text-[#fcfcfc] leading-[1.0] max-w-4xl">
              Learning modern Frontend. Directing AI models across upstream Linux systems.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#3a3a3a] dark:text-[#d1d1cf] leading-relaxed max-w-2xl">
              I am <span className="font-semibold text-[#202020] dark:text-white">{PERSONAL_INFO.name}</span> (
              <span className="font-mono text-[#ea2804] dark:text-[#ff6a3d] font-medium">@{PERSONAL_INFO.handle}</span>), a BCA graduate actively building fluency in HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside daily frontend studies, I direct AI coding agents to diagnose Linux bottlenecks, verify low-level system behaviors, and ship upstream contributions to projects like Cesium, Mission Center, and Zed.
            </p>

            {/* Pill CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#upstream"
                className="px-5 py-3 rounded-full bg-[#ea2804] hover:bg-[#c01f00] text-white font-sans text-xs font-semibold shadow-sm hover:shadow transition-all flex items-center gap-2 active:scale-95"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>Explore Upstream Dispatches</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-full bg-white dark:bg-[#212124] border border-[rgba(32,32,32,0.12)] dark:border-white/15 text-[#202020] dark:text-[#fcfcfc] font-sans text-xs font-semibold hover:border-[#ea2804]/40 hover:bg-[#f3f0e8] dark:hover:bg-[#28282c] transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <Code2 className="w-4 h-4 text-[#ea2804]" />
                <span>Codebases & Tools</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-[#212124] border border-[rgba(32,32,32,0.12)] dark:border-white/15 text-[#202020] dark:text-[#fcfcfc] hover:text-[#ea2804] hover:border-[#ea2804]/40 transition-all shadow-sm active:scale-95"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-[#212124] border border-[rgba(32,32,32,0.12)] dark:border-white/15 text-[#202020] dark:text-[#fcfcfc] hover:text-[#ea2804] hover:border-[#ea2804]/40 transition-all shadow-sm active:scale-95"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Lab Profile Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 space-y-6 shadow-sm">
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2b9a66]" />
                  <span className="font-mono text-xs font-semibold text-[#202020] dark:text-[#fcfcfc]">
                    LAB SPECIMEN // 01
                  </span>
                </div>
                <span className="font-mono text-[11px] text-neutral-500">2026 LOG</span>
              </div>

              {/* Avatar and Bio */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 bg-[#f3f0e8] dark:bg-[#28282c] shrink-0 overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Kushagra Kumar"
                    className="w-full h-full object-cover grayscale contrast-125"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-[#202020] dark:text-[#fcfcfc]">
                    Kushagra Kumar
                  </div>
                  <div className="text-xs text-[#575757] dark:text-[#a0a0a0] font-medium">
                    BCA Graduate (2022)
                  </div>
                  <div className="text-xs text-[#ea2804] font-medium">
                    Suresh Gyan Vihar University
                  </div>
                </div>
              </div>

              {/* Lab Metadata Attributes */}
              <div className="space-y-2.5 font-mono text-xs border-t border-[rgba(32,32,32,0.08)] dark:border-white/10 pt-4">
                <div className="flex items-center justify-between py-1 border-b border-[rgba(32,32,32,0.06)] dark:border-white/5">
                  <span className="text-neutral-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ea2804]" />
                    Academic Standing
                  </span>
                  <span className="font-bold text-[#202020] dark:text-[#fcfcfc]">8.2 CGPA</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[rgba(32,32,32,0.06)] dark:border-white/5">
                  <span className="text-neutral-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#ff6a3d]" />
                    Operating System
                  </span>
                  <span className="font-bold text-[#202020] dark:text-[#fcfcfc]">Fedora 44 / Wayland</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[rgba(32,32,32,0.06)] dark:border-white/5">
                  <span className="text-neutral-500 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#2b9a66]" />
                    Hardware Stack
                  </span>
                  <span className="font-bold text-[#202020] dark:text-[#fcfcfc]">Ryzen 5 + RX 6700 XT</span>
                </div>
              </div>

              {/* Lab Quote */}
              <div className="p-3 rounded-xl bg-[#f9f7f3] dark:bg-[#161618] border border-[rgba(32,32,32,0.06)] dark:border-white/5 text-xs text-[#575757] dark:text-[#a0a0a0] leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#ea2804] font-semibold mb-1 text-[11px] font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>CORE HYPOTHESIS</span>
                </div>
                Curiosity spots real bottlenecks on hardware. Pairing with AI tests solutions rapidly. Disciplined upstream review turns experiments into durable software.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Replicate Lab Feature Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-[rgba(32,32,32,0.1)] dark:border-white/10 bg-white dark:bg-[#1f1f23] shadow-sm hover:border-[#ea2804]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-500">
                <span className="font-semibold text-[#ea2804]">01 // ACTIVE TRACK</span>
                <span>LEARNING</span>
              </div>
              <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-2">
                Frontend UI
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Active daily immersion in semantic HTML, CSS layout geometry, JavaScript, React components, and Tailwind styling.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/10 font-mono text-[10px] text-neutral-500">
              HTML • CSS • REACT • TAILWIND
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-[rgba(32,32,32,0.1)] dark:border-white/10 bg-white dark:bg-[#1f1f23] shadow-sm hover:border-[#ea2804]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-500">
                <span className="font-semibold text-[#ea2804]">02 // DEGREE</span>
                <span>GRADUATED</span>
              </div>
              <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-2">
                8.2 CGPA
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Bachelor of Computer Applications degree completed with distinction from Suresh Gyan Vihar University in 2022.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/10 font-mono text-[10px] text-neutral-500">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-[rgba(32,32,32,0.1)] dark:border-white/10 bg-white dark:bg-[#1f1f23] shadow-sm hover:border-[#ea2804]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-500">
                <span className="font-semibold text-[#2b9a66]">03 // OPEN SOURCE</span>
                <span>UPSTREAM</span>
              </div>
              <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-2">
                Upstream PRs
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Merged Cesium Tactical Sonar shader, Mission Center D3cold GPU power thrash diagnosis, and Zed Wayland issue root causes.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/10 font-mono text-[10px] text-neutral-500">
              CESIUM • MISSION CENTER • ZED
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl border border-[rgba(32,32,32,0.1)] dark:border-white/10 bg-white dark:bg-[#1f1f23] shadow-sm hover:border-[#ea2804]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-500">
                <span className="font-semibold text-[#ea2804]">04 // SYSTEMS</span>
                <span>FEDORA</span>
              </div>
              <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-2">
                0.8 µs & 1600 LOC
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Authored microsecond Rust system fetcher (kkfetch) and comprehensive Fedora Workstation setup automation suite.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/10 font-mono text-[10px] text-neutral-500">
              RUST • BASH • ARCHITECTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
