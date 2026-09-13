import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Code2, Palette, FileCode, Wind, FileType, Atom } from 'lucide-react';

interface TechSkill {
  name: string;
  tag: string;
  category: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
}

const techSkills: TechSkill[] = [
  {
    name: 'HTML5',
    tag: 'Core Markup',
    category: 'Semantic Elements',
    description: 'Accessible semantic structures, form validation, and ARIA standards.',
    accent: '#fab387',
    icon: <Code2 className="w-5 h-5 text-[#fab387]" />,
  },
  {
    name: 'CSS3',
    tag: 'Modern Layouts',
    category: 'Grid & Flexbox',
    description: 'Responsive CSS Grid, flex containers, fluid typography, and custom properties.',
    accent: '#89dceb',
    icon: <Palette className="w-5 h-5 text-[#89dceb]" />,
  },
  {
    name: 'JavaScript',
    tag: 'ES6+ Logic',
    category: 'Web APIs & DOM',
    description: 'Asynchronous event handling, closures, promises, and dynamic DOM rendering.',
    accent: '#f9e2af',
    icon: <FileCode className="w-5 h-5 text-[#f9e2af]" />,
  },
  {
    name: 'Tailwind CSS',
    tag: 'Design System',
    category: 'Utility Engine',
    description: 'Component token composition, responsive utility prefixes, and dark mode.',
    accent: '#89b4fa',
    icon: <Wind className="w-5 h-5 text-[#89b4fa]" />,
  },
  {
    name: 'TypeScript',
    tag: 'Type Safety',
    category: 'Strict Contracts',
    description: 'Compile-time type contracts, interface modeling, and strict error catching.',
    accent: '#b4befe',
    icon: <FileType className="w-5 h-5 text-[#b4befe]" />,
  },
  {
    name: 'React',
    tag: 'Components',
    category: 'State & Lifecycle',
    description: 'Component-driven user interfaces, declarative hooks, and fast rendering.',
    accent: '#cba6f7',
    icon: <Atom className="w-5 h-5 text-[#cba6f7]" />,
  },
];

export const SkillsSection: React.FC = () => {
  // Duplicate array to enable continuous seamless horizontal loop
  const marqueeCards = [...techSkills, ...techSkills];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <SectionHeader
        title="Technical Toolkit"
        subtitle="Core frontend technologies and layout standards moving in continuous flow"
      />

      {/* Marquee Wrapper with Gradient Edges */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--bg-canvas)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--bg-canvas)] to-transparent z-10" />

        {/* Continuous Animated Track */}
        <div className="skills-marquee-track gap-5 flex items-center">
          {marqueeCards.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="w-72 sm:w-80 shrink-0 p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#252538] shadow-sm hover:shadow-md hover:border-[var(--accent-primary)]/60 transition-all duration-300 group select-none flex flex-col justify-between"
              style={{
                borderBottom: `3px solid ${skill.accent}`,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#181825] border border-slate-200/60 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181825] text-slate-600 dark:text-slate-300">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-[var(--accent-primary)] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-3">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {skill.tag}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
