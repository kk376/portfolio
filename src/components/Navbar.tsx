import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'STORYSTREAM', href: '#upstream' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'LEARNING', href: '#skills' },
    { label: 'AI PAIRING', href: '#philosophy' },
    { label: 'DIAGNOSTICS', href: '#system' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#131313]/95 backdrop-blur-md border-b border-[#ffffff]/15 shadow-xl'
          : 'bg-[#131313] border-b border-[#ffffff]/10'
      }`}
    >
      {/* Top 2px Hazard tape or mint hairline */}
      <div className="h-[2px] w-full bg-[#3cffd0]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Masthead Left: Logo & Dispatch Badge */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3cffd0] animate-pulse" />
            <span className="font-display text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#3860be] transition-colors uppercase">
              KUSHAGRA KUMAR
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 bg-[#2d2d2d] text-[#3cffd0] border border-[#3cffd0]/40 rounded-full hidden sm:inline-block">
              DISPATCH
            </span>
          </a>

          {/* Center: UPPERCASE Mono Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.18em] font-bold text-[#949494] hover:text-[#3860be] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Controls & Jelly Mint Pill CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#2d2d2d] border border-[#ffffff]/20 hover:border-[#3cffd0] text-[#ffffff] hover:text-[#3860be] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#2d2d2d] border border-[#ffffff]/20 hover:border-[#3cffd0] text-[#ffffff] hover:text-[#3860be] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Signature Jelly Mint Pill */}
            <a
              href="#connect"
              className="px-4 py-2 rounded-full bg-[#3cffd0] text-black font-mono text-xs uppercase tracking-[0.16em] font-bold hover:bg-white/20 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#connect"
              className="px-3 py-1.5 rounded-full bg-[#3cffd0] text-black font-mono text-[10px] uppercase tracking-[0.14em] font-bold"
            >
              CONNECT
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[#ffffff] border border-[#ffffff]/20 bg-[#2d2d2d]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#131313] border-b border-[#ffffff]/20 px-5 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-xs uppercase tracking-[0.18em] font-bold text-[#e9e9e9] hover:text-[#3860be] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#ffffff]/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-[#949494] hover:text-[#3860be] flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-[#949494] hover:text-[#3860be] flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
