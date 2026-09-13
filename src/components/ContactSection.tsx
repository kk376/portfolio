import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="py-20 md:py-24 border-b-2 border-black dark:border-white bg-[#F4F3EE] dark:bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-swiss-sm">
                PLATE VII // DIRECT TRANSMISSION & COMMISSIONS
              </span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                FIG. 7.0
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-black dark:text-white tracking-tight leading-tight max-w-3xl">
              Direct transmission. Open for apprentice roles and software collaboration.
            </h2>
          </div>
          <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Whether discussing junior frontend opportunities, systems automation tooling, or AI pair-programming methodology, direct channels remain open.
          </p>
        </div>

        {/* 3 Architectural Monograph Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01: GitHub */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                  CHANNEL 01 // CODEBASE
                </span>
                <GithubIcon className="w-5 h-5 text-black dark:text-white" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                GitHub
              </h3>
              <p className="font-mono text-sm font-bold text-[#1D4ED8] dark:text-[#60a5fa] mb-4">
                @{PERSONAL_INFO.handle}
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                Inspect daily commits, Bash workstation suites, microsecond Rust fetch utilities, and upstream PR discussions.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-black dark:border-white">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <span>EXPLORE ARCHIVES</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 02: LinkedIn */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] dark:text-[#60a5fa]">
                  CHANNEL 02 // PROFESSIONAL
                </span>
                <LinkedinIcon className="w-5 h-5 text-[#1D4ED8] dark:text-[#60a5fa]" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="font-mono text-sm font-bold text-[#1D4ED8] dark:text-[#60a5fa] mb-4">
                kushagra-kumar376
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                Connect for junior frontend roles, technical apprenticeship inquiries, and engineering discussions.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-black dark:border-white">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 03: Direct Email */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] shadow-swiss-lg p-7 sm:p-8 flex flex-col justify-between group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss transition-all">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF4F00]">
                  CHANNEL 03 // DISPATCH
                </span>
                <Mail className="w-5 h-5 text-[#FF4F00]" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-black dark:text-white mb-2">
                Direct Email
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-black dark:text-white mb-4 truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                Send direct proposals, project inquiries, or code review feedback straight to my personal inbox.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-black dark:border-white">
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-3 border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
