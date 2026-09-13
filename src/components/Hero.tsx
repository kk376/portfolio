import React from 'react';
import { ArrowDown, Code2, Mail, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow (Clean, high contrast, no messy patches) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Status Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs font-mono text-blue-700 dark:text-cyan-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse" />
            <span className="font-semibold">APPRENTICE SOFTWARE ENGINEER</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span>BCA 8.2 CGPA</span>
          </div>
        </div>

        {/* Anand Baraik Signature Welcome Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Welcome to my portfolio!
          </h1>
          <p className="font-montserrat text-lg sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200">
            This is <span className="text-blue-600 dark:text-cyan-400 font-bold">{PERSONAL_INFO.name}</span>, an <span className="underline decoration-blue-500 dark:decoration-cyan-400 decoration-4 underline-offset-4">apprentice software engineer</span>.
          </p>
          <p className="font-sans text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
            Mastering modern frontend with HTML, CSS, JavaScript, React, and Tailwind CSS. Directing AI coding partners to diagnose Linux bottlenecks, benchmark kernel procfs, and ship upstream pull requests.
          </p>
        </div>

        {/* Anand Signature Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#about"
            className="px-7 py-3.5 rounded-full anand-gradient-bg text-white font-poppins font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Know more about me</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-slate-100 dark:bg-[#162032] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-cyan-400 font-poppins font-semibold text-sm shadow-xs hover:shadow-md hover:scale-105 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>Explore my projects</span>
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-transparent border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 font-poppins font-semibold text-sm transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact with me</span>
          </a>
        </div>

        {/* Hero Interactive Terminal & Workspace Showcase */}
        <div className="max-w-3xl mx-auto mb-16 anand-card overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xl">
          <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1524] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 ml-2">
                kk376@victus: ~
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors p-1"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors p-1"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-6 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-cyan-400 font-bold">$</span>
              <span className="text-slate-900 dark:text-white font-medium">cat /etc/apprentice-status.json</span>
            </div>
            <div className="bg-slate-50 dark:bg-[#0a0f1d] p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 leading-relaxed text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
              <p><span className="text-blue-600 dark:text-cyan-400 font-semibold">"engineer"</span>: "Kushagra Kumar (@kk376)",</p>
              <p><span className="text-blue-600 dark:text-cyan-400 font-semibold">"degree"</span>: "BCA (8.2 CGPA Distinction, SGVU 2022)",</p>
              <p><span className="text-blue-600 dark:text-cyan-400 font-semibold">"active_focus"</span>: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],</p>
              <p><span className="text-blue-600 dark:text-cyan-400 font-semibold">"upstream_merges"</span>: ["Cesium PR #214 (Tactical Sonar)", "WinGet #422521", "Void Linux xbps"],</p>
              <p><span className="text-blue-600 dark:text-cyan-400 font-semibold">"ai_methodology"</span>: "100% transparent disclosure with upstream maintainers"</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Station: Fedora 44 Workstation (Kernel 6.14, Wayland)</span>
              </div>
              <a
                href="#system"
                className="text-blue-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                Run kkfetch terminal -&gt;
              </a>
            </div>
          </div>
        </div>

        {/* 4 Feature Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="anand-card p-6 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-cyan-400">01 // TRACK</span>
                <span>LEARNING</span>
              </div>
              <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                Frontend
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Daily immersion in semantic HTML, CSS layout geometry, JavaScript, React components, and Tailwind styling.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              HTML • CSS • REACT • TAILWIND
            </div>
          </div>

          <div className="anand-card p-6 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-cyan-400">02 // ACADEMICS</span>
                <span>GRADUATED</span>
              </div>
              <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tabular-nums">
                8.2 CGPA
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Bachelor of Computer Applications degree completed with distinction from Suresh Gyan Vihar University in 2022.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          <div className="anand-card p-6 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-cyan-400">03 // BENCHMARK</span>
                <span>LATENCY</span>
              </div>
              <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tabular-nums">
                0.8 µs
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Microsecond Rust system fetcher kkfetch parsing Linux kernel procfs directly with zero external process spawns.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              RUST • PROCFS • TELEMETRY
            </div>
          </div>

          <div className="anand-card p-6 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-cyan-400">04 // ETHICS</span>
                <span>DISCLOSURE</span>
              </div>
              <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tabular-nums">
                100%
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full transparency with upstream maintainers on all AI-assisted bug diagnostics, shaders, and merge requests.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              TRANSPARENT AI PAIRING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
