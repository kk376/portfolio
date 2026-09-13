import React, { useState } from 'react';
import { Radio, Key, MapPin, Mail, Check, Copy } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kushagrakr376@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-obsidian-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Communication Channels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tactical Coordinates
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Direct telemetry channels for upstream collaboration, systems engineering, or vibe code experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* GitHub Card */}
          <div className="hud-border bg-obsidian-900/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <GithubIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">GitHub Central</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Source code registry & pull requests.</p>
            </div>
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-3 rounded-xl bg-obsidian-950/80 border border-obsidian-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-mono transition-colors"
            >
              <span>github.com/kk376</span>
              <span className="text-slate-500">→</span>
            </a>
          </div>

          {/* Email Direct Card */}
          <div className="hud-border bg-obsidian-900/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Transmission</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Async transmissions and collaboration.</p>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-between p-3 rounded-xl bg-obsidian-950/80 border border-obsidian-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-mono transition-colors"
            >
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            </button>
          </div>

          {/* Location & Timezone Card */}
          <div className="hud-border bg-obsidian-900/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Station Node</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Workstation node and timezone.</p>
            </div>
            <div className="p-3 rounded-xl bg-obsidian-950/80 border border-obsidian-800 font-mono text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Region:</span>
                <span className="text-emerald-400 font-semibold">India (IST)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Offset:</span>
                <span className="text-slate-300">UTC +05:30</span>
              </div>
            </div>
          </div>

          {/* Security & Commits Card */}
          <div className="hud-border bg-obsidian-900/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Key className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Signed Security</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">SSH verification & clean lints.</p>
            </div>
            <div className="p-3 rounded-xl bg-obsidian-950/80 border border-obsidian-800 font-mono text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Commits:</span>
                <span className="text-amber-400 font-semibold">SSH Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Punctuation:</span>
                <span className="text-cyan-400">Zero Em Dashes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
