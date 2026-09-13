import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Sparkles, Terminal, Award, FileCode } from 'lucide-react';
import avatarImg from '../assets/github_avatar.jpg';

interface SkillBar {
  name: string;
  percentage: number;
  color: string;
}

const skills: SkillBar[] = [
  { name: 'Semantic HTML & Modern CSS', percentage: 90, color: 'var(--accent-peach)' },
  { name: 'JavaScript & React Architecture', percentage: 85, color: 'var(--accent-primary)' },
  { name: 'Linux Systems & Shell Automation', percentage: 88, color: 'var(--accent-secondary)' },
  { name: 'Upstream PRs & WebGL Shaders', percentage: 80, color: 'var(--accent-cyan)' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader title="About Me" subtitle="Frontend learner grounded in web fundamentals, open source, and Linux systems" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Avatar Profile Card */}
        <div className="md:col-span-4 flex flex-col items-center">
          <div className="w-full max-w-[260px] greg-card p-5 flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white dark:border-[#252538]">
              <img
                src={avatarImg}
                alt="Kushagra Kumar profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-0.5">
              Kushagra Kumar
            </h3>
            <p className="text-xs font-semibold text-[var(--accent-primary)] mb-3">
              Frontend Developer
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-200 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fedora 44 Workstation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio speech container + Skill bars */}
        <div className="md:col-span-8">
          <div className="greg-card p-6 sm:p-8">
            <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
              Hello! I am Kushagra, based in Jaipur, India. I completed my Bachelor of Computer Applications (BCA) with 8.21 CGPA Distinction from Suresh Gyan Vihar University in 2022.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              I am actively mastering web development across HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside modern frontend interfaces, I investigate Linux system bottlenecks, tune hardware power states, and ship upstream bugfixes to projects such as Cesium, Mission Center, and Zed.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#upstream" className="btn-coral text-sm py-2.5 px-6">
                <Sparkles className="w-4 h-4" />
                <span>Upstream Work</span>
              </a>
              <a href="#contact" className="btn-secondary text-sm py-2.5 px-6">
                <span>Direct Dispatch</span>
              </a>
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                    <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                    <span style={{ color: skill.color }}>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-[#181825] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Clean Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="greg-card p-6 text-center flex flex-col items-center justify-center">
          <FileCode className="w-8 h-8 text-[var(--accent-primary)] mb-2" />
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            1,600+
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
            Lines Shell Automation
          </span>
        </div>

        <div className="greg-card p-6 text-center flex flex-col items-center justify-center">
          <Terminal className="w-8 h-8 text-[var(--accent-secondary)] mb-2" />
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            3
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
            Upstream PRs Merged
          </span>
        </div>

        <div className="greg-card p-6 text-center flex flex-col items-center justify-center">
          <Award className="w-8 h-8 text-[var(--accent-peach)] mb-2" />
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            8.21
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
            CGPA Distinction (BCA)
          </span>
        </div>
      </div>
    </section>
  );
};
