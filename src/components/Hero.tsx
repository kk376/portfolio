import React from 'react';
import { Sparkles, BookOpen, GitPullRequest, Code2, Award, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Vibrant ambient glowing color orbs */}
      <div className="absolute top-12 left-1/4 w-[520px] h-[380px] bg-gradient-to-tr from-purple-600/20 to-pink-600/15 dark:from-purple-600/30 dark:to-pink-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-28 right-1/4 w-[460px] h-[350px] bg-gradient-to-bl from-cyan-500/20 to-blue-600/15 dark:from-cyan-500/25 dark:to-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-48 left-1/3 w-[560px] h-[300px] bg-gradient-to-r from-pink-500/15 to-emerald-500/15 dark:from-pink-500/20 dark:to-emerald-500/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left Column: Heading, Bio, and CTAs */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 dark:bg-pink-500/15 border border-pink-500/30 text-pink-600 dark:text-pink-300 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Hi, I am <span className="text-slate-900 dark:text-white">Kushagra</span>.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-emerald-500 dark:from-pink-400 dark:via-purple-400 dark:via-cyan-400 dark:to-emerald-400">
                Learning Frontend by day, exploring Open Source with AI by night.
              </span>
            </h1>

            {/* Honest Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              I am a BCA graduate (8.2 CGPA) currently building strong foundations in HTML, CSS,
              JavaScript, React, and Tailwind. I don't claim to be a veteran kernel developer:
              I guide and pair-program with AI to investigate real-world Linux issues, author system tools,
              and submit appreciated upstream contributions across GitHub and GitLab.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#upstream"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 text-white font-semibold text-xs font-mono transition-all shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 hover:scale-[1.02] flex items-center gap-2"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>See Upstream Contributions</span>
              </a>

              <a
                href="#skills"
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.09] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/[0.1] hover:border-cyan-400/50 text-xs font-semibold font-mono transition-all flex items-center gap-2 shadow-sm dark:shadow-none hover:scale-[1.02]"
              >
                <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Explore Skills & Stack</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 transition-all shadow-sm dark:shadow-none hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 border border-slate-200 dark:border-white/[0.08] hover:border-purple-400/50 transition-all shadow-sm dark:shadow-none hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Bento Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Vibrant gradient glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-emerald-400 rounded-3xl blur-md opacity-50 dark:opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative rounded-2xl bg-white dark:bg-[#0c0e17] border border-slate-200 dark:border-white/[0.12] p-6 shadow-xl dark:shadow-2xl space-y-4">
                {/* Photo & Identity row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shrink-0 shadow-lg shadow-purple-500/20">
                    <img
                      src="/avatar.jpg"
                      alt="Kushagra Kumar"
                      className="w-full h-full rounded-xl object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                      @{PERSONAL_INFO.handle}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Suresh Gyan Vihar University (2022)
                    </div>
                  </div>
                </div>

                {/* Quick Info Chips */}
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-pink-50/70 dark:bg-pink-500/10 border border-pink-200/80 dark:border-pink-500/25">
                    <div className="text-[10px] text-pink-600 dark:text-pink-400 flex items-center gap-1 font-semibold uppercase">
                      <Award className="w-3 h-3" />
                      Degree
                    </div>
                    <div className="text-slate-900 dark:text-white font-bold mt-0.5">BCA (8.2 CGPA)</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-cyan-50/70 dark:bg-cyan-500/10 border border-cyan-200/80 dark:border-cyan-500/25">
                    <div className="text-[10px] text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-semibold uppercase">
                      <Terminal className="w-3 h-3" />
                      Environment
                    </div>
                    <div className="text-slate-900 dark:text-white font-bold mt-0.5">Fedora 44 / Wayland</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-purple-50/70 dark:bg-purple-500/10 border border-purple-200/80 dark:border-purple-500/25">
                    <div className="text-[10px] text-purple-600 dark:text-purple-400 flex items-center gap-1 font-semibold uppercase">
                      <Sparkles className="w-3 h-3" />
                      Superpower
                    </div>
                    <div className="text-slate-900 dark:text-white font-bold mt-0.5">AI Pair-Programming</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/25">
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold uppercase">
                      <BookOpen className="w-3 h-3" />
                      Current Focus
                    </div>
                    <div className="text-slate-900 dark:text-white font-bold mt-0.5">CSS & React Layouts</div>
                  </div>
                </div>

                {/* Honest quote block with fixed dark mode styling */}
                <div className="p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/30 text-xs text-slate-700 dark:text-purple-200 leading-relaxed font-sans shadow-sm dark:shadow-inner">
                  "I use AI not to pretend, but to learn faster, test harder, and build real solutions that get merged upstream."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multi-Color Stat Cards with vibrant top hairlines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-cyan-500/30 dark:border-cyan-500/25 hover:border-cyan-500/60 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md hover:shadow-cyan-500/10 dark:shadow-none transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">Active Learning</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">Frontend UI</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">HTML, CSS, JS & React</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-pink-500/30 dark:border-pink-500/25 hover:border-pink-500/60 dark:hover:border-pink-500/50 shadow-sm hover:shadow-md hover:shadow-pink-500/10 dark:shadow-none transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-rose-500" />
            <div className="text-xs font-mono text-pink-600 dark:text-pink-400 uppercase font-semibold">Open Source</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">Merged PRs</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Cesium, Mission Center & Zed</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-purple-500/30 dark:border-purple-500/25 hover:border-purple-500/60 dark:hover:border-purple-500/50 shadow-sm hover:shadow-md hover:shadow-purple-500/10 dark:shadow-none transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500" />
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase font-semibold">Education</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">8.2 CGPA</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">BCA Computer Applications</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-emerald-500/30 dark:border-emerald-500/25 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-md hover:shadow-emerald-500/10 dark:shadow-none transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500" />
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">Consistency</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">Daily Git</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Building & Committing Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};
