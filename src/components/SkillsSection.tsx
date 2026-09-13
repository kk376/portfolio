import React from 'react';
import { Sparkles, Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-pink-400" />;
      case 1:
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  const getBorderColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'hover:border-pink-500/50 hover:shadow-pink-500/10';
      case 1:
        return 'hover:border-cyan-500/50 hover:shadow-cyan-500/10';
      default:
        return 'hover:border-purple-500/50 hover:shadow-purple-500/10';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-pink-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Toolbelt</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills & Learning Focus
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Active daily frontend mastery backed by structured foundations in Python, SQL, and modern developer environments.
          </p>
        </div>

        {/* 3 Skill Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className={`p-6 rounded-2xl bg-[#0b0d16] border border-white/[0.08] ${getBorderColor(idx)} transition-all duration-300 shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {getIcon(idx)}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r ${group.accentColor} text-white font-semibold shadow-sm`}>
                    {group.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {group.title}
                </h3>

                {/* Skill Pills */}
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-black/40 px-1.5 py-0.5 rounded border border-white/[0.04]">
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
