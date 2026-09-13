import React from 'react';
import { Sparkles, Terminal, Laptop, HeartHandshake } from 'lucide-react';

export const AIWorkflowStory: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0e101c] dark:via-[#090b14] dark:to-[#0d0f1a] border border-purple-200 dark:border-purple-500/30 shadow-md dark:shadow-2xl relative overflow-hidden">
          {/* Top rainbow accent hairline */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-emerald-400" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span>The AI Pair-Programming Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              "I don't pretend to know everything. I guide AI to learn faster and build real things."
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              As someone actively learning Frontend, I view modern AI assistants as a high-leverage pairing
              partner. Rather than using AI blindly, I treat every task as an architectural dialogue:
              identifying real bottlenecks on my system, formulating hypotheses, prompting for code,
              and rigorously verifying every change against real hardware.
            </p>
          </div>

          {/* 3 Pillars Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-pink-200 dark:border-pink-500/20 hover:border-pink-300 dark:hover:border-pink-500/40 transition-colors space-y-2">
              <div className="w-9 h-9 rounded-lg bg-pink-100/70 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Curiosity & Problem Spotting</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every project begins from a personal workflow friction point on my Fedora laptop, from Wayland compositor freezes to Zed editor PDF viewing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-colors space-y-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-100/70 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3">
                <Laptop className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Directing AI Architecture</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                I guide the AI step by step, steering implementation decisions, refusing swallowed errors, and demanding strict unit tests.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-colors space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-100/70 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Upstream Transparency</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                I am 100% honest with maintainers: I clearly disclose AI assistance in my PRs and welcome maintainer critiques as the ultimate mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
