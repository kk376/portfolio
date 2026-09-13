import React from 'react';
import { GitPullRequest, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active in Open Source</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Fedora Linux / Rust / Wayland</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] max-w-4xl">
          Systems, Linux automation and open source engineering.
        </h1>

        {/* Bio paragraph */}
        <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed mb-8 max-w-3xl">
          Hi, I am Kushagra Kumar (kk376). I build microsecond Rust system fetchers, author production
          Fedora Workstation automation suites, diagnose PCIe kernel power thrash in system monitors,
          and contribute graphics shaders and document engines upstream.
        </p>

        {/* Subtle Methodology Note */}
        <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono mb-10 py-2.5 px-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06] max-w-2xl">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>
            Methodology: Rapid architectural exploration and prototyping ('vibe coding'), hardened through deep systems testing and strict safety invariants.
          </span>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#upstream"
            className="px-5 py-2.5 rounded-lg bg-white text-black hover:bg-slate-200 text-xs font-semibold font-mono transition-colors flex items-center gap-2 shadow-sm"
          >
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Explore Upstream Work (9)</span>
          </a>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] text-xs font-semibold font-mono transition-colors flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>View Flagship Repositories</span>
          </a>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.18] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://gitlab.com/Kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.18] transition-colors"
              title="GitLab Profile"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" />
            </a>
          </div>
        </div>

        {/* High-level telemetry row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.06]">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight font-mono">9+</div>
            <div className="text-xs text-slate-400 mt-1">Upstream PRs & MRs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tracking-tight font-mono">1,600+</div>
            <div className="text-xs text-slate-400 mt-1">Lines of Fedora Bash (v5.5.7)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tracking-tight font-mono">&lt; 1.8ms</div>
            <div className="text-xs text-slate-400 mt-1">Rust CLI Execution (kkfetch)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tracking-tight font-mono">4 Distros</div>
            <div className="text-xs text-slate-400 mt-1">Packaged Upstream</div>
          </div>
        </div>
      </div>
    </section>
  );
};
