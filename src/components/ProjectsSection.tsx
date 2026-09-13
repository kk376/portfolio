import React, { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';
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
          <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-800">
              <span className="text-cyan-400">setup.sh (v5.5.7)</span>
              <span>1,600+ lines bash</span>
            </div>
            <p className="text-emerald-400">$ ./setup.sh --verify-checksums</p>
            <p className="text-slate-400">[INFO] RPM Fusion non-free: verified</p>
            <p className="text-slate-400">[INFO] Zed editor & btop: configured</p>
            <p className="text-cyan-400">[OK] Fedora Workstation hardened</p>
          </div>
        );
      case 'kkfetch':
        return (
          <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-800">
              <span className="text-cyan-400">kkfetch (Rust 1.85)</span>
              <span>0.8 µs latency</span>
            </div>
            <p className="text-cyan-400">kk376@victus-station</p>
            <p className="text-slate-400">OS: Fedora 44 (Workstation Edition)</p>
            <p className="text-slate-400">Kernel: Linux 6.14.0-rc5-x86_64</p>
            <p className="text-emerald-400">Procfs Query: direct memory parsing</p>
          </div>
        );
      case 'cli-python-crud-project':
        return (
          <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-800">
              <span className="text-cyan-400">manager.py (pathlib)</span>
              <span>CRUD Architecture</span>
            </div>
            <p className="text-amber-400">&gt;&gt;&gt; file_manager.create_record()</p>
            <p className="text-slate-400">[1] Create [2] Read [3] Update [4] Delete</p>
            <p className="text-emerald-400">[SUCCESS] Record written to disk safely</p>
          </div>
        );
      default:
        return (
          <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1.5 overflow-hidden">
            <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-800">
              <span className="text-cyan-400">Python Suite</span>
              <span>10 Mini Applications</span>
            </div>
            <p className="text-blue-400">&gt; Expense Tracker &amp; Budgeting</p>
            <p className="text-slate-400">&gt; Student Grade Management System</p>
            <p className="text-emerald-400">&gt; Password Entropy &amp; Contact Book</p>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTFOLIO WORK"
          heading="My Projects."
          subHeading="Here are a few cool codebases and tools I have engineered, do check them out!"
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Linux Automation', value: 'linux' },
            { label: 'Systems & Rust', value: 'systems' },
            { label: 'Python Tooling', value: 'python' },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value as typeof filter)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                filter === item.value
                  ? 'anand-gradient-bg text-white shadow-md'
                  : 'bg-slate-100 dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Anand Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Visual Preview Header */}
                <div className="rounded-xl overflow-hidden shadow-inner">
                  {getProjectPreview(project.id)}
                </div>

                {/* Card Title & Tagline */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-blue-600 dark:text-cyan-400">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-900/50">
                      {project.highlightMetric}
                    </span>
                  </div>

                  <h3 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-montserrat text-xs sm:text-sm font-medium text-blue-600 dark:text-cyan-400 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Engineering Context Note */}
                <div className="bg-slate-50 dark:bg-[#162032] p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-mono font-bold text-[10px] text-blue-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                    ENGINEERING CONTEXT:
                  </span>
                  {project.id === 'fedora-post-install' &&
                    'Created to automate fresh Fedora Workstation setups, configuring verified checksum downloads, btop, Zed editor, and Flatpak isolation.'}
                  {project.id === 'kkfetch' &&
                    'Engineered in Rust with direct Linux kernel procfs parsing and ioctl calls, achieving sub-millisecond execution without subshells.'}
                  {project.id === 'cli-python-crud-project' &&
                    'Engineered with modern Python pathlib, comprehensive input sanitation, and graceful exception handling.'}
                  {project.id === 'mini-projects-collection' &&
                    'Ten standalone terminal utilities covering budgeting calculations, password entropy analysis, and student databases.'}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1f2937] text-slate-600 dark:text-slate-300 font-mono text-[11px] font-medium border border-slate-200 dark:border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full anand-gradient-bg text-white font-poppins text-xs font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all active:scale-95 cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionFooter
          phrase="Check out "
          link="upstream dispatches!"
          toAddress="#upstream"
        />
      </div>
    </section>
  );
};
