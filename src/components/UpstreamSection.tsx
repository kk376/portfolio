import React from 'react';
import { GitPullRequest, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { UPSTREAM_CONTRIBUTIONS } from '../data/portfolioData';
import { SonarCanvas } from './SonarCanvas';

export const UpstreamSection: React.FC = () => {
  const contribution = UPSTREAM_CONTRIBUTIONS[0];

  return (
    <section id="upstream" className="py-16 md:py-24 border-t border-obsidian-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Upstream Contribution Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tactical Sonar Engine in Cesium
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Merging production GLSL shader visual styles into real-world 3D geospatial intelligence software.
          </p>
        </div>

        {/* PR Detailed Card */}
        <div className="hud-border bg-obsidian-900/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-700/60 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Upstream PR #{contribution.prNumber} [MERGED]
              </span>
              <span className="font-mono text-sm text-slate-300 font-medium">
                {contribution.repoOwner} / {contribution.repo}
              </span>
            </div>

            <a
              href={contribution.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-600 text-cyan-400 text-xs font-mono transition-colors"
            >
              <span>View GitHub Pull Request</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {contribution.prTitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {contribution.description}
              </p>

              <div className="p-4 rounded-xl bg-obsidian-950/70 border border-obsidian-800 space-y-2">
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Operational Impact
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {contribution.impact}
                </p>
              </div>

              {/* Vibe Coded disclosure note */}
              <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs font-mono text-slate-300">
                  <span className="text-emerald-400 font-semibold">Vibe Coded Architecture:</span>{' '}
                  Shader geometry and rotation decay algorithms were rapidly prototyped with AI, then
                  profiled on hardware for zero frame-rate degradation and submitted upstream.
                </div>
              </div>

              {/* Tech stack chips */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-2">Technologies & Protocols:</div>
                <div className="flex flex-wrap gap-2">
                  {contribution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-obsidian-800/80 border border-obsidian-700 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactical Sonar Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-obsidian-700/60 bg-obsidian-950/80 p-1">
                <div className="px-3 py-2 border-b border-obsidian-800 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>LIVE HUD DEMO</span>
                  <span className="text-cyan-400">WebGL / Canvas 60fps</span>
                </div>
                <SonarCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
