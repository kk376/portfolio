import React from 'react';
import { Sparkles, Terminal, ArrowUpRight, ShieldCheck, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tactical Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-6 shadow-sm">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Callsign: KK376 // Systems & Upstream Open Source</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Systems engineering with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300">
              unapologetic vibe coding
            </span>{' '}
            velocity.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            I build hyper-efficient Linux automation, microsecond Rust CLI tools, and upstream 3D
            shaders for Cesium. Rapidly prototyped with modern AI workflows, hardened with
            relentless engineering discipline and zero-warning standards.
          </p>
        </div>

        {/* Vibe Coding Transparency Callout Card */}
        <div className="hud-border-emerald bg-obsidian-900/80 backdrop-blur-md rounded-xl p-4 sm:p-5 mb-10 max-w-3xl">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-emerald-400">
                <span>The Transparency Protocol</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Zero Blindness Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                My open source contributions and projects are vibe coded. I do not hide it. I embrace
                modern generative workflows to explore high-dimension architectural ideas at supersonic speed,
                then enforce strict memory safety invariants, deep test matrices, and signed git commits before shipping.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#upstream"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-obsidian-950 font-mono font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <span>Explore Upstream Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#terminal"
            className="px-6 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-200 border border-obsidian-700 hover:border-cyan-400/50 font-mono text-sm transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch kkfetch Terminal</span>
          </a>

          <a
            href="#manifesto"
            className="px-6 py-3 rounded-xl bg-obsidian-900/60 hover:bg-obsidian-850 text-slate-400 hover:text-slate-200 border border-obsidian-800 font-mono text-sm transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Read Vibe Manifesto</span>
          </a>
        </div>

        {/* Telemetry Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono">
          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-obsidian-800/80 hover:border-cyan-500/30 transition-all">
            <div className="text-xs text-slate-500 uppercase">Upstream Cesium</div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 mt-1">PR #214</div>
            <div className="text-[11px] text-slate-400 mt-1">Tactical Sonar Visuals</div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-obsidian-800/80 hover:border-emerald-500/30 transition-all">
            <div className="text-xs text-slate-500 uppercase">Fedora Automation</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">1,600+ Lines</div>
            <div className="text-[11px] text-slate-400 mt-1">v5.5.7 Modular Suite</div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-obsidian-800/80 hover:border-cyan-500/30 transition-all">
            <div className="text-xs text-slate-500 uppercase">Rust CLI Tool</div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 mt-1">&lt; 1.8ms</div>
            <div className="text-[11px] text-slate-400 mt-1">kkfetch execution</div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-obsidian-800/80 hover:border-emerald-500/30 transition-all">
            <div className="text-xs text-slate-500 uppercase">Zed Extension</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">Native Engine</div>
            <div className="text-[11px] text-slate-400 mt-1">kkpdf-zed renderer</div>
          </div>
        </div>
      </div>
    </section>
  );
};
