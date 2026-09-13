import React, { useState } from 'react';
import { ExternalLink, Mail, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { AndrewSectionHeader } from './AndrewSectionHeader';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DeveloperNetwork: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const networkProfiles = [
    {
      id: 'github',
      name: 'GitHub',
      handle: `@${PERSONAL_INFO.handle}`,
      href: PERSONAL_INFO.github,
      accent: '#7148fc',
      description:
        'Daily open source code, Bash workstation provisioning suites, microsecond Rust fetch utilities, and upstream PR discussions.',
      badge: 'Code & Repositories',
      icon: <GithubIcon className="w-5 h-5 text-white" />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'kushagra-kumar376',
      href: PERSONAL_INFO.linkedin,
      accent: '#0077b5',
      description:
        'Connect for junior frontend roles, technical apprenticeship inquiries, and software engineering discussions.',
      badge: 'Professional Network',
      icon: <LinkedinIcon className="w-5 h-5 text-white" />,
    },
    {
      id: 'email',
      name: 'Direct Dispatch',
      handle: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      accent: '#0c9b56',
      description:
        'Send project proposals, junior opportunities, or code review feedback straight to my personal inbox.',
      badge: 'Direct Channel',
      isEmail: true,
      icon: <Mail className="w-5 h-5 text-white" />,
    },
    {
      id: 'upstream',
      name: 'Upstream Hub',
      handle: 'Cesium • Mission Center • Zed',
      href: '#upstream',
      accent: '#ef2f4c',
      description:
        'Merged GLSL radar shader pipeline in Cesium, power management fixes in Mission Center, and Linux Wayland investigations.',
      badge: 'Upstream Contributions',
      isInternal: true,
      icon: <Sparkles className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section id="socialmedia" className="py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AndrewSectionHeader
          id="socialmedia"
          title="Developer Network"
          lede="Connect, collaborate, and explore my codebases and upstream activity across the web."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkProfiles.map((item) => (
            <div
              key={item.id}
              className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <span className="font-quicksand font-bold text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#15161e] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-quicksand text-lg font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs text-[#7148fc] dark:text-[#09d8ff] font-semibold mt-0.5 truncate">
                    {item.handle}
                  </p>
                </div>

                <p className="font-quicksand text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                {item.isEmail ? (
                  <div className="space-y-2">
                    <button
                      onClick={copyEmail}
                      className="w-full py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#15161e] hover:border-[#7148fc] text-slate-800 dark:text-slate-200 font-quicksand text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                    <a
                      href={item.href}
                      className="w-full py-2 rounded-full bg-[#7148fc] hover:bg-[#5d35e0] text-white font-quicksand text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Send Dispatch</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : item.isInternal ? (
                  <a
                    href={item.href}
                    className="w-full py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#ef2f4c] text-slate-800 dark:text-slate-200 hover:text-[#ef2f4c] font-quicksand text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>View Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#7148fc] text-slate-800 dark:text-slate-200 hover:text-[#7148fc] dark:hover:text-[#09d8ff] font-quicksand text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperNetwork;
