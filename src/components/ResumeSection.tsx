import React from 'react';
import { SectionHeader } from './SectionHeader';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  highlights?: string[];
}

const educationData: TimelineItem[] = [
  {
    period: 'Aug 2018 - Aug 2021 (Degree Conferred March 2022)',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Suresh Gyan Vihar University, Jaipur',
    description:
      'Completed three-year graduation with 8.21 CGPA (Distinction classification). Rigorous curriculum covering Relational Database Management Systems (MySQL), Data Structures, and Software Engineering principles.',
    highlights: [
      '8.21 CGPA Distinction classification',
      'Relational database schema design and SQL query formulation',
      'Solid programming foundations in data structures and applications',
    ],
  },
  {
    period: '2016 - May 2018',
    title: 'Senior Secondary Education (Class XII)',
    institution: 'CBSE Curriculum (Result: 23 May 2018)',
    description:
      'Completed foundational coursework in Physics, Chemistry, Mathematics, and Computer Science.',
  },
];

const experienceData: TimelineItem[] = [
  {
    period: 'July 2026 - Present',
    title: 'Frontend Learner & Open Source Contributor',
    institution: 'Upstream Open Source & Modern Web Development',
    description:
      'Initiated dedicated open source contribution journey on 30 July 2026. Actively mastering modern frontend engineering across semantic HTML, CSS layout systems, modern JavaScript, and React component architectures.',
    highlights: [
      'Cesium.js PR #214 merged: Resolved multi-pass GLSL tactical sonar shader defect',
      'Mission Center & Zed: Traced PCIe D3cold GPU thrash and Wayland window lifecycles',
      'Advanced completion of modern responsive CSS layout and design systems',
    ],
  },
  {
    period: 'Nov 2024 - Mid 2026',
    title: 'Linux Systems & Workstation Engineering',
    institution: 'Development Environment & Shell Automation (MSI Thin A15)',
    description:
      'Configured dedicated Linux development workstation (Fedora 44, AMD Ryzen 5, NVIDIA RTX 2050 Mobile). Engineered modular shell provisioning suites and authored system telemetry tools while solidifying the foundation for full-time software engineering.',
    highlights: [
      'Engineered 1,600+ lines of modular Bash workstation provisioning',
      'Authored high-performance Rust kernel telemetry fetcher (kkfetch, 5.6x faster than Fastfetch)',
    ],
  },
  {
    period: 'Aug 2022 - Mid 2024',
    title: 'Competitive Examination Track & Analytical Aptitude',
    institution: 'Public Sector Curriculum & Quantitative Foundations',
    description:
      'Undertook rigorous self-directed preparation for national competitive examinations, developing deep discipline in logical deduction, quantitative analysis, and systematic problem solving before deliberately pivoting back to computer science and software development.',
    highlights: [
      'Advanced analytical problem-solving and quantitative reasoning',
      'Conscious, committed decision to return to software engineering and open source',
    ],
  },
];

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="Experience & Education"
        subtitle="Academic grounding and hands-on systems and frontend milestones"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <div className="greg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#6C6CE5]/10 dark:bg-[#6C6CE5]/20 flex items-center justify-center text-[#6C6CE5]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="relative pl-6 border-l-2 border-[#6C6CE5]/30 space-y-8">
            {educationData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Coral Dot */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#6C6CE5] border-2 border-white dark:border-[#252536] shadow-sm group-hover:scale-125 transition-transform" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold mb-2">
                  <Calendar className="w-3 h-3 text-[#6C6CE5]" />
                  <span>{item.period}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                  {item.title}
                </h4>

                <p className="text-xs font-semibold text-[#6C6CE5] mb-2">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Upstream Timeline */}
        <div className="greg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#FF4C60]/10 dark:bg-[#FF4C60]/20 flex items-center justify-center text-[#FF4C60]">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Experience & Upstream
            </h3>
          </div>

          <div className="relative pl-6 border-l-2 border-[#FF4C60]/30 space-y-8">
            {experienceData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Coral Dot */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FF4C60] border-2 border-white dark:border-[#252536] shadow-sm group-hover:scale-125 transition-transform" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold mb-2">
                  <Calendar className="w-3 h-3 text-[#FF4C60]" />
                  <span>{item.period}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                  {item.title}
                </h4>

                <p className="text-xs font-semibold text-[#FF4C60] mb-2">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
