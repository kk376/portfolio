import React from 'react';
import { Sparkles, Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
      case 1:
        return <Database className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    }
  };

  const getIconContainer = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/30';
      case 1:
        return 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30';
      default:
        return 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30';
    }
  };

  const getBorderColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'hover:border-pink-500/50 hover:shadow-pink-500/10 dark:hover:border-pink-500/40';
      case 1:
        return 'hover:border-cyan-500/50 hover:shadow-cyan-500/10 dark:hover:border-cyan-500/40';
      default:
        return 'hover:border-purple-500/50 hover:shadow-purple-500/10 dark:hover:border-purple-500/40';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-white/[0.04] border border-pink-200 dark:border-white/[0.08] text-xs font-mono text-pink-600 dark:text-pink-400 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Toolbelt</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills & Learning Focus
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md font-mono">
            Active daily frontend mastery backed by structured foundations in Python, SQL, and modern developer environments.
          </p>
        </div>

        {/* 3 Skill Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className={`p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] ${getBorderColor(idx)} transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-xl flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Top hairline accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${group.accentColor}`} />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${getIconContainer(idx)} group-hover:scale-105 transition-transform`}>
                    {getIcon(idx)}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r ${group.accentColor} text-white font-semibold shadow-sm`}>
                    {group.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {group.title}
                </h3>

                {/* Skill Pills */}
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.04] transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-200/70 dark:bg-black/40 px-1.5 py-0.5 rounded border border-slate-300/60 dark:border-white/[0.04]">
                        {skill.tag}
                      </span>
                    </div>
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
