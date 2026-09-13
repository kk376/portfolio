import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-24 border-b border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] border border-black/5 dark:border-white/10 text-xs font-mono font-bold text-[#163300] dark:text-[#9fe870]">
                <span className="w-2 h-2 rounded-full bg-[#9fe870]" />
                <span>CODE REPOSITORIES // TOOLING</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] tracking-tight leading-tight max-w-3xl">
              Engineered codebases. Automation suites, systems fetchers, and document tools.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#454745] dark:text-[#b5b8b2] max-w-md leading-relaxed">
            A catalog of self-directed projects created to eliminate workstation friction on Fedora Linux, test low-level system APIs, and explore native application extensions.
          </p>
        </div>

        {/* 2x2 Wise Tile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLAGSHIP_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#9fe870] transition-all group"
            >
              <div>
                {/* Plate Top Bar */}
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#868685]">0{idx + 1}</span>
                    <span className="text-[#868685]">/</span>
                    <span className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">
                      kk376/{project.id}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] font-mono text-[11px] font-bold text-[#163300] dark:text-[#9fe870]">
                    {project.highlightMetric}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] mb-1.5">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-[#163300] dark:text-[#9fe870] font-bold mb-4">
                  {project.tagline}
                </div>

                {/* Project Description */}
                <p className="font-sans text-sm text-[#454745] dark:text-[#b5b8b2] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Engineering Context Box */}
                <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#22251e] p-4 text-xs text-[#454745] dark:text-[#b5b8b2] mb-6 leading-relaxed">
                  <span className="font-mono font-bold uppercase text-[10px] text-[#163300] dark:text-[#9fe870] block mb-1">
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
                      className="px-3 py-1 rounded-full bg-[#e8ebe6] dark:bg-[#22251e] font-mono text-[10px] text-[#454745] dark:text-[#b5b8b2] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Wire */}
              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#9fe870] hover:bg-[#cdffad] text-[#0e0f0c] font-sans text-xs font-bold shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <div className="font-mono text-[11px] text-[#868685] flex items-center gap-1.5 font-bold">
                  <Star className="w-3.5 h-3.5 text-[#9fe870] fill-[#9fe870]" />
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
