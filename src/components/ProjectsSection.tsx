import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
                <span className="w-2 h-2 rounded-full bg-[#533afd] dark:bg-[#00d4ff]" />
                <span>CODE REPOSITORIES // TOOLING</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-tight max-w-3xl">
              Engineered codebases. Automation suites, systems fetchers, and document tools.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] max-w-md leading-relaxed">
            A catalog of self-directed projects created to eliminate workstation friction on Fedora Linux, test low-level system APIs, and explore native application extensions.
          </p>
        </div>

        {/* 2x2 Stripe Precision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLAGSHIP_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div>
                {/* Plate Top Bar */}
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#64748d] dark:text-[#94a3b8] tabular-nums">0{idx + 1}</span>
                    <span className="text-[#64748d]/40 dark:text-white/20">/</span>
                    <span className="font-medium text-[#0d253d] dark:text-[#f8fafc]">
                      kk376/{project.id}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#533afd]/10 text-[#533afd] dark:text-[#b9b9f9] border border-[#533afd]/20 font-mono text-[11px] font-semibold tabular-nums">
                    {project.highlightMetric}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1.5 tracking-tight">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-[#533afd] dark:text-[#00d4ff] font-medium mb-4">
                  {project.tagline}
                </div>

                {/* Project Description */}
                <p className="font-sans text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Engineering Context Box */}
                <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#1e293b]/60 p-4 text-xs text-[#273951] dark:text-[#cbd5e1] mb-6 leading-relaxed">
                  <span className="font-mono font-semibold uppercase text-[10px] text-[#533afd] dark:text-[#00d4ff] block mb-1">
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
                      className="px-2.5 py-0.5 rounded-full bg-[#f6f9fc] dark:bg-[#1e293b] font-mono text-[10px] text-[#64748d] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 font-medium tabular-nums"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Wire */}
              <div className="pt-4 border-t border-[#e3e8ee] dark:border-white/5 flex items-center justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <div className="font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8] flex items-center gap-1.5 font-medium">
                  <Star className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff] fill-[#533afd] dark:fill-[#00d4ff]" />
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
