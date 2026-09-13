import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectCategory } from '../types';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Systems & Rust', value: 'systems' },
    { label: 'Linux & Automation', value: 'linux' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-obsidian-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Flagship Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Repositories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-obsidian-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-cyan-500 text-obsidian-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="hud-border bg-obsidian-900/80 rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Header row: Badge and Metric */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] font-semibold">
                    {project.badge}
                  </span>

                  {project.highlightMetric && (
                    <span className="font-mono text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                      {project.highlightMetric}
                    </span>
                  )}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Vibe Coded Disclosure Callout */}
                <div className="p-3 rounded-lg bg-obsidian-950/70 border border-obsidian-800 mb-5 flex items-start gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="text-[11px] font-mono text-slate-300">
                    <span className="text-emerald-400 font-semibold">Vibe Architecture:</span>{' '}
                    {project.vibeNotes}
                  </div>
                </div>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-obsidian-800/90 border border-obsidian-700/80 font-mono text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-obsidian-800/80">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="font-mono text-[11px] text-slate-500">
                    STATUS: ACTIVE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
