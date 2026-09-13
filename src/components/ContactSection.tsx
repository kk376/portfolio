import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, MessageCircle } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-pink-500/30 text-pink-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>Open Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-normal">
            Whether you want to discuss frontend opportunities, open source work, or AI pair-programming, my inbox is open.
          </p>
        </div>

        {/* 4 Colorful Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0b0d16] border border-cyan-500/25 hover:border-cyan-500/60 hover:shadow-cyan-500/10 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">GitHub</h3>
              <p className="text-xs text-slate-400 font-mono">@kk376</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.04]">
              <span>Explore Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitLab Card */}
          <a
            href={PERSONAL_INFO.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0b0d16] border border-orange-500/25 hover:border-orange-500/60 hover:shadow-orange-500/10 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <GitlabIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">GitLab</h3>
              <p className="text-xs text-slate-400 font-mono">@Kk376</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-orange-400 pt-3 border-t border-white/[0.04]">
              <span>View MRs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0b0d16] border border-purple-500/25 hover:border-purple-500/60 hover:shadow-purple-500/10 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <span className="font-bold text-sm">in</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-400 font-mono">kushagra-kumar376</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-purple-400 pt-3 border-t border-white/[0.04]">
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Email Direct Card */}
          <div className="p-6 rounded-2xl bg-[#0b0d16] border border-pink-500/25 hover:border-pink-500/60 hover:shadow-pink-500/10 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-slate-400 font-mono truncate">{PERSONAL_INFO.email}</p>
            </div>
            <button
              onClick={copyEmail}
              className="mt-6 flex items-center justify-between text-xs font-mono text-pink-400 hover:text-pink-300 pt-3 border-t border-white/[0.04] transition-colors"
            >
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
