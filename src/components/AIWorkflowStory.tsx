import React from 'react';
import { Terminal, Laptop, HeartHandshake } from 'lucide-react';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Essay Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
              PLATE V // COGNITIVE ARCHITECTURE & AI PAIRING
            </span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              FIG. 5.0
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-black dark:text-white tracking-tight leading-tight mb-8 max-w-4xl">
            "I do not pretend to know everything. I guide AI to learn faster and build real things."
          </h2>

          <div className="p-6 sm:p-8 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg max-w-4xl">
            <p className="font-sans text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              As someone actively learning Frontend, I view modern AI assistants as a high-leverage pairing partner. Rather than using AI blindly, I treat every task as an architectural dialogue: identifying real bottlenecks on my system, formulating hypotheses, prompting for code, and rigorously verifying every change against real hardware.
            </p>
          </div>
        </div>

        {/* 3 Architectural Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 01 */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF4F00]">
                  PHASE 01 // FRICTION
                </span>
                <div className="p-2 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 text-[#FF4F00]">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-black dark:text-white mb-4">
                Curiosity & Problem Spotting
              </h3>

              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF document viewing.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
              ROOT CAUSE DISCOVERY
            </div>
          </div>

          {/* Phase 02 */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] dark:text-[#60a5fa]">
                  PHASE 02 // SYNTHESIS
                </span>
                <div className="p-2 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 text-[#1D4ED8] dark:text-[#60a5fa]">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-black dark:text-white mb-4">
                Directing AI Architecture
              </h3>

              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests and hardware reproduction.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
              NO BLIND GENERATION
            </div>
          </div>

          {/* Phase 03 */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#15803D]">
                  PHASE 03 // DISCLOSURE
                </span>
                <div className="p-2 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 text-[#15803D]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-black dark:text-white mb-4">
                Upstream Transparency
              </h3>

              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as genuine professional mentorship.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
              ETHICAL DISCLOSURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
