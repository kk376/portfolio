import React from 'react';
import { Sparkles, Shield, Rocket, Eye, Terminal, CheckCircle2 } from 'lucide-react';
import { VIBE_CODING_MANIFESTO } from '../data/portfolioData';

export const VibeManifesto: React.FC = () => {
  const icons = [Rocket, Eye, Shield, Terminal];

  return (
    <section id="manifesto" className="py-16 md:py-24 border-t border-obsidian-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Vibe Coding Manifesto
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            I believe in absolute transparency. My open source contributions and prototypes are vibe coded.
            Here is why that is a badge of honor rather than something to conceal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {VIBE_CODING_MANIFESTO.principles.map((principle, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={principle.label}
                className="hud-border-emerald bg-obsidian-900/80 rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {principle.label}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-obsidian-800/80 flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hardened Standard // Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="hud-border bg-obsidian-900/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            "Vibe coding gives you velocity. Engineering discipline keeps it running."
          </h3>
          <p className="text-sm text-slate-400 font-mono max-w-2xl mx-auto leading-relaxed">
            By being completely open about vibe coding, we raise the bar for what matters: verifiable output,
            working software, zero memory leaks, and upstream community impact.
          </p>
        </div>
      </div>
    </section>
  );
};
