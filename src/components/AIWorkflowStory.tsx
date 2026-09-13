import React from 'react';
import { Terminal, Laptop, HeartHandshake, Sparkles } from 'lucide-react';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/20 relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Investigative Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.2em] font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investigative Feature // Cognitive Architecture</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none mb-8 max-w-5xl">
            "I do not pretend to know everything. I guide AI to learn faster and build real things."
          </h2>

          <div className="p-6 sm:p-8 bg-[#2d2d2d] border-l-4 border-verge-mint border-y border-r border-white/10 max-w-4xl">
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed">
              As someone actively learning Frontend, I view modern AI assistants as a high-leverage pairing partner. Rather than using AI blindly, I treat every task as an architectural dialogue: identifying real bottlenecks on my system, formulating hypotheses, prompting for code, and rigorously verifying every change against real hardware.
            </p>
          </div>
        </div>

        {/* 3 Editorial Dispatch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 bg-[#2d2d2d] border border-white/10 hover:border-verge-mint transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-verge-mint uppercase tracking-[0.14em] font-bold">
                  Phase 01 // Friction
                </span>
                <div className="p-2 bg-black/40 border border-white/10 text-verge-mint">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-4 group-hover:text-verge-blue transition-colors">
                Curiosity & Problem Spotting
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#949494] leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF viewing.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-verge-mint uppercase tracking-wider">
              Real Workstation Telemetry
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#2d2d2d] border border-white/10 hover:border-verge-yellow transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-verge-yellow uppercase tracking-[0.14em] font-bold">
                  Phase 02 // Synthesis
                </span>
                <div className="p-2 bg-black/40 border border-white/10 text-verge-yellow">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-4 group-hover:text-verge-blue transition-colors">
                Directing AI Architecture
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#949494] leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-verge-yellow uppercase tracking-wider">
              No Blind Copy-Paste
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#2d2d2d] border border-white/10 hover:border-verge-violet transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-verge-mint uppercase tracking-[0.14em] font-bold">
                  Phase 03 // Disclosure
                </span>
                <div className="p-2 bg-black/40 border border-white/10 text-white">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-4 group-hover:text-verge-blue transition-colors">
                Upstream Transparency
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#949494] leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as genuine mentorship.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-verge-mint uppercase tracking-wider">
              100% Transparent Disclosure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
