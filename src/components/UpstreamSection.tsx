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
    { label: 'All Dispatches', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'Merged Code', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
    { label: 'Systems & Kernel', value: 'systems', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'systems').length },
    { label: 'Packaging & CI', value: 'packaging', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'packaging').length },
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
          <span className="rounded-full bg-[#9fe870] text-[#0e0f0c] font-mono text-[11px] font-bold px-3.5 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="rounded-full bg-[#e2f6d5] dark:bg-[#22251e] text-[#163300] dark:text-[#9fe870] font-mono text-[11px] font-bold px-3.5 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <GitPullRequest className="w-3.5 h-3.5 stroke-[2.5]" />
            ACTIVE MERGE REQUEST
          </span>
        );
      case 'investigated':
        return (
          <span className="rounded-full bg-[#e8ebe6] dark:bg-[#22251e] text-[#0e0f0c] dark:text-[#f4f6f2] border border-black/5 dark:border-white/10 font-mono text-[11px] font-bold px-3.5 py-1 inline-flex items-center gap-1.5">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 md:py-24 border-b border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] border border-black/5 dark:border-white/10 text-xs font-mono font-bold text-[#163300] dark:text-[#9fe870]">
                <span className="w-2 h-2 rounded-full bg-[#9fe870]" />
                <span>EXPERIMENT LOG // UPSTREAM</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] tracking-tight leading-tight max-w-3xl">
              Open-source investigations. Real hardware bug fixes and upstream PRs.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#454745] dark:text-[#b5b8b2] mt-3 max-w-2xl leading-relaxed">
              Documented pull requests and GitLab merge requests across Cesium graphics shaders, Mission Center power thrash mitigation, and Zed editor Wayland lifecycle diagnostics.
            </p>
          </div>

          {/* Wise Pill Filters */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all flex items-center gap-2 active:scale-95 ${
                  selectedCategory === cat.value
                    ? 'bg-[#9fe870] text-[#0e0f0c] shadow-sm'
                    : 'bg-white dark:bg-[#191b16] text-[#454745] dark:text-[#b5b8b2] border border-black/5 dark:border-white/10 hover:border-[#9fe870]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    selectedCategory === cat.value
                      ? 'bg-black/15 text-[#0e0f0c]'
                      : 'bg-[#e8ebe6] dark:bg-[#22251e] text-[#454745] dark:text-[#b5b8b2]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Upstream Case Study Cards */}
        <div className="space-y-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] p-7 sm:p-8 space-y-6 shadow-sm hover:border-[#9fe870] transition-all"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-bold text-[#868685] bg-[#e8ebe6] dark:bg-[#22251e] px-3 py-1 rounded-full">
                    ENTRY 0{idx + 1}
                  </span>

                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#163300] dark:text-[#9fe870]">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      gitlab.com/{item.repoOwner}/{item.repo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#163300] dark:text-[#9fe870]">
                      <GithubIcon className="w-3.5 h-3.5" />
                      github.com/{item.repoOwner}/{item.repo}
                    </span>
                  )}

                  <span className="text-[#868685]">/</span>
                  <span className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">{item.refLabel}</span>
                  <span className="text-[#868685]">/</span>
                  <span className="text-[#868685]">{item.date}</span>
                </div>

                <div>{getStatusBadge(item.status)}</div>
              </div>

              {/* Title & Link */}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 font-display text-2xl sm:text-3xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] hover:text-[#163300] dark:hover:text-[#9fe870] transition-colors leading-snug"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity translate-y-0.5 shrink-0" />
                </a>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-sm sm:text-base text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                {item.summary}
              </p>

              {/* The Apprentice Role & AI Collaboration Box */}
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#22251e] p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#163300] dark:text-[#9fe870]">
                  <Sparkles className="w-3.5 h-3.5 text-[#9fe870]" />
                  <span>Apprentice Role & Directed AI Collaboration</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#454745] dark:text-[#b5b8b2] leading-relaxed">
                  {item.myRoleNote}
                </p>
              </div>

              {/* Interactive Cesium Radar Canvas */}
              {item.hasInteractiveDemo && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-6 py-3 rounded-full bg-[#9fe870] hover:bg-[#cdffad] text-[#0e0f0c] font-sans text-xs font-bold shadow-sm transition-all flex items-center gap-2 active:scale-95"
                  >
                    <span>
                      {showDemoForId === item.id
                        ? 'Close Tactical Sonar'
                        : 'Launch Live Cesium Tactical Sonar'}
                    </span>
                    {showDemoForId === item.id ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-black p-3 shadow-lg">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Tag Index */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[11px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#e8ebe6] dark:bg-[#22251e] text-[#454745] dark:text-[#b5b8b2] font-semibold"
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
