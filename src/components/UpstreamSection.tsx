import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, ChevronDown, ChevronUp, Check, Sparkles, Code2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';
import { UPSTREAM_CONTRIBUTIONS } from '../data/portfolioData';
import type { ContributionCategory, UpstreamContribution } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';
import { SonarCanvas } from './SonarCanvas';

export const UpstreamSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContributionCategory>('all');
  const [showDemoForId, setShowDemoForId] = useState<string | null>(null);
  const [expandedDiagnosticId, setExpandedDiagnosticId] = useState<string | null>(null);

  const categories: { label: string; value: ContributionCategory; count: number }[] = [
    { label: 'All Dispatches', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'Merged Upstream', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
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
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold px-3 py-1 inline-flex items-center gap-1.5 shadow-xs">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 font-mono text-xs font-semibold px-3 py-1 inline-flex items-center gap-1.5 shadow-xs">
            <GitPullRequest className="w-3.5 h-3.5 stroke-[2.5]" />
            ACTIVE MERGE REQUEST
          </span>
        );
      case 'investigated':
        return (
          <span className="rounded-full bg-slate-100 dark:bg-[#1f2937] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold px-3 py-1 inline-flex items-center gap-1.5">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="upstream"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0f172a]/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HARDWARE BUG TRACES & PRS"
          heading="Upstream Dispatches."
          subHeading="Real hardware bug investigations, Cesium 3D shaders, and merged upstream pull requests."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all flex items-center gap-2 active:scale-95 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'anand-gradient-bg text-white shadow-md'
                  : 'bg-white dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold tabular-nums ${
                  selectedCategory === cat.value
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-[#1f2937] text-slate-500 dark:text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Contribution Cards */}
        <div className="space-y-8">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] space-y-6"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1f2937] px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 tabular-nums">
                    DISPATCH 0{idx + 1}
                  </span>

                  {item.platform === 'gitlab' ? (
                    <span className="inline-flex items-center gap-1.5 font-medium text-orange-600 dark:text-orange-400">
                      <GitlabIcon className="w-3.5 h-3.5" />
                      gitlab.com/{item.repoOwner}/{item.repo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-medium text-blue-600 dark:text-cyan-400">
                      <GithubIcon className="w-3.5 h-3.5" />
                      github.com/{item.repoOwner}/{item.repo}
                    </span>
                  )}

                  <span className="text-slate-300 dark:text-slate-700">/</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.refLabel}</span>
                  <span className="text-slate-300 dark:text-slate-700">/</span>
                  <span className="text-slate-500 dark:text-slate-400 tabular-nums">{item.date}</span>
                </div>

                <div>{getStatusBadge(item.status)}</div>
              </div>

              {/* Title and Direct Link */}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 font-poppins text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors leading-snug tracking-tight"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0 translate-y-0.5" />
                </a>
              </div>

              {/* Summary */}
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Apprentice Role & Collaboration Box */}
              <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 p-5 space-y-2">
                <div className="flex items-center gap-2 font-poppins text-xs font-bold text-blue-700 dark:text-cyan-300">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Apprentice Role & Directed AI Collaboration</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.myRoleNote}
                </p>
              </div>

              {/* Interactive Cesium Sonar Demo */}
              {item.hasInteractiveDemo && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                    className="px-6 py-2.5 rounded-full anand-gradient-bg text-white font-poppins text-xs font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>
                      {showDemoForId === item.id
                        ? 'Close Tactical Sonar Demo'
                        : 'Launch Live Cesium Tactical Sonar'}
                    </span>
                    {showDemoForId === item.id ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>

                  {showDemoForId === item.id && (
                    <div className="mt-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[#0b0f19] p-3 shadow-lg">
                      <SonarCanvas />
                    </div>
                  )}
                </div>
              )}

              {/* Diagnostic Trace & Diff Inspector */}
              {item.diagnostic && (
                <div className="pt-1">
                  <button
                    onClick={() => setExpandedDiagnosticId(expandedDiagnosticId === item.id ? null : item.id)}
                    className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#162032] hover:border-blue-500 dark:hover:border-cyan-400 text-slate-800 dark:text-slate-200 font-poppins text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                    <span>
                      {expandedDiagnosticId === item.id
                        ? 'Hide Root Cause & Diff'
                        : 'Inspect Diagnostic Trace & Diff'}
                    </span>
                    {expandedDiagnosticId === item.id ? (
                      <ChevronUp className="w-4 h-4 stroke-[2]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2]" />
                    )}
                  </button>

                  {expandedDiagnosticId === item.id && (
                    <div className="mt-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1524] p-5 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="font-mono text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                            HARDWARE SYMPTOM:
                          </div>
                          <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item.diagnostic.symptom}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <div className="font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                            ROOT CAUSE TRACED:
                          </div>
                          <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item.diagnostic.rootCause}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1 border-t border-slate-200 dark:border-slate-800 pt-3">
                        <div className="font-mono text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                          ARCHITECTURAL FIX:
                        </div>
                        <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {item.diagnostic.fix}
                        </p>
                      </div>

                      {item.diagnostic.diffSnippet && (
                        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-[#0b0f19] p-3 text-[11px] font-mono overflow-x-auto">
                          <div className="text-slate-400 pb-1.5 mb-1.5 border-b border-slate-800 text-[10px] flex items-center justify-between">
                            <span>{item.diagnostic.diffSnippet.file}</span>
                            <span className="text-slate-400 font-sans">Unified Diff</span>
                          </div>
                          {item.diagnostic.diffSnippet.removed?.map((line, lIdx) => (
                            <div key={`rem-${lIdx}`} className="text-rose-400 bg-rose-500/10 px-1 py-0.5 rounded select-all">
                              - {line}
                            </div>
                          ))}
                          {item.diagnostic.diffSnippet.added?.map((line, lIdx) => (
                            <div key={`add-${lIdx}`} className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded select-all">
                              + {line}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1f2937] text-slate-600 dark:text-slate-400 font-mono text-[11px] font-medium border border-slate-200 dark:border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionFooter
          phrase="Check out "
          link="my skills!"
          toAddress="#skills"
        />
      </div>
    </section>
  );
};
