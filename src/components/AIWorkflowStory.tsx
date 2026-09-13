import React from 'react';
import { Terminal, Laptop, HeartHandshake, Sparkles } from 'lucide-react';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#ea2804]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COGNITIVE ARCHITECTURE // AI PAIRING</span>
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-[1.05] mb-6 max-w-4xl">
            "I do not pretend to know everything. I guide AI to learn faster and build real things."
          </h2>

          <div className="p-6 sm:p-7 rounded-2xl border border-[rgba(32,32,32,0.1)] dark:border-white/10 bg-white dark:bg-[#1f1f23] shadow-sm max-w-3xl">
            <p className="font-sans text-sm sm:text-base text-[#3a3a3a] dark:text-[#d1d1cf] leading-relaxed">
              As someone actively learning Frontend, I view modern AI assistants as a high-leverage pairing partner. Rather than using AI blindly, I treat every task as an architectural dialogue: identifying real bottlenecks on my system, formulating hypotheses, prompting for code, and rigorously verifying every change against real hardware.
            </p>
          </div>
        </div>

        {/* 3 Replicate Lab Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 01 */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 sm:p-7 shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#ea2804]">
                  PHASE 01 // FRICTION
                </span>
                <div className="p-2 rounded-xl bg-[#f3f0e8] dark:bg-[#28282c] text-[#ea2804]">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-3">
                Curiosity & Problem Spotting
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF document viewing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[10px] text-neutral-500 font-medium">
              ROOT CAUSE DISCOVERY
            </div>
          </div>

          {/* Phase 02 */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 sm:p-7 shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#ff6a3d]">
                  PHASE 02 // SYNTHESIS
                </span>
                <div className="p-2 rounded-xl bg-[#f3f0e8] dark:bg-[#28282c] text-[#ff6a3d]">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-3">
                Directing AI Architecture
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests and hardware reproduction.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[10px] text-neutral-500 font-medium">
              NO BLIND GENERATION
            </div>
          </div>

          {/* Phase 03 */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 sm:p-7 shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#2b9a66]">
                  PHASE 03 // DISCLOSURE
                </span>
                <div className="p-2 rounded-xl bg-[#f3f0e8] dark:bg-[#28282c] text-[#2b9a66]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-3">
                Upstream Transparency
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as genuine professional mentorship.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[10px] text-neutral-500 font-medium">
              ETHICAL DISCLOSURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
