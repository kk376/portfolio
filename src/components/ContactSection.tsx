import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send } from 'lucide-react';
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
    <section id="connect" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#ea2804]">
                <Send className="w-3.5 h-3.5" />
                <span>DIRECT CHANNELS // TRANSMISSION</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-tight max-w-3xl">
              Direct transmission. Open for apprentice roles and software collaboration.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#575757] dark:text-[#a0a0a0] max-w-md leading-relaxed">
            Whether discussing junior frontend opportunities, systems automation tooling, or AI pair-programming methodology, direct channels remain open.
          </p>
        </div>

        {/* 3 Replicate Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: GitHub */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-neutral-500">
                  CHANNEL 01 // CODEBASE
                </span>
                <GithubIcon className="w-5 h-5 text-[#202020] dark:text-[#fcfcfc]" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">
                GitHub
              </h3>
              <p className="font-mono text-xs font-medium text-[#ea2804] dark:text-[#ff6a3d] mb-4">
                @{PERSONAL_INFO.handle}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed mb-6">
                Inspect daily commits, Bash workstation suites, microsecond Rust fetch utilities, and upstream PR discussions.
              </p>
            </div>

            <div className="pt-5 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#202020] text-white hover:bg-[#ea2804] dark:bg-[#fcfcfc] dark:text-[#202020] dark:hover:bg-[#ea2804] dark:hover:text-white font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Explore Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 02: LinkedIn */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#ea2804] dark:text-[#ff6a3d]">
                  CHANNEL 02 // PROFESSIONAL
                </span>
                <LinkedinIcon className="w-5 h-5 text-[#ea2804] dark:text-[#ff6a3d]" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">
                LinkedIn
              </h3>
              <p className="font-mono text-xs font-medium text-[#ea2804] dark:text-[#ff6a3d] mb-4">
                kushagra-kumar376
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed mb-6">
                Connect for junior frontend roles, technical apprenticeship inquiries, and engineering discussions.
              </p>
            </div>

            <div className="pt-5 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#ea2804] hover:bg-[#c01f00] text-white font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 03: Direct Email */}
          <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#ea2804]/30 dark:hover:border-[#ff6a3d]/30 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#2b9a66]">
                  CHANNEL 03 // DISPATCH
                </span>
                <Mail className="w-5 h-5 text-[#2b9a66]" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">
                Direct Email
              </h3>
              <p className="font-mono text-xs font-medium text-[#202020] dark:text-[#fcfcfc] mb-4 truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#575757] dark:text-[#a0a0a0] leading-relaxed mb-6">
                Send direct proposals, project inquiries, or code review feedback straight to my personal inbox.
              </p>
            </div>

            <div className="pt-5 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5">
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white dark:bg-[#28282c] border border-[rgba(32,32,32,0.12)] dark:border-white/15 text-[#202020] dark:text-[#fcfcfc] hover:border-[#ea2804]/40 font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2b9a66]" />
                    <span className="text-[#2b9a66]">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Copy Email Address</span>
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
