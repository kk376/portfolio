import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, MessageCircle } from 'lucide-react';
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
    <section id="connect" className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 dark:bg-white/[0.04] border border-pink-200 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
            <span>Open Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-normal">
            Whether you want to discuss frontend opportunities, open source work, or AI pair-programming, my inbox is open.
          </p>
        </div>

        {/* 3 Colorful Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border border-cyan-300/80 dark:border-cyan-500/25 hover:border-cyan-500 dark:hover:border-cyan-500/60 shadow-sm hover:shadow-md dark:shadow-xl group flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">GitHub</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@kk376</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
              <span>Explore Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border border-purple-300/80 dark:border-purple-500/25 hover:border-purple-500 dark:hover:border-purple-500/60 shadow-sm hover:shadow-md dark:shadow-xl group flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">kushagra-kumar376</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-purple-600 dark:text-purple-400 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Email Direct Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b0d16] border border-pink-300/80 dark:border-pink-500/25 hover:border-pink-500 dark:hover:border-pink-500/60 shadow-sm hover:shadow-md dark:shadow-xl flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Direct Email</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">{PERSONAL_INFO.email}</p>
            </div>
            <button
              onClick={copyEmail}
              className="mt-6 flex items-center justify-between text-xs font-mono text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 pt-3 border-t border-slate-100 dark:border-white/[0.04] transition-colors"
            >
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
