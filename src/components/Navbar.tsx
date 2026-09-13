import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { ThemeToggle } from './ThemeToggle';
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
    { num: '01', label: 'UPSTREAM', href: '#upstream' },
    { num: '02', label: 'CODEBASES', href: '#projects' },
    { num: '03', label: 'TAXONOMY', href: '#skills' },
    { num: '04', label: 'AI METHOD', href: '#philosophy' },
    { num: '05', label: 'BENCH', href: '#system' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F4F3EE]/95 dark:bg-[#141416]/95 backdrop-blur-md border-b-2 border-black dark:border-white shadow-swiss'
          : 'bg-[#F4F3EE] dark:bg-[#141416] border-b-2 border-black dark:border-white'
      }`}
    >
      {/* Top Monograph Micro-Bar */}
      <div className="border-b border-black/15 dark:border-white/15 px-4 sm:px-8 py-1 flex items-center justify-between text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#FF4F00] inline-block" />
          <span>ARCHIVAL MONOGRAPH NO. 02</span>
          <span className="hidden md:inline">• FRONTEND APPRENTICE & SYSTEMS EXPLORER</span>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <span className="text-[#1D4ED8] dark:text-[#60a5fa]">EDITION 2026</span>
          <span>//</span>
          <span>INDIA</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
              Kushagra Kumar
            </span>
            <span className="border-2 border-black dark:border-white bg-[#FF4F00] text-white font-mono text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
              kk376
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-neutral-700 dark:text-neutral-300 hover:text-[#1D4ED8] dark:hover:text-[#60a5fa] transition-colors"
              >
                <span className="text-[10px] text-neutral-400 dark:text-neutral-500 group-hover:text-[#FF4F00] transition-colors">
                  {link.num}.
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Swiss Tactile CTA Button */}
            <a
              href="#connect"
              className="px-4 py-2 border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-swiss hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-swiss-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-1.5"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Header */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-[#1f2026] text-black dark:text-white shadow-swiss-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F4F3EE] dark:bg-[#141416] border-b-2 border-black dark:border-white px-5 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-neutral-800 dark:text-neutral-200 py-1.5 border-b border-black/10 dark:border-white/10"
            >
              <span className="text-[#FF4F00]">{link.num}.</span>
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-black dark:text-white flex items-center gap-1.5 font-bold"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-black dark:text-white flex items-center gap-1.5 font-bold"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-1.5 border-2 border-black dark:border-white bg-[#1D4ED8] text-white font-mono text-[11px] font-bold uppercase tracking-wider"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
