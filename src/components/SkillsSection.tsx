import React from 'react';
import { Code2, Database, Terminal, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSectionIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#0e0f0c] dark:text-[#9fe870]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#0e0f0c] dark:text-[#9fe870]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#0e0f0c] dark:text-[#9fe870]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-black/5 dark:border-white/10 bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] border border-black/5 dark:border-white/10 text-xs font-mono font-bold text-[#163300] dark:text-[#9fe870]">
                <span className="w-2 h-2 rounded-full bg-[#9fe870]" />
                <span>TAXONOMY // SKILL DOMAINS</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0e0f0c] dark:text-[#f4f6f2] tracking-tight leading-tight max-w-3xl">
              Curriculum in progress. Foundations in data and system tooling.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#454745] dark:text-[#b5b8b2] max-w-md leading-relaxed">
            A structured breakdown of active frontend studies alongside proven foundations in Python, SQL data querying, and Fedora Linux workflow automation.
          </p>
        </div>

        {/* 3 Wise Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] p-7 shadow-sm hover:border-[#9fe870] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-2xl bg-[#e8ebe6] dark:bg-[#22251e]">
                      {getSectionIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] text-[#163300] dark:text-[#9fe870]">
                    {group.level}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0e0f0c] dark:text-[#f4f6f2] mb-5">
                  {group.title}
                </h3>

                {/* Tabular Skill Rows */}
                <div className="divide-y divide-black/5 dark:divide-white/5 border-t border-b border-black/5 dark:border-white/5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex items-center justify-between font-sans text-xs hover:bg-[#e8ebe6]/50 dark:hover:bg-[#22251e]/60 px-2 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#2ead4b] shrink-0 stroke-[2.5]" />
                        <span className="font-medium text-[#0e0f0c] dark:text-[#f4f6f2]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#e8ebe6] dark:bg-[#22251e] text-[#454745] dark:text-[#b5b8b2] font-semibold shrink-0 ml-2">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono text-[11px] text-[#868685]">
                <span>VERIFIED BY CODE</span>
                <span className="text-[#0e0f0c] dark:text-[#f4f6f2] font-bold">2026 ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
