import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#ea2804]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea2804]" />
                <span>CODE REPOSITORIES // TOOLING</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-tight max-w-3xl">
              Engineered codebases. Automation suites, systems fetchers, and document tools.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#575757] dark:text-[#a0a0a0] max-w-md leading-relaxed">
            A catalog of self-directed projects created to eliminate workstation friction on Fedora Linux, test low-level system APIs, and explore native application extensions.
          </p>
        </div>

        {/* 2x2 Replicate Model Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLAGSHIP_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all group"
            >
              <div>
                {/* Plate Top Bar */}
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-neutral-400">0{idx + 1}</span>
                    <span className="text-neutral-300 dark:text-neutral-600">/</span>
                    <span className="font-semibold text-[#202020] dark:text-[#fcfcfc]">
                      kk376/{project.id}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#f3f0e8] dark:bg-[#28282c] font-mono text-[11px] font-semibold text-[#ea2804] dark:text-[#ff6a3d]">
                    {project.highlightMetric}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1.5">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-[#ea2804] dark:text-[#ff6a3d] font-medium mb-4">
                  {project.tagline}
                </div>

                {/* Project Description */}
                <p className="font-sans text-sm text-[#3a3a3a] dark:text-[#d1d1cf] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Engineering Context Box */}
                <div className="rounded-xl border border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#161618] p-4 text-xs text-[#575757] dark:text-[#a0a0a0] mb-6 leading-relaxed">
                  <span className="font-mono font-semibold uppercase text-[10px] text-[#ea2804] block mb-1">
                    ENGINEERING CONTEXT:
                  </span>
                  {idx === 0 && 'Authored to completely automate fresh Fedora Workstation setups, configuring RPM Fusion, Zed editor, Flatpaks, and security checksum validation.'}
                  {idx === 1 && 'Engineered in Rust using raw Linux kernel procfs parsing and ioctl calls for microsecond telemetry without external process spawns.'}
                  {idx === 2 && 'Developed native document viewer integration for Zed editor on Linux Wayland environments.'}
                  {idx === 3 && 'Comprehensive engineering standards, zero-trust security invariants, and automated pre-push audit tooling.'}
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#28282c] font-mono text-[10px] text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Wire */}
              <div className="pt-4 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 flex items-center justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#202020] text-white hover:bg-[#ea2804] dark:bg-[#fcfcfc] dark:text-[#202020] dark:hover:bg-[#ea2804] dark:hover:text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="font-mono text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#ea2804]" />
                  <span>OPEN SOURCE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
