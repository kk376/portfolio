import React from 'react';
import { GitPullRequest, Code2, ArrowUpRight, Award, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#131313] border-b border-[#ffffff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Whisper */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#3cffd0] font-bold">
            FRONT-PAGE DISPATCH // ISSUE 2026.09
          </span>
          <span className="text-[#949494] font-mono text-xs">/</span>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#fffa00] font-bold">
            BCA 8.2 CGPA
          </span>
          <span className="text-[#949494] font-mono text-xs">/</span>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ffffff] font-bold">
            FEDORA 44 WORKSTATION
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          {/* Left Main Editorial Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Massive Display Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[86px] uppercase tracking-tight text-white leading-[0.88]">
              LEARNING FRONTEND.
              <span className="block text-[#3cffd0] mt-1">DIRECTING AI UPSTREAM.</span>
            </h1>

            {/* Lead Deck */}
            <p className="font-sans text-lg sm:text-xl text-[#e9e9e9] leading-relaxed max-w-2xl font-normal">
              I am <span className="text-white font-bold">{PERSONAL_INFO.name}</span> (
              <span className="font-mono text-[#3cffd0]">@{PERSONAL_INFO.handle}</span>), a BCA graduate
              actively mastering HTML, CSS, JavaScript, and React. Instead of writing toy todo apps,
              I pair-program with AI to investigate Linux kernel PCIe thrash, author microsecond Rust tools,
              and ship appreciated upstream PRs to Cesium, Mission Center, and Zed.
            </p>

            {/* CTA Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Jelly Mint Pill */}
              <a
                href="#upstream"
                className="px-7 py-3 rounded-full bg-[#3cffd0] text-black font-mono text-xs uppercase tracking-[0.16em] font-bold hover:bg-white/20 hover:text-white transition-all flex items-center gap-2"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>EXPLORE STORYSTREAM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Secondary Outlined Mint Pill */}
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-transparent text-[#3cffd0] border border-[#3cffd0] font-mono text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#3cffd0] hover:text-black transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>COVER CODEBASES</span>
              </a>

              {/* Social Icons */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2d2d2d] border border-[#ffffff]/20 hover:border-[#3cffd0] text-white hover:text-[#3860be] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2d2d2d] border border-[#ffffff]/20 hover:border-[#3cffd0] text-white hover:text-[#3860be] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Spotlight Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#2d2d2d] border border-[#ffffff]/20 rounded-[24px] p-6 space-y-5">
              {/* Photo & Identity */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[16px] overflow-hidden border-2 border-[#3cffd0] bg-[#131313] shrink-0">
                  <img
                    src="/avatar.jpg"
                    alt="Kushagra Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#3cffd0] font-bold">
                    ACTIVE APPRENTICE
                  </div>
                  <div className="font-display text-2xl text-white tracking-wide uppercase">
                    KUSHAGRA KUMAR
                  </div>
                  <div className="font-mono text-xs text-[#949494]">
                    Suresh Gyan Vihar Univ.
                  </div>
                </div>
              </div>

              {/* Spotlight Tags */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131313] border border-[#ffffff]/10">
                  <span className="text-[#949494] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#fffa00]" />
                    DEGREE
                  </span>
                  <span className="text-[#fffa00] font-bold">BCA (8.2 CGPA)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131313] border border-[#ffffff]/10">
                  <span className="text-[#949494] uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#3cffd0]" />
                    HOST OS
                  </span>
                  <span className="text-white font-bold">Fedora 44 / Wayland</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131313] border border-[#ffffff]/10">
                  <span className="text-[#949494] uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#5200ff]" />
                    APPROACH
                  </span>
                  <span className="text-[#3cffd0] font-bold">AI Pair-Programming</span>
                </div>
              </div>

              {/* Quote Pullout */}
              <div className="p-3.5 rounded-xl bg-[#131313] border border-[#ffffff]/10 text-xs text-[#e9e9e9] font-sans leading-relaxed">
                "I do not pretend to know everything. I use AI to learn faster, test against real hardware,
                and ship solutions upstream that maintainers appreciate."
              </div>
            </div>
          </div>
        </div>

        {/* 4 Solid Color-Block Story Tiles (The Verge Signature) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile 1: Jelly Mint */}
          <div className="p-6 rounded-[24px] bg-[#3cffd0] text-black transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/75 font-bold">
                ACTIVE FOCUS
              </div>
              <div className="font-display text-3xl uppercase tracking-tight text-black mt-1">
                FRONTEND UI
              </div>
            </div>
            <div className="font-mono text-xs text-black/80 font-medium mt-4 pt-3 border-t border-black/15">
              HTML5 • CSS3 • JS • REACT
            </div>
          </div>

          {/* Tile 2: Electric Yellow */}
          <div className="p-6 rounded-[24px] bg-[#fffa00] text-black transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/75 font-bold">
                ACADEMICS
              </div>
              <div className="font-display text-3xl uppercase tracking-tight text-black mt-1">
                8.2 CGPA
              </div>
            </div>
            <div className="font-mono text-xs text-black/80 font-medium mt-4 pt-3 border-t border-black/15">
              BCA COMPUTER APPLICATIONS
            </div>
          </div>

          {/* Tile 3: Verge Ultraviolet */}
          <div className="p-6 rounded-[24px] bg-[#5200ff] text-white transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 font-bold">
                COMMUNITY IMPACT
              </div>
              <div className="font-display text-3xl uppercase tracking-tight text-white mt-1">
                MERGED CODE
              </div>
            </div>
            <div className="font-mono text-xs text-white/90 font-medium mt-4 pt-3 border-t border-white/20">
              CESIUM • MISSION CENTER • ZED
            </div>
          </div>

          {/* Tile 4: Hazard White */}
          <div className="p-6 rounded-[24px] bg-[#ffffff] text-black transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/75 font-bold">
                WORK ETHIC
              </div>
              <div className="font-display text-3xl uppercase tracking-tight text-black mt-1">
                DAILY COMMITS
              </div>
            </div>
            <div className="font-mono text-xs text-black/80 font-medium mt-4 pt-3 border-t border-black/15">
              BUILDING & COMMITTING DAILY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
