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
          <span className="rounded-full bg-[#533afd]/10 border border-[#533afd]/20 text-[#533afd] dark:text-[#a8c3de] font-mono text-[11px] font-semibold px-3 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#008ba3] dark:text-[#00d4ff] font-mono text-[11px] font-semibold px-3 py-1 inline-flex items-center gap-1.5 shadow-sm">
            <GitPullRequest className="w-3.5 h-3.5 stroke-[2.5]" />
            ACTIVE MERGE REQUEST
          </span>
        );
      case 'investigated':
        return (
          <span className="rounded-full bg-[#f6f9fc] dark:bg-[#1e293b] text-[#64748d] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 font-mono text-[11px] font-semibold px-3 py-1 inline-flex items-center gap-1.5">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
                <span className="w-2 h-2 rounded-full bg-[#533afd] dark:bg-[#00d4ff]" />
                <span>EXPERIMENT LOG // UPSTREAM</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-tight max-w-3xl">
              Open-source investigations. Real hardware bug fixes and upstream PRs.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] mt-3 max-w-2xl leading-relaxed">
              Documented pull requests and GitLab merge requests across Cesium graphics shaders, Mission Center power thrash mitigation, and Zed editor Wayland lifecycle diagnostics.
            </p>
          </div>

          {/* Stripe Pill Filters */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-medium transition-all flex items-center gap-2 active:scale-95 ${
                  selectedCategory === cat.value
                    ? 'bg-[#533afd] text-white shadow-sm font-semibold'
                    : 'bg-white dark:bg-[#0f172a] text-[#273951] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 hover:border-[#533afd]/40'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium tabular-nums ${
                    selectedCategory === cat.value
                      ? 'bg-white/20 text-white'
                      : 'bg-[#f6f9fc] dark:bg-[#1e293b] text-[#64748d] dark:text-[#94a3b8]'
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
              className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-all"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e3e8ee] dark:border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-semibold text-[#64748d] dark:text-[#94a3b8] bg-[#f6f9fc] dark:bg-[#1e293b] px-2.5 py-1 rounded-full border border-[#e3e8ee] dark:border-white/10 tabular-nums">
                    ENTRY 0{idx + 1}
                  </span>

                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#533afd] dark:text-[#00d4ff]">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      gitlab.com/{item.repoOwner}/{item.repo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#533afd] dark:text-[#00d4ff]">
                      <GithubIcon className="w-3.5 h-3.5" />
                      github.com/{item.repoOwner}/{item.repo}
                    </span>
                  )}

                  <span className="text-[#64748d]/40 dark:text-white/20">/</span>
                  <span className="font-medium text-[#0d253d] dark:text-[#f8fafc]">{item.refLabel}</span>
                  <span className="text-[#64748d]/40 dark:text-white/20">/</span>
                  <span className="text-[#64748d] dark:text-[#94a3b8] tabular-nums">{item.date}</span>
                </div>

                <div>{getStatusBadge(item.status)}</div>
              </div>

              {/* Title & Link */}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 font-display text-2xl sm:text-3xl font-medium text-[#0d253d] dark:text-[#f8fafc] hover:text-[#533afd] dark:hover:text-[#00d4ff] transition-colors leading-snug tracking-tight"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity translate-y-0.5 shrink-0" />
                </a>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] leading-relaxed">
                {item.summary}
              </p>

              {/* The Apprentice Role & AI Collaboration Box */}
              <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#1e293b]/60 p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff]">
                  <Sparkles className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff]" />
                  <span>Apprentice Role & Directed AI Collaboration</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#273951] dark:text-[#cbd5e1] leading-relaxed">
                  {item.myRoleNote}
                </p>
              </div>

              {/* Interactive Cesium Radar Canvas */}
              {item.hasInteractiveDemo && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-5 py-2.5 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-2 active:scale-95"
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
                    <div className="mt-4 rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-[#0a101d] p-3 shadow-lg">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Tag Index */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-[#f6f9fc] dark:bg-[#1e293b] text-[#64748d] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 font-medium tabular-nums"
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
