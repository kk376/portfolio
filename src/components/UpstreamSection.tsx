import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, ChevronDown, ChevronUp, Check, Sparkles } from 'lucide-react';
import { UPSTREAM_CONTRIBUTIONS } from '../data/portfolioData';
import type { ContributionCategory, UpstreamContribution } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';
import { SonarCanvas } from './SonarCanvas';

export const UpstreamSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContributionCategory>('all');
  const [showDemoForId, setShowDemoForId] = useState<string | null>(null);

  const categories: { label: string; value: ContributionCategory; count: number }[] = [
    { label: 'ALL DISPATCHES', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'MERGED CODE', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
    { label: 'SYSTEMS & KERNEL', value: 'systems', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'systems').length },
    { label: 'PACKAGING & CI', value: 'packaging', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'packaging').length },
  ];

  const filtered = UPSTREAM_CONTRIBUTIONS.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'merged') return item.status === 'merged';
    return item.category === selectedCategory;
  });

  const getStatusBadge = (status: UpstreamContribution['status']) => {
    switch (status) {
      case 'merged':
        return (
          <span className="border-2 border-black dark:border-white bg-[#15803D] text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 inline-flex items-center gap-1.5 shadow-swiss-sm">
            <Check className="w-3.5 h-3.5" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 inline-flex items-center gap-1.5 shadow-swiss-sm">
            <GitPullRequest className="w-3.5 h-3.5" />
            ACTIVE MERGE REQUEST
          </span>
        );
      case 'investigated':
        return (
          <span className="border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 inline-flex items-center gap-1.5 shadow-swiss-sm">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 md:py-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Plate Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="border-2 border-black dark:border-white bg-[#15803D] text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
                PLATE III // UPSTREAM ARCHITECTURAL DISPATCHES
              </span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                FIG. 3.0
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-black dark:text-white tracking-tight leading-tight max-w-3xl">
              Open-source investigations. Real hardware bug fixes and upstream PRs.
            </h2>
            <p className="font-sans text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl leading-relaxed">
              Documented pull requests and GitLab merge requests across Cesium graphics shaders, Mission Center power thrash mitigation, and Zed editor Wayland lifecycle diagnostics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-2 border-2 border-black dark:border-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
                  selectedCategory === cat.value
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-swiss-sm translate-x-[1px] translate-y-[1px]'
                    : 'bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-swiss-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 border ${
                    selectedCategory === cat.value
                      ? 'border-white/30 dark:border-black/30'
                      : 'border-black/20 dark:border-white/20'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Upstream Case Study Plates */}
        <div className="space-y-8">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-6 sm:p-8 space-y-6"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-bold text-black dark:text-white border border-black/30 dark:border-white/30 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">
                    DISPATCH 0{idx + 1}
                  </span>

                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#FF4F00]">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      GITLAB // {item.repoOwner}/{item.repo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#1D4ED8] dark:text-[#60a5fa]">
                      <GithubIcon className="w-3.5 h-3.5" />
                      GITHUB // {item.repoOwner}/{item.repo}
                    </span>
                  )}

                  <span className="text-neutral-400">/</span>
                  <span className="font-bold text-neutral-600 dark:text-neutral-300">{item.refLabel}</span>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-500">{item.date}</span>
                </div>

                <div>{getStatusBadge(item.status)}</div>
              </div>

              {/* Title & Link */}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 font-serif text-2xl sm:text-3xl font-bold text-black dark:text-white hover:text-[#1D4ED8] dark:hover:text-[#60a5fa] transition-colors leading-snug"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity translate-y-0.5 shrink-0" />
                </a>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {item.summary}
              </p>

              {/* The Apprentice Role & AI Collaboration Box */}
              <div className="border-2 border-black/20 dark:border-white/20 bg-neutral-50 dark:bg-black/30 p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D4ED8] dark:text-[#60a5fa] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4F00]" />
                  <span>Apprentice Role & Directed AI Collaboration</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {item.myRoleNote}
                </p>
              </div>

              {/* Interactive Cesium Radar Canvas */}
              {item.hasInteractiveDemo && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-5 py-2.5 border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-2"
                  >
                    <span>
                      {showDemoForId === item.id
                        ? 'CLOSE TACTICAL SONAR'
                        : 'LAUNCH LIVE CESIUM TACTICAL SONAR'}
                    </span>
                    {showDemoForId === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-4 border-2 border-black dark:border-white bg-black p-3 shadow-swiss">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Tag Index */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-black/20 dark:border-white/20 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
