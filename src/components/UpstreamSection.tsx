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
          <span className="rounded-full bg-[#2b9a66] text-white font-mono text-[11px] font-medium px-3 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <Check className="w-3.5 h-3.5" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="rounded-full bg-[#ea2804] text-white font-mono text-[11px] font-medium px-3 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <GitPullRequest className="w-3.5 h-3.5" />
            ACTIVE MERGE REQUEST
          </span>
        );
      case 'investigated':
        return (
          <span className="rounded-full bg-[#f3f0e8] dark:bg-[#28282c] text-[#ea2804] dark:text-[#ff6a3d] border border-[#ea2804]/20 font-mono text-[11px] font-medium px-3 py-1 inline-flex items-center gap-1.5">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#2b9a66]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b9a66]" />
                <span>EXPERIMENT LOG // UPSTREAM</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-tight max-w-3xl">
              Open-source investigations. Real hardware bug fixes and upstream PRs.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#575757] dark:text-[#a0a0a0] mt-3 max-w-2xl leading-relaxed">
              Documented pull requests and GitLab merge requests across Cesium graphics shaders, Mission Center power thrash mitigation, and Zed editor Wayland lifecycle diagnostics.
            </p>
          </div>

          {/* Replicate Pill Filters */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all flex items-center gap-2 active:scale-95 ${
                  selectedCategory === cat.value
                    ? 'bg-[#ea2804] text-white shadow-sm'
                    : 'bg-white dark:bg-[#1f1f23] text-neutral-700 dark:text-neutral-300 border border-[rgba(32,32,32,0.1)] dark:border-white/10 hover:border-[#ea2804]/40 hover:bg-[#f3f0e8] dark:hover:bg-[#28282c]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.value
                      ? 'bg-white/20 text-white'
                      : 'bg-[#f3f0e8] dark:bg-[#28282c] text-neutral-600 dark:text-neutral-400'
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
              className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 sm:p-8 space-y-6 shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-semibold text-neutral-500 bg-[#f3f0e8] dark:bg-[#28282c] px-2.5 py-0.5 rounded-full">
                    ENTRY 0{idx + 1}
                  </span>

                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#ea2804]">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      gitlab.com/{item.repoOwner}/{item.repo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#ea2804]">
                      <GithubIcon className="w-3.5 h-3.5" />
                      github.com/{item.repoOwner}/{item.repo}
                    </span>
                  )}

                  <span className="text-neutral-300 dark:text-neutral-600">/</span>
                  <span className="font-semibold text-[#202020] dark:text-[#fcfcfc]">{item.refLabel}</span>
                  <span className="text-neutral-300 dark:text-neutral-600">/</span>
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
                  className="group inline-flex items-baseline gap-2 font-display text-2xl sm:text-3xl font-bold text-[#202020] dark:text-[#fcfcfc] hover:text-[#ea2804] dark:hover:text-[#ff6a3d] transition-colors leading-snug"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity translate-y-0.5 shrink-0" />
                </a>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-sm sm:text-base text-[#3a3a3a] dark:text-[#d1d1cf] leading-relaxed">
                {item.summary}
              </p>

              {/* The Apprentice Role & AI Collaboration Box */}
              <div className="rounded-xl border border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#161618] p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#ea2804] dark:text-[#ff6a3d]">
                  <Sparkles className="w-3.5 h-3.5 text-[#ea2804]" />
                  <span>Apprentice Role & Directed AI Collaboration</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed">
                  {item.myRoleNote}
                </p>
              </div>

              {/* Interactive Cesium Radar Canvas */}
              {item.hasInteractiveDemo && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-5 py-2.5 rounded-full bg-[#ea2804] hover:bg-[#c01f00] text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-2 active:scale-95"
                  >
                    <span>
                      {showDemoForId === item.id
                        ? 'Close Tactical Sonar'
                        : 'Launch Live Cesium Tactical Sonar'}
                    </span>
                    {showDemoForId === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-black p-3 shadow-lg">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Tag Index */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-0.5 rounded-full bg-[#f3f0e8] dark:bg-[#28282c] text-neutral-600 dark:text-neutral-400 font-medium"
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
