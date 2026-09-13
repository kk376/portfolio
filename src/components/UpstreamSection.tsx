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
    { label: 'ALL DISPATCHES', value: 'all', count: UPSTREAM_CONTRIBUTIONS.length },
    { label: 'MERGED UPSTREAM', value: 'merged', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.status === 'merged').length },
    { label: 'SYSTEMS & KERNEL', value: 'systems', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'systems').length },
    { label: 'PACKAGING', value: 'packaging', count: UPSTREAM_CONTRIBUTIONS.filter((c) => c.category === 'packaging').length },
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.14em] bg-[#3cffd0] text-black">
            <CheckCircle2 className="w-3 h-3" />
            MERGED UPSTREAM
          </span>
        );
      case 'open':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.14em] bg-[#fffa00] text-black">
            <GitPullRequest className="w-3 h-3" />
            ACTIVE MR
          </span>
        );
      case 'investigated':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.14em] bg-[#5200ff] text-white">
            ROOT CAUSE TRACED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="upstream" className="py-20 bg-[#131313] border-b border-[#ffffff]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d2d2d] border border-[#3cffd0]/40 text-xs font-mono text-[#3cffd0] mb-3 font-bold uppercase tracking-[0.18em]">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>THE STORYSTREAM FEED // REAL CODE TRANSFERS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
              OPEN SOURCE TRANSMISSIONS
            </h2>
            <p className="font-sans text-base text-[#949494] mt-2 max-w-2xl font-normal">
              Directing AI step by step to solve real Linux hardware friction, author GLSL graphics shaders,
              and submit appreciated upstream contributions across GitHub and GitLab.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#2d2d2d] border border-[#ffffff]/15 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.16em] font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? 'bg-[#3cffd0] text-black shadow-sm'
                    : 'text-[#949494] hover:text-[#3860be]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20 text-current">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The Verge StoryStream Timeline Feed */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-2 sm:before:left-3 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#5200ff]">
          {filtered.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-6 w-4 h-4 rounded-full bg-[#131313] border-2 border-[#3cffd0] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3cffd0]" />
              </div>

              {/* Timestamp rail label */}
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3cffd0] font-bold mb-2.5 flex items-center gap-2">
                <span>{item.date}</span>
                <span className="text-[#949494]">/</span>
                <span className="text-white">{item.refLabel}</span>
              </div>

              {/* The Verge Story Tile */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-[#2d2d2d] border border-[#ffffff]/20 hover:border-[#3cffd0] transition-colors group">
                {/* Platform & Repo Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#949494]">
                    {item.platform === 'gitlab' ? (
                      <span className="inline-flex items-center gap-1 text-[#ff5500] font-bold">
                        <GitlabIcon className="w-3.5 h-3.5" />
                        GITLAB
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-white font-bold">
                        <GithubIcon className="w-3.5 h-3.5" />
                        GITHUB
                      </span>
                    )}

                    <span className="text-[#ffffff]/20">/</span>
                    <span className="text-[#e9e9e9]">{item.repoOwner}</span>
                    <span className="text-[#ffffff]/20">/</span>
                    <span className="text-white font-bold">{item.repo}</span>
                  </div>

                  <div>{getStatusBadge(item.status)}</div>
                </div>

                {/* Story Headline */}
                <div className="mb-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-2 font-sans text-xl sm:text-2xl font-bold text-white group-hover:text-[#3860be] transition-colors leading-snug"
                  >
                    <span>{item.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity translate-y-0.5 shrink-0" />
                  </a>
                </div>

                {/* Summary Deck */}
                <p className="font-sans text-sm sm:text-base text-[#e9e9e9] leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* The Apprentice Role & AI Collaboration Dispatch Box */}
                <div className="p-4 rounded-[16px] bg-[#131313] border border-[#ffffff]/15 mb-6 space-y-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3cffd0] uppercase tracking-[0.15em]">
                    <Sparkles className="w-3.5 h-3.5 text-[#fffa00]" />
                    <span>My Role & AI Collaboration:</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#e9e9e9] leading-relaxed font-normal">
                    {item.myRoleNote}
                  </p>
                </div>

                {/* Interactive Shader Preview Button */}
                {item.hasInteractiveDemo && (
                  <div className="mb-6">
                    <button
                      onClick={() => setShowDemoForId(showDemoForId === item.id ? null : item.id)}
                      className="px-5 py-2.5 rounded-full bg-[#131313] border border-[#3cffd0] text-[#3cffd0] hover:bg-[#3cffd0] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all flex items-center gap-2"
                    >
                      <span>
                        {showDemoForId === item.id
                          ? 'CLOSE LIVE TACTICAL SONAR'
                          : 'LAUNCH CESIUM SONAR SHADER DEMO'}
                      </span>
                      {showDemoForId === item.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {showDemoForId === item.id && (
                      <div className="mt-4 p-2 rounded-[20px] bg-[#131313] border border-[#3cffd0]/40">
                        <SonarCanvas />
                      </div>
                    )}
                  </div>
                )}

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ffffff]/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-[0.14em] text-[#949494] bg-[#131313] border border-[#ffffff]/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
