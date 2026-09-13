import React from 'react';
import { Terminal, Laptop, HeartHandshake, Sparkles } from 'lucide-react';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
              <Sparkles className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff]" />
              <span>COGNITIVE ARCHITECTURE // AI PAIRING</span>
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl">
            "I do not pretend to know everything. I guide AI to learn faster and build real things."
          </h2>

          <div className="p-6 sm:p-7 rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-[#f5e9d4]/35 dark:bg-[#0f172a] shadow-sm max-w-3xl">
            <p className="font-sans text-sm sm:text-base text-[#273951] dark:text-[#94a3b8] leading-relaxed">
              As someone actively learning Frontend, I view modern AI assistants as a high-leverage pairing partner. Rather than using AI blindly, I treat every task as an architectural dialogue: identifying real bottlenecks on my system, formulating hypotheses, prompting for code, and rigorously verifying every change against real hardware.
            </p>
          </div>
        </div>

        {/* 3 Stripe Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 01 */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] tabular-nums">
                  PHASE 01 // FRICTION
                </span>
                <div className="p-2 rounded-lg bg-[#533afd]/10 dark:bg-[#533afd]/20 text-[#533afd] dark:text-[#00d4ff]">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-3 tracking-tight">
                Curiosity & Problem Spotting
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF document viewing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[10px] text-[#64748d] dark:text-[#94a3b8] font-semibold tracking-wider">
              ROOT CAUSE DISCOVERY
            </div>
          </div>

          {/* Phase 02 */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] tabular-nums">
                  PHASE 02 // SYNTHESIS
                </span>
                <div className="p-2 rounded-lg bg-[#533afd]/10 dark:bg-[#533afd]/20 text-[#533afd] dark:text-[#00d4ff]">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-3 tracking-tight">
                Directing AI Architecture
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests and hardware reproduction.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[10px] text-[#64748d] dark:text-[#94a3b8] font-semibold tracking-wider">
              NO BLIND GENERATION
            </div>
          </div>

          {/* Phase 03 */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] tabular-nums">
                  PHASE 03 // DISCLOSURE
                </span>
                <div className="p-2 rounded-lg bg-[#533afd]/10 dark:bg-[#533afd]/20 text-[#533afd] dark:text-[#00d4ff]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-3 tracking-tight">
                Upstream Transparency
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as genuine professional mentorship.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[10px] text-[#64748d] dark:text-[#94a3b8] font-semibold tracking-wider">
              ETHICAL DISCLOSURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
