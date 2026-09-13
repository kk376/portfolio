import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Independent Repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Flagship Systems & Tooling
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl font-mono">
            Key repositories maintained for Linux workstation provisioning, sub-millisecond systems inspection, and modern editor integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FLAGSHIP_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.14] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Version and Metric */}
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </span>
                    {project.version && (
                      <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.08] text-[11px]">
                        {project.version}
                      </span>
                    )}
                  </div>

                  <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-medium">
                    {project.highlightMetric}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-3">
                  {project.tagline}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Methodology note */}
                {project.methodologyNote && (
                  <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.04] text-[11px] text-slate-400 font-mono leading-relaxed mb-4">
                    <span className="text-slate-300">Engineering Note: </span>
                    {project.methodologyNote}
                  </div>
                )}
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  {project.starsCount && (
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{project.starsCount}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
