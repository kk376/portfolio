import React from 'react';
import { Terminal, Laptop, HeartHandshake, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0f172a]/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PAIR-PROGRAMMING METHODOLOGY"
          heading="How I Work."
          subHeading="Directing AI pair-programming with curiosity, architectural rigor, and 100% upstream disclosure."
        />

        {/* Quote Callout */}
        <div className="anand-card p-8 md:p-10 bg-white dark:bg-[#111827] max-w-4xl mx-auto mb-14 text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 mb-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            "I do not pretend to know everything. I guide AI to learn faster and build real things."
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            As an apprentice actively mastering modern frontend development, I treat AI as a high-leverage pairing partner. Rather than accepting blind code generation, I identify concrete bottlenecks on my system, formulate hypotheses, prompt for precise implementations, and verify every change on real hardware.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                  PHASE 01 // DISCOVERY
                </span>
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-poppins text-xl font-bold text-slate-900 dark:text-white mb-3">
                Curiosity &amp; Problem Spotting
              </h4>

              <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF document viewing.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Root Cause Discovery
            </div>
          </div>

          <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                  PHASE 02 // SYNTHESIS
                </span>
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <Laptop className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-poppins text-xl font-bold text-slate-900 dark:text-white mb-3">
                Directing AI Architecture
              </h4>

              <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests and hardware reproduction.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
              No Blind Generation
            </div>
          </div>

          <div className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                  PHASE 03 // INTEGRITY
                </span>
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-poppins text-xl font-bold text-slate-900 dark:text-white mb-3">
                Upstream Transparency
              </h4>

              <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as genuine professional mentorship.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Ethical Disclosure
            </div>
          </div>
        </div>

        <SectionFooter
          phrase="Inspect my "
          link="workstation telemetry."
          toAddress="#system"
        />
      </div>
    </section>
  );
};
