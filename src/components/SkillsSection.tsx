import React from 'react';
import { Code2, Database, Terminal, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSectionIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
                <span className="w-2 h-2 rounded-full bg-[#533afd] dark:bg-[#00d4ff]" />
                <span>TAXONOMY // SKILL DOMAINS</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-tight max-w-3xl">
              Curriculum in progress. Foundations in data and system tooling.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] max-w-md leading-relaxed">
            A structured breakdown of active frontend studies alongside proven foundations in Python, SQL data querying, and Fedora Linux workflow automation.
          </p>
        </div>

        {/* 3 Stripe Precision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#533afd]/10 dark:bg-[#533afd]/20">
                      {getSectionIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#64748d] dark:text-[#94a3b8] tabular-nums">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>
                  <span className="font-sans text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 text-[#533afd] dark:text-[#b9b9f9]">
                    {group.level}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-5 tracking-tight">
                  {group.title}
                </h3>

                {/* Tabular Skill Rows */}
                <div className="divide-y divide-[#e3e8ee] dark:divide-white/5 border-t border-b border-[#e3e8ee] dark:border-white/5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-2.5 flex items-center justify-between font-sans text-xs hover:bg-[#f6f9fc] dark:hover:bg-[#1e293b]/50 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff] shrink-0 stroke-[2.5]" />
                        <span className="font-medium text-[#0d253d] dark:text-[#f8fafc]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#f6f9fc] dark:bg-[#1e293b] text-[#64748d] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 font-medium shrink-0 ml-2 tabular-nums">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#e3e8ee] dark:border-white/5 flex items-center justify-between font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8] tabular-nums">
                <span>VERIFIED BY CODE</span>
                <span className="text-[#0d253d] dark:text-[#f8fafc] font-semibold">2026 ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
