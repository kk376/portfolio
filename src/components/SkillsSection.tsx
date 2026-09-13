import React from 'react';
import { Code2, Database, Terminal, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSectionColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-[#FF4F00] text-white';
      case 1:
        return 'bg-[#1D4ED8] text-white';
      default:
        return 'bg-black text-white dark:bg-white dark:text-black';
    }
  };

  const getSectionIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#FF4F00]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#1D4ED8]" />;
      default:
        return <Terminal className="w-4 h-4 text-black dark:text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
                PLATE II // TECHNICAL TAXONOMY
              </span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                FIG. 2.0
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-black dark:text-white tracking-tight leading-tight max-w-3xl">
              Curriculum in progress. Foundations in data and system tooling.
            </h2>
          </div>
          <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            A structured breakdown of active frontend studies alongside proven foundations in Python, SQL data querying, and Fedora Linux workflow automation.
          </p>
        </div>

        {/* 3 Architectural Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800">
                      {getSectionIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 font-bold border-2 border-black dark:border-white ${getSectionColor(
                      idx
                    )}`}
                  >
                    {group.level}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-black dark:text-white mb-6">
                  {group.title}
                </h3>

                {/* Tabular Skill Rows */}
                <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex items-center justify-between font-sans text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800/40 px-1 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                        <span className="font-medium text-black dark:text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-black/20 dark:border-white/20 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold shrink-0 ml-2">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t-2 border-black dark:border-white flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                <span>VERIFIED BY CODE</span>
                <span className="text-black dark:text-white font-bold">2026 ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
