import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, ChevronDown, ChevronUp, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { UPSTREAM_CONTRIBUTIONS } from '../data/portfolioData';
import type { ContributionCategory, UpstreamContribution } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';
import { SonarCanvas } from './SonarCanvas';

export const UpstreamSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContributionCategory>('all');
  const [showDemoForId, setShowDemoForId] = useState<string | null>(null);

  const categories: { label: string; value: ContributionCategory; count: number }[] = [
    { label: 'All Work', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'Merged', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
    { label: 'Systems & Kernel', value: 'systems', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'systems').length },
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
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30 shadow-sm">
            <CheckCircle2 className="w-3 h-3" />
            Merged Upstream
          </span>
        );
      case 'open':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-400 dark:border-cyan-500/30 shadow-sm">
            <GitPullRequest className="w-3 h-3" />
            Active MR
          </span>
        );
      case 'investigated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/15 dark:text-purple-400 dark:border-purple-500/30 shadow-sm">
            Root Cause Traced
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-white/[0.04] border border-cyan-200 dark:border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-3 font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Real Community Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Open Source Contributions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl font-normal">
              Real PRs, MRs, and bug diagnoses across Cesium, Mission Center, and Zed, guided by me and built with AI assistance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-black/30">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contributions Grid */}
        <div className="space-y-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.2] transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group"
            >
              {/* Vibrant accent gradient bar on top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accentGradient}`} />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1 text-orange-500 dark:text-orange-400 font-semibold">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      GitLab
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </span>
                  )}

                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <span className="text-slate-700 dark:text-slate-300">{item.repoOwner}</span>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{item.repo}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">({item.refLabel})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">{item.date}</span>
                  {getStatusBadge(item.status)}
                </div>
              </div>

              {/* Title */}
              <div className="mb-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1.5 text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity translate-y-0.5" />
                </a>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* How Kushagra Guided It */}
              <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-gradient-to-r dark:from-purple-500/10 dark:via-cyan-500/10 dark:to-transparent border border-purple-200 dark:border-purple-500/20 text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed mb-4">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                  <span>My Role & AI Collaboration:</span>
                </div>
                {item.myRoleNote}
              </div>

              {/* Interactive Shader Preview Toggle */}
              {item.hasInteractiveDemo && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-4 py-2 rounded-xl bg-cyan-50 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-blue-500/20 hover:bg-cyan-100 dark:hover:from-cyan-500/30 dark:hover:to-blue-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 text-xs font-mono transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>{showDemoForId === item.id ? 'Hide Tactical Sonar Demo' : 'Launch Interactive Cesium Sonar Demo'}</span>
                    {showDemoForId === item.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-3">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]"
                  >
                    {tag}
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
