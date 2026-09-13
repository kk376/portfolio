import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Code2, Terminal, Cpu } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  bgLight: string;
  bgDark: string;
  skills: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Frontend Engineering',
    description:
      'Crafting clean, accessible, component-driven user interfaces with modern React, semantic HTML5 markup, and responsive Tailwind CSS layout models.',
    icon: <Code2 className="w-9 h-9 text-[var(--accent-secondary)]" />,
    accentColor: 'var(--accent-secondary)',
    bgLight: 'bg-[var(--accent-secondary)]/10',
    bgDark: 'dark:bg-[var(--accent-secondary)]/15',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Accessible DOM'],
  },
  {
    id: 2,
    title: 'Linux Systems Automation',
    description:
      'Hardening Fedora 44 workstations with 1,600+ lines of modular bash provisioning, systemd services, kernel procfs parsing, and D3cold power tuning.',
    icon: <Terminal className="w-9 h-9 text-[var(--accent-peach)]" />,
    accentColor: 'var(--accent-peach)',
    bgLight: 'bg-[var(--accent-peach)]/10',
    bgDark: 'dark:bg-[var(--accent-peach)]/15',
    skills: ['Bash Scripting', 'Procfs CLI', 'PCIe Power Tuning'],
  },
  {
    id: 3,
    title: 'Open Source & Graphics Engineering',
    description:
      'Diagnosing complex graphics and window lifecycle defects, resolving GLSL shader issues in Cesium.js, and collaborating with upstream maintainers.',
    icon: <Cpu className="w-9 h-9 text-[var(--accent-primary)]" />,
    accentColor: 'var(--accent-primary)',
    bgLight: 'bg-[var(--accent-primary)]/10',
    bgDark: 'dark:bg-[var(--accent-primary)]/15',
    skills: ['Cesium.js', 'WebGL GLSL', 'Wayland Protocols', 'Multi-distro Packaging'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="What I Do"
        subtitle="Core engineering disciplines I practice across web interfaces and Linux systems"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="portfolio-card p-7 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            style={{
              borderBottom: `4px solid ${service.accentColor}`,
            }}
          >
            {/* Icon Bubble */}
            <div
              className={`w-18 h-18 p-4 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.bgLight} ${service.bgDark}`}
            >
              {service.icon}
            </div>

            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">
              {service.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4 border-t border-slate-100 dark:border-white/5 w-full">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-[#181825] text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
