import React, { useState } from 'react';
import { Mail, Check, Copy, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kkushagra86@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="methodology" className="py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                Engineering Approach
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Craftsmanship & Workflow
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My recent engineering focus revolves around Linux workstation optimization, Wayland
              compositor performance, and upstream open source development across Cesium.js, Mission Center,
              and Zed editor.
            </p>

            {/* Subtle, honest note on vibe coding */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono font-semibold text-slate-200 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Transparent Methodology</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                I actively embrace modern AI-assisted pair-programming workflows for rapid exploratory spikes
                and initial architecture ('vibe coding'). I disclose this openly because I value transparency:
                generative tools provide velocity in exploring new domains, while systems discipline ensures
                durability through strict memory safety invariants, kernel-level tracing, zero-warning lints,
                and SSH-signed commits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <div className="text-slate-200 font-semibold mb-1">Minimal Footprint</div>
                <div className="text-slate-400">
                  Avoiding speculative abstractions and bloated dependencies. Less code is always easier to maintain.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <div className="text-slate-200 font-semibold mb-1">Verified Invariants</div>
                <div className="text-slate-400">
                  Documenting safety justifications for unsafe FFI blocks and verifying checksums on external downloads.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Direct Coordinates
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </span>
                  <a
                    href="https://github.com/kk376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-white flex items-center gap-1"
                  >
                    <span>kk376</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GitlabIcon className="w-4 h-4 text-orange-400" />
                    GitLab
                  </span>
                  <a
                    href="https://gitlab.com/Kk376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-white flex items-center gap-1"
                  >
                    <span>Kk376</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className="text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>{copied ? 'Copied' : 'kkushagra86@gmail.com'}</span>
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 leading-relaxed border-t border-white/[0.04]">
                All git commits are cryptographically signed with SSH key ed25519.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
