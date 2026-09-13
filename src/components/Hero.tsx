import React from 'react';
import { Sparkles, BookOpen, GitPullRequest, Code2, Award, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Vibrant ambient glowing color orbs */}
      <div className="absolute top-20 left-1/4 w-[450px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-36 right-1/4 w-[400px] h-[300px] bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 left-1/3 w-[500px] h-[280px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Column: Heading, Bio, and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-pink-500/30 text-pink-300 text-xs font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I am <span className="text-white">Kushagra</span>.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-emerald-400">
                Learning Frontend by day, exploring Open Source with AI by night.
              </span>
            </h1>

            {/* Honest Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I am a BCA graduate (8.2 CGPA) currently building strong foundations in HTML, CSS,
              JavaScript, React, and Tailwind. I don't claim to be a veteran kernel developer:
              I guide and pair-program with AI to investigate real-world Linux issues, author system tools,
              and submit appreciated upstream contributions across GitHub and GitLab.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#upstream"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 text-white font-semibold text-xs font-mono transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>See Upstream Contributions</span>
              </a>

              <a
                href="#skills"
                className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/[0.1] text-xs font-semibold font-mono transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Explore Skills & Stack</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                title="GitLab"
              >
                <GitlabIcon className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Bento Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Vibrant gradient glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-emerald-400 rounded-3xl blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative rounded-2xl bg-[#0c0e17] border border-white/[0.12] p-6 shadow-2xl space-y-5">
                {/* Photo & Identity row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shrink-0 shadow-md">
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
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400">
                      @{PERSONAL_INFO.handle}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Suresh Gyan Vihar University (2022)
                    </div>
                  </div>
                </div>

                {/* Quick Info Chips */}
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-pink-400 flex items-center gap-1 font-semibold uppercase">
                      <Award className="w-3 h-3" />
                      Degree
                    </div>
                    <div className="text-white font-bold mt-0.5">BCA (8.2 CGPA)</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-cyan-400 flex items-center gap-1 font-semibold uppercase">
                      <Terminal className="w-3 h-3" />
                      Environment
                    </div>
                    <div className="text-white font-bold mt-0.5">Fedora 44 / Wayland</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-purple-400 flex items-center gap-1 font-semibold uppercase">
                      <Sparkles className="w-3 h-3" />
                      Superpower
                    </div>
                    <div className="text-white font-bold mt-0.5">AI Pair-Programming</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold uppercase">
                      <BookOpen className="w-3 h-3" />
                      Current Focus
                    </div>
                    <div className="text-white font-bold mt-0.5">CSS & React Layouts</div>
                  </div>
                </div>

                {/* Honest quote block */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/20 text-xs text-slate-300 leading-relaxed font-sans">
                  "I use AI not to pretend, but to learn faster, test harder, and build real solutions that get merged upstream."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multi-Color Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 border-t border-white/[0.08]">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">Active Learning</div>
            <div className="text-2xl font-black text-white mt-1">Frontend UI</div>
            <div className="text-[11px] text-slate-400 mt-1">HTML, CSS, JS & React</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-pink-500/20 hover:border-pink-500/40 transition-colors">
            <div className="text-xs font-mono text-pink-400 uppercase font-semibold">Open Source</div>
            <div className="text-2xl font-black text-white mt-1">Merged PRs</div>
            <div className="text-[11px] text-slate-400 mt-1">Cesium, Mission Center & Zed</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <div className="text-xs font-mono text-purple-400 uppercase font-semibold">Education</div>
            <div className="text-2xl font-black text-white mt-1">8.2 CGPA</div>
            <div className="text-[11px] text-slate-400 mt-1">BCA Computer Applications</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">Consistency</div>
            <div className="text-2xl font-black text-white mt-1">Daily Git</div>
            <div className="text-[11px] text-slate-400 mt-1">Building & Committing Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};
