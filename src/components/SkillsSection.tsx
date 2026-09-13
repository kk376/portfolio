import React, { useState } from 'react';
import { Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<number | 'all'>('all');

  const domainIcons = [
    <Code2 key="0" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    <Database key="1" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    <Terminal key="2" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
  ];

  const filteredGroups = activeDomain === 'all'
    ? SKILL_GROUPS
    : [SKILL_GROUPS[activeDomain]];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECH STACK & PROGRESS"
          heading="My Skills."
          subHeading="Passionate about web fundamentals and systems, I keep building and exploring. Here is the tech stack I work with!"
        />

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveDomain('all')}
            className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
              activeDomain === 'all'
                ? 'anand-gradient-bg text-white shadow-md'
                : 'bg-slate-100 dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_GROUPS.map((group, idx) => (
            <button
              key={group.title}
              onClick={() => setActiveDomain(idx)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                activeDomain === idx
                  ? 'anand-gradient-bg text-white shadow-md'
                  : 'bg-slate-100 dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Skill Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredGroups.map((group, gIdx) => {
            const actualIndex = activeDomain === 'all' ? gIdx : activeDomain;
            return (
              <div
                key={group.title}
                className="anand-card p-6 sm:p-8 bg-white dark:bg-[#111827] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400">
                        {domainIcons[actualIndex]}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                        DOMAIN 0{actualIndex + 1}
                      </span>
                    </div>

                    <span className="font-poppins text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-900/50">
                      {group.level}
                    </span>
                  </div>

                  <h3 className="font-poppins text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {group.title}
                  </h3>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-[#162032] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-300 dark:hover:border-cyan-800 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="font-montserrat text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-[#0b0f19] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Verified By Code</span>
                  <span className="font-semibold text-blue-600 dark:text-cyan-400">2026 Archive</span>
                </div>
              </div>
            );
          })}
        </div>

        <SectionFooter
          phrase="Learn about "
          link="how I work with AI."
          toAddress="#philosophy"
        />
      </div>
    </section>
  );
};
