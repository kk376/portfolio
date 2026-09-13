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
    <section id="connect" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
                <Send className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff]" />
                <span>DIRECT CHANNELS // TRANSMISSION</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-tight max-w-3xl">
              Direct transmission. Open for apprentice roles and software collaboration.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] max-w-md leading-relaxed">
            Whether discussing junior frontend opportunities, systems automation tooling, or AI pair-programming methodology, direct channels remain open.
          </p>
        </div>

        {/* 3 Stripe Precision Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: GitHub */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#64748d] dark:text-[#94a3b8] tabular-nums">
                  CHANNEL 01 // CODEBASE
                </span>
                <GithubIcon className="w-5 h-5 text-[#533afd] dark:text-[#00d4ff]" />
              </div>

              <h3 className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">
                GitHub
              </h3>
              <p className="font-mono text-xs font-medium text-[#533afd] dark:text-[#00d4ff] mb-4">
                @{PERSONAL_INFO.handle}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed mb-6">
                Inspect daily commits, Bash workstation suites, microsecond Rust fetch utilities, and upstream PR discussions.
              </p>
            </div>

            <div className="pt-5 border-t border-[#e3e8ee] dark:border-white/5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Explore Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Card 02: LinkedIn */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] tabular-nums">
                  CHANNEL 02 // PROFESSIONAL
                </span>
                <LinkedinIcon className="w-5 h-5 text-[#533afd] dark:text-[#00d4ff]" />
              </div>

              <h3 className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">
                LinkedIn
              </h3>
              <p className="font-mono text-xs font-medium text-[#533afd] dark:text-[#00d4ff] mb-4">
                kushagra-kumar376
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed mb-6">
                Connect for junior frontend roles, technical apprenticeship inquiries, and engineering discussions.
              </p>
            </div>

            <div className="pt-5 border-t border-[#e3e8ee] dark:border-white/5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Card 03: Direct Email */}
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-4 mb-5">
                <span className="font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] tabular-nums">
                  CHANNEL 03 // DISPATCH
                </span>
                <Mail className="w-5 h-5 text-[#533afd] dark:text-[#00d4ff]" />
              </div>

              <h3 className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">
                Direct Email
              </h3>
              <p className="font-mono text-xs font-medium text-[#0d253d] dark:text-[#f8fafc] mb-4 truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#64748d] dark:text-[#94a3b8] leading-relaxed mb-6">
                Send direct proposals, project inquiries, or code review feedback straight to my personal inbox.
              </p>
            </div>

            <div className="pt-5 border-t border-[#e3e8ee] dark:border-white/5">
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#f6f9fc] dark:bg-[#1e293b] border border-[#e3e8ee] dark:border-white/10 text-[#0d253d] dark:text-[#f8fafc] hover:border-[#533afd] font-sans text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff] stroke-[2.5]" />
                    <span className="text-[#533afd] dark:text-[#00d4ff]">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748d] dark:text-[#94a3b8]" />
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
