import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  const getPlateStamp = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#FF4F00] text-white';
      case 1:
        return 'bg-[#1D4ED8] text-white';
      case 2:
        return 'bg-[#15803D] text-white';
      default:
        return 'bg-black text-white dark:bg-white dark:text-black';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
                PLATE IV // FLAGSHIP CODEBASES
              </span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                FIG. 4.0
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-black dark:text-white tracking-tight leading-tight max-w-3xl">
              Engineered codebases. Automation suites, systems fetchers, and document tools.
            </h2>
          </div>
          <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            A catalog of self-directed projects created to eliminate workstation friction on Fedora Linux, test low-level system APIs, and explore native application extensions.
          </p>
        </div>

        {/* 2x2 Architectural Monograph Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLAGSHIP_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-7 sm:p-9 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss transition-all"
            >
              <div>
                {/* Plate Top Bar */}
                <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-white">
                      PLATE IV.0{idx + 1}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border-2 border-black dark:border-white ${getPlateStamp(
                        idx
                      )}`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-black/30 dark:border-white/30 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white">
                    {project.highlightMetric}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-[#1D4ED8] dark:text-[#60a5fa] font-bold uppercase tracking-wider mb-4">
                  {project.tagline}
                </div>

                {/* Project Description */}
                <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Apprentice Context Box */}
                <div className="p-3.5 border-2 border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-black/30 font-sans text-xs text-neutral-700 dark:text-neutral-300 mb-6">
                  <span className="font-mono font-bold uppercase text-[10px] text-neutral-500 block mb-1">
                    ENGINEERING CONTEXT:
                  </span>
                  {idx === 0 && 'Authored to completely automate fresh Fedora Workstation setups, configuring RPM Fusion, Zed editor, Flatpaks, and security checksum validation.'}
                  {idx === 1 && 'Engineered in Rust using raw Linux kernel procfs parsing and ioctl calls for microsecond telemetry without external process spawns.'}
                  {idx === 2 && 'Developed native document viewer integration for Zed editor on Linux Wayland environments.'}
                  {idx === 3 && 'Comprehensive engineering standards, zero-trust security invariants, and automated pre-push audit tooling.'}
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-black/20 dark:border-white/20 bg-neutral-100 dark:bg-neutral-800 font-mono text-[10px] text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Wire */}
              <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#FF4F00]" />
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
