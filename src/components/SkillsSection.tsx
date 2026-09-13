import React from 'react';
import { Code2, Database, Terminal, Sparkles } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getGroupBadge = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-verge-mint text-black font-mono font-bold';
      case 1:
        return 'bg-verge-yellow text-black font-mono font-bold';
      default:
        return 'bg-verge-violet text-white font-mono font-bold';
    }
  };

  const getGroupBorder = (idx: number) => {
    switch (idx) {
      case 0:
        return 'hover:border-verge-mint';
      case 1:
        return 'hover:border-verge-yellow';
      default:
        return 'hover:border-verge-violet';
    }
  };

  const getGroupIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-verge-mint" />;
      case 1:
        return <Database className="w-5 h-5 text-verge-yellow" />;
      default:
        return <Terminal className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/20 relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.2em] font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taxonomy // Technical Toolbelt</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              Learning Frontend. Practicing Linux & Data.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#949494] max-w-md leading-relaxed">
            Active daily focus on modern UI engineering, supported by proven foundations in relational data and daily Fedora workstation tooling.
          </p>
        </div>

        {/* 3 Editorial Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className={`p-6 sm:p-8 bg-[#2d2d2d] border border-white/10 ${getGroupBorder(
                idx
              )} transition-colors flex flex-col justify-between relative group`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-black/40 border border-white/10">
                    {getGroupIcon(idx)}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.14em] px-3 py-1 ${getGroupBadge(
                      idx
                    )}`}
                  >
                    {group.level}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-6 group-hover:text-verge-blue transition-colors">
                  {group.title}
                </h3>

                {/* Skill List */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-[#1e1e1e] border border-white/5 hover:border-white/20 transition-colors"
                    >
                      <span className="font-sans text-xs font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-verge-mint bg-black/50 px-2 py-0.5 border border-white/10">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#949494] uppercase tracking-wider">
                <span>Domain 0{idx + 1}</span>
                <span className="text-verge-mint group-hover:text-white transition-colors">Verified In Code</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
