import React from 'react';
import { Code2, Database, Terminal, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSectionIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#ea2804]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#ff6a3d]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#2b9a66]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#ea2804] dark:text-[#ff6a3d]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea2804]" />
                <span>TAXONOMY // SKILL DOMAINS</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-tight max-w-3xl">
              Curriculum in progress. Foundations in data and system tooling.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#575757] dark:text-[#a0a0a0] max-w-md leading-relaxed">
            A structured breakdown of active frontend studies alongside proven foundations in Python, SQL data querying, and Fedora Linux workflow automation.
          </p>
        </div>

        {/* 3 Replicate Lab Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 sm:p-7 shadow-sm hover:border-[#ea2804]/40 dark:hover:border-[#ff6a3d]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#f3f0e8] dark:bg-[#28282c]">
                      {getSectionIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#202020] dark:text-[#fcfcfc]">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f3f0e8] dark:bg-[#28282c] text-[#ea2804] dark:text-[#ff6a3d]">
                    {group.level}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-5">
                  {group.title}
                </h3>

                {/* Tabular Skill Rows */}
                <div className="divide-y divide-[rgba(32,32,32,0.06)] dark:divide-white/5 border-t border-b border-[rgba(32,32,32,0.06)] dark:border-white/5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex items-center justify-between font-sans text-xs hover:bg-[#f9f7f3] dark:hover:bg-[#242428] px-1.5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#2b9a66] shrink-0" />
                        <span className="font-medium text-[#202020] dark:text-[#fcfcfc]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#f3f0e8] dark:bg-[#28282c] text-neutral-600 dark:text-neutral-400 font-medium shrink-0 ml-2">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                <span>VERIFIED BY CODE</span>
                <span className="text-[#202020] dark:text-[#fcfcfc] font-medium">2026 ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
