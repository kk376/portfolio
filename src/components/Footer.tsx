import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/20 bg-[#131313] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Col 1: Masthead Brand */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-verge-mint inline-block" />
              <span className="font-display text-2xl uppercase tracking-wider text-white">
                Kushagra Kumar
              </span>
              <span className="font-mono text-xs text-verge-mint uppercase tracking-widest font-bold">
                // Dispatch
              </span>
            </div>
            <p className="font-sans text-xs text-[#949494] max-w-md leading-relaxed">
              Editorial portfolio documenting frontend mastery, Linux workstation automation, upstream open source pull requests, and AI pair-programming architecture.
            </p>
          </div>

          {/* Col 2: Colophon Tech Spec */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-white font-bold">
              Production Spec
            </div>
            <ul className="font-mono text-xs text-[#949494] space-y-1">
              <li>Framework: React 18 + Vite</li>
              <li>Type Safety: Strict TypeScript</li>
              <li>Styling: Tailwind CSS v3</li>
              <li>Design Language: The Verge</li>
            </ul>
          </div>

          {/* Col 3: Direct Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-white font-bold">
              Dispatch Wire
            </div>
            <div className="flex flex-col space-y-1.5 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#949494] hover:text-verge-blue transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/kk376</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#949494] hover:text-verge-blue transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/kushagra-kumar376</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom hairline colophon bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#949494] uppercase tracking-wider">
          <div>
            (c) 2026 Kushagra Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-verge-mint">Edition 01 // Direction 1</span>
            <span>Fedora 44 Workstation</span>
            <span className="text-white">Local Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
