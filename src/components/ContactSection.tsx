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
    <section id="connect" className="py-24 border-t border-white/20 relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.2em] font-bold mb-3">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Communication Channels // Direct Transmission</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              Let's Connect & Collaborate
            </h2>
          </div>
          <p className="font-sans text-sm text-[#949494] max-w-md leading-relaxed">
            Whether discussing frontend apprenticeship, systems tooling, or AI-directed engineering, my inbox is open.
          </p>
        </div>

        {/* 3 High-Voltage Color-Block Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Tile: Jelly Mint */}
          <div className="p-8 bg-verge-mint text-black flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] font-bold text-black/70">
                  Channel 01 // Codebase
                </span>
                <GithubIcon className="w-6 h-6 text-black" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-black mb-2">
                GitHub
              </h3>
              <p className="font-mono text-sm font-bold text-black mb-4">
                @kk376
              </p>
              <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed">
                Explore daily commits, Bash automation suites, Rust fetch utilities, and upstream pull requests.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/20">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-white hover:text-black transition-colors"
              >
                <span>Explore Repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Tile: Verge Ultraviolet */}
          <div className="p-8 bg-verge-violet text-white flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] font-bold text-white/70">
                  Channel 02 // Network
                </span>
                <LinkedinIcon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white mb-2">
                LinkedIn
              </h3>
              <p className="font-mono text-sm font-bold text-white mb-4">
                kushagra-kumar376
              </p>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Connect for junior frontend roles, collaboration inquiries, and software craftsmanship discussions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-verge-mint hover:text-black transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Email Tile: Electric Yellow */}
          <div className="p-8 bg-verge-yellow text-black flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] font-bold text-black/70">
                  Channel 03 // Direct
                </span>
                <Mail className="w-6 h-6 text-black" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-black mb-2">
                Direct Email
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-black mb-4 truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed">
                Send direct proposals, project inquiries, or technical feedback straight to my inbox.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/20">
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-white hover:text-black transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-verge-mint" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
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
