import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Star, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'linux' | 'systems' | 'python'>('all');

  const filteredProjects = FLAGSHIP_PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const getProjectPreview = (id: string) => {
    switch (id) {
      case 'fedora-post-install':
        return (
          <div className="bg-[#181824] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-white/5 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-white/5">
              <span className="text-[var(--accent-peach)] font-bold">setup.sh (v5.5.7)</span>
              <span>1,600+ lines bash</span>
            </div>
            <p className="text-[var(--accent-green)]">$ ./setup.sh --verify-checksums</p>
            <p className="text-slate-400">[INFO] RPM Fusion non-free: verified</p>
            <p className="text-slate-400">[INFO] Zed editor &amp; btop: configured</p>
            <p className="text-[var(--accent-cyan)]">[OK] Fedora Workstation hardened</p>
          </div>
        );
      case 'kkfetch':
        return (
          <div className="bg-[#181824] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-white/5 space-y-1 overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-white/5">
              <span className="text-[var(--accent-cyan)] font-bold">kkfetch --bench</span>
              <span>Rust Procfs</span>
            </div>
            <p className="text-slate-400">Benchmark: 5.6x faster than fastfetch</p>
            <p className="text-[var(--accent-primary)]">Kernel: Linux 6.14.0-rc5</p>
            <p className="text-[var(--accent-peach)]">CPU: AMD Ryzen 5 7535HS (12)</p>
            <p className="text-[var(--accent-green)]">GPU State: D3cold preserved</p>
          </div>
        );
      case 'cli-python-crud-project':
        return (
          <div className="bg-[#181824] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-white/5 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-white/5">
              <span className="text-[var(--accent-secondary)] font-bold">python3 main.py</span>
              <span>pathlib CRUD</span>
            </div>
            <p className="text-[var(--accent-green)]">[1] Create Directory Structure</p>
            <p className="text-slate-400">[2] Search &amp; Filter Logs</p>
            <p className="text-slate-400">[3] Batch File Operations</p>
            <p className="text-[var(--accent-peach)]">[OK] Exception handled safely</p>
          </div>
        );
      case 'mini-projects-collection':
        return (
          <div className="bg-[#181824] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-white/5 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-white/5">
              <span className="text-[var(--accent-primary)] font-bold">python-mini-projects/</span>
              <span>10 Apps</span>
            </div>
            <p className="text-slate-400">├── expense_tracker.py</p>
            <p className="text-slate-400">├── password_strength.py</p>
            <p className="text-slate-400">├── student_grades.py</p>
            <p className="text-[var(--accent-green)]">└── terminal_quiz.py</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="Recent Projects"
        subtitle="Independent software tools authored for Linux systems and Python fundamentals"
      />

      {/* Portfolio Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
            filter === 'all'
              ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
              : 'bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5'
          }`}
        >
          Everything
        </button>

        <button
          onClick={() => setFilter('linux')}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
            filter === 'linux'
              ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
              : 'bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5'
          }`}
        >
          Linux &amp; Shell
        </button>

        <button
          onClick={() => setFilter('systems')}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
            filter === 'systems'
              ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
              : 'bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5'
          }`}
        >
          Systems &amp; Telemetry
        </button>

        <button
          onClick={() => setFilter('python')}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
            filter === 'python'
              ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
              : 'bg-white dark:bg-[#252536] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/5'
          }`}
        >
          Python &amp; Apps
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="greg-card p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Header: Tag + Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-light)] text-[var(--accent-primary)]">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {project.badge}
                  </span>
                  {project.starsCount && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{project.starsCount}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                {project.tagline}
              </p>

              {/* Terminal / Code Preview */}
              <div className="mb-4">
                {getProjectPreview(project.id)}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                <span className="text-xs font-bold text-[var(--accent-primary)]">
                  {project.highlightMetric}
                </span>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-[var(--accent-primary)] hover:text-white dark:hover:bg-[var(--accent-primary)] dark:hover:text-white transition-all text-slate-700 dark:text-slate-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
