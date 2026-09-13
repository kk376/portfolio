import React from 'react';
import { Terminal, Award, Cpu, BookOpen, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0f172a]/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT THE DEVELOPER"
          heading="About Me"
          subHeading="Apprentice Software Engineer | Open Source Explorer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Blocks */}
          <div className="lg:col-span-7 space-y-8">
            <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Frontend Apprentice
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>, an apprentice software engineer mastering the web frontend stack: HTML5, CSS3, modern JavaScript, React, and Tailwind CSS. Rather than relying on boilerplate shortcuts, I study DOM mechanics, layout geometry, state lifecycles, and accessible UI patterns from first principles.
              </p>
            </div>

            <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Upstream Linux Explorer
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Every tool I build stems from genuine friction on my Fedora workstation. I direct AI coding agents to trace hardware issues, including PCIe D3cold power thrash in Mission Center, Wayland shutdown event loops in Zed editor, and WebGL military radar shaders in Cesium. Every finding is verified on real hardware and submitted with transparent disclosure.
              </p>
            </div>

            <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Academic Distinction
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Graduated with a Bachelor of Computer Applications degree (8.2 CGPA with distinction) from Suresh Gyan Vihar University in 2022. My curriculum provided rigorous grounding in Python programming, SQL databases (joins, subqueries, grouping), and core operating system concepts.
              </p>
            </div>
          </div>

          {/* Right Column: Identity Card & Apprentice Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="anand-card p-7 bg-white dark:bg-[#111827] text-slate-900 dark:text-white">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                <div>
                  <h4 className="font-poppins text-xl font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h4>
                  <p className="font-mono text-xs text-blue-600 dark:text-cyan-400 font-semibold mt-0.5">
                    @{PERSONAL_INFO.handle}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Role Focus:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Frontend / Junior Engineer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Education:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">BCA 8.2 CGPA (Distinction)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Primary Station:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Fedora 44 / Wayland</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">AI Disclosure:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Transparent</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Core Stack:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">HTML, CSS, JS, React, Tailwind</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 dark:text-slate-400">Secondary:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Rust, Python, Bash, SQL</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl anand-gradient-bg text-white font-poppins text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>Connect With Me</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="anand-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-[#111827] dark:to-blue-950/20 border border-blue-100 dark:border-blue-900/30">
              <div className="flex items-center gap-2.5 mb-2 text-blue-600 dark:text-cyan-400 font-poppins font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Continuous Learning Pledge</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "I believe in authentic pair-programming: understanding every single line of code, diagnosing hardware behavior directly, and never hiding AI assistance from project maintainers."
              </p>
            </div>
          </div>
        </div>

        <SectionFooter
          phrase="Check out my "
          link="projects!"
          toAddress="#projects"
        />
      </div>
    </section>
  );
};
