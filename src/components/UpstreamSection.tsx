import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, MessageSquare, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { UPSTREAM_CONTRIBUTIONS } from '../data/portfolioData';
import type { ContributionCategory, UpstreamContribution } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';
import { SonarCanvas } from './SonarCanvas';

export const UpstreamSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContributionCategory>('all');
  const [showDemoForId, setShowDemoForId] = useState<string | null>(null);

  const categories: { label: string; value: ContributionCategory; count: number }[] = [
    { label: 'All', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'Merged', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
    { label: 'Systems & Kernel', value: 'systems', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'systems').length },
    { label: 'Discussions & RFCs', value: 'discussions', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'discussions').length },
    { label: 'Packaging', value: 'packaging', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'packaging').length },
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
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Merged
          </span>
        );
      case 'open':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <GitPullRequest className="w-3 h-3" />
            Active MR/PR
          </span>
        );
      case 'investigated':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Investigated & Traced
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <MessageSquare className="w-3 h-3" />
            Community RFC
          </span>
        );
    }
  };

  return (
    <section id="upstream" className="py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              Contributions Over The Past Weeks
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Upstream Open Source & Systems Work
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.value ? 'bg-black/10 text-black' : 'bg-white/[0.06] text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contributions Grid */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
                  {/* Platform icon */}
                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1 text-orange-400 font-medium">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      GitLab
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-300 font-medium">
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </span>
                  )}

                  <span className="text-slate-600">/</span>
                  <span className="text-slate-300 font-semibold">{item.repoOwner}</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-300 font-semibold">{item.repo}</span>
                  <span className="text-slate-500">({item.refLabel})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">{item.date}</span>
                  {getStatusBadge(item.status)}
                </div>
              </div>

              {/* Title & Link */}
              <div className="mb-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-1.5 text-lg sm:text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity translate-y-0.5" />
                </a>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                {item.summary}
              </p>

              {/* Technical Details block */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-slate-400 font-mono leading-relaxed mb-4">
                <span className="text-slate-300 font-semibold">Technical Detail: </span>
                {item.technicalDetails}
              </div>

              {/* Interactive Demo Toggle for PR #214 */}
              {item.hasInteractiveDemo && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/25 text-xs font-mono transition-colors flex items-center gap-2"
                  >
                    <span>{showDemoForId === item.id ? 'Hide Shader Simulation' : 'Launch Interactive Sonar Shader Demo'}</span>
                    {showDemoForId === item.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-3">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Tags & Subtle Note */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.isVibePrototyped && (
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    AI Prototype • Rigorously Hardened
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
