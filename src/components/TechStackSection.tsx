import React from 'react';
import { Code2, Database, Terminal, Wrench } from 'lucide-react';
import { AndrewSectionHeader } from './AndrewSectionHeader';

interface TechItem {
  name: string;
  category: string;
}

interface TechCategory {
  title: string;
  description: string;
  technologies: TechItem[];
  icon: React.ReactNode;
}

export const TechStackSection: React.FC = () => {
  const coreStack = [
    { name: 'HTML5', detail: 'Semantic Markup' },
    { name: 'CSS3', detail: 'Modern Flex & Grid' },
    { name: 'JavaScript', detail: 'ES6+ & DOM APIs' },
    { name: 'React', detail: 'Components & State' },
    { name: 'Tailwind CSS', detail: 'Design Systems' },
    { name: 'Rust', detail: 'Procfs & Telemetry' },
    { name: 'Python', detail: 'CLI & Data Logic' },
    { name: 'Fedora Linux', detail: 'Wayland Workstation' },
  ];

  const techCategories: TechCategory[] = [
    {
      title: 'Frontend Engineering',
      description: 'Active daily immersion building accessible, responsive, component-driven user interfaces.',
      icon: <Code2 className="w-5 h-5 text-[#7148fc]" />,
      technologies: [
        { name: 'React Component Architecture', category: 'Framework' },
        { name: 'Tailwind CSS Design Tokens', category: 'Styling' },
        { name: 'Semantic HTML & Web Accessibility', category: 'Markup' },
        { name: 'Responsive Layout Geometry', category: 'CSS' },
        { name: 'Modern JavaScript & DOM Lifecycles', category: 'Logic' },
      ],
    },
    {
      title: 'Systems & Workstation Automation',
      description: 'Hands-on Linux kernel investigation, workstation setup scripting, and hardware performance tuning.',
      icon: <Terminal className="w-5 h-5 text-[#0e8aa8]" />,
      technologies: [
        { name: 'Fedora 44 Workstation & Wayland', category: 'OS' },
        { name: 'Bash Provisioning & Hardening', category: 'Shell' },
        { name: 'Rust Kernel Procfs Parsing', category: 'Systems' },
        { name: 'PCIe D3cold Power State Analysis', category: 'Hardware' },
        { name: 'Linux ioctl & Sysfs Navigation', category: 'Kernel' },
      ],
    },
    {
      title: 'Data & Core Backend Foundations',
      description: 'Proven university curriculum grounding in relational database queries and clean application logic.',
      icon: <Database className="w-5 h-5 text-[#0c9b56]" />,
      technologies: [
        { name: 'Python Core & pathlib Modules', category: 'Language' },
        { name: 'MySQL Relational Queries & Joins', category: 'Database' },
        { name: 'Grouping, Aggregations & Subqueries', category: 'SQL' },
        { name: 'CRUD Architecture & File Handling', category: 'Storage' },
        { name: 'Structured Exception Handling', category: 'Design' },
      ],
    },
    {
      title: 'Upstream & Engineering Toolchain',
      description: 'Modern development tools and graphics engines used in daily programming and upstream PRs.',
      icon: <Wrench className="w-5 h-5 text-[#ef2f4c]" />,
      technologies: [
        { name: 'Cesium.js & WebGL GLSL Shaders', category: 'Graphics' },
        { name: 'Git & GitHub Daily Commits', category: 'VCS' },
        { name: 'Zed Editor & VS Code', category: 'Editor' },
        { name: 'Ghostty & Alacritty Terminals', category: 'Terminal' },
        { name: 'Multi-Distro Packaging (WinGet, Void)', category: 'Distribution' },
      ],
    },
  ];

  const alsoWorkWith = [
    'Vite 8',
    'Oxlint',
    'TypeScript',
    'WebGL GLSL',
    'Linux Sysfs',
    'RPM Fusion',
    'Flatpak',
    'pnpm',
    'npm',
    'Markdown',
  ];

  return (
    <section id="skills" className="py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AndrewSectionHeader
          id="skills"
          title="Tech Stack"
          lede="Technologies I use to build, ship, and maintain modern web applications and system utilities."
        />

        {/* Andrew Baisden Core Stack Section */}
        <div className="mb-14">
          <h3 className="font-quicksand text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
            Core Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {coreStack.map((tech) => (
              <div
                key={tech.name}
                className="andrew-card p-4 bg-white dark:bg-[#202230] border border-slate-200 dark:border-[#2d3042] flex items-center gap-3 hover:border-[#7148fc] transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-[#7148fc] dark:bg-[#09d8ff] shrink-0" />
                <div>
                  <div className="font-quicksand font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {tech.name}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {tech.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Andrew Baisden Tech Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="andrew-card p-6 sm:p-7 bg-white dark:bg-[#202230] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40">
                    {category.icon}
                  </div>
                  <h3 className="font-quicksand text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="font-quicksand text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mb-5 leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-2.5">
                  {category.technologies.map((item) => (
                    <li
                      key={item.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#15161e] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs"
                    >
                      <span className="font-quicksand font-bold text-slate-800 dark:text-slate-200">
                        {item.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#7148fc] dark:text-[#09d8ff] font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/50">
                        {item.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Andrew Baisden Also Work With Section */}
        <div className="andrew-card p-6 sm:p-7 bg-white dark:bg-[#202230] border border-slate-200 dark:border-[#2d3042]">
          <h3 className="font-quicksand text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Also work with
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {alsoWorkWith.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#15161e] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-quicksand font-bold text-xs hover:border-[#7148fc] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
