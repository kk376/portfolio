import React from 'react';
import { ExternalLink, Star, FolderGit2 } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'pink':
        return {
          border: 'border-pink-300/80 dark:border-pink-500/30 hover:border-pink-500 dark:hover:border-pink-500/60',
          badge: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/30',
          metric: 'text-pink-700 bg-pink-50 dark:text-pink-400 dark:bg-pink-500/10',
          gradient: 'from-pink-500 to-rose-500',
        };
      case 'violet':
        return {
          border: 'border-purple-300/80 dark:border-purple-500/30 hover:border-purple-500 dark:hover:border-purple-500/60',
          badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30',
          metric: 'text-purple-700 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10',
          gradient: 'from-purple-500 to-indigo-500',
        };
      case 'cyan':
        return {
          border: 'border-cyan-300/80 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-500/60',
          badge: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30',
          metric: 'text-cyan-700 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-500/10',
          gradient: 'from-cyan-500 to-blue-500',
        };
      default:
        return {
          border: 'border-emerald-300/80 dark:border-emerald-500/30 hover:border-emerald-500 dark:hover:border-emerald-500/60',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
          metric: 'text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10',
          gradient: 'from-emerald-500 to-teal-500',
        };
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/[0.04] border border-purple-200 dark:border-white/[0.08] text-xs font-mono text-purple-700 dark:text-purple-400 mb-3 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Codebases
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl font-normal">
            From automated Fedora Linux suites to complete Python CLI utilities and fast system probers.
          </p>
        </div>

        {/* 2x2 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLAGSHIP_PROJECTS.map((project) => {
            const styles = getAccentStyles(project.accentColor);
            return (
              <div
                key={project.id}
                className={`p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border ${styles.border} transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-xl flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Top subtle gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${styles.gradient}`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-semibold border ${styles.badge}`}>
                      {project.badge}
                    </span>

                    <span className={`font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md ${styles.metric}`}>
                      {project.highlightMetric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-1">
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                    {project.tagline}
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/[0.04] flex items-center justify-between">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </a>

                    {project.starsCount && (
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{project.starsCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
