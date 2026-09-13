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
    { label: 'Upstream Dispatches', href: '#upstream' },
    { label: 'Models & Code', href: '#projects' },
    { label: 'Taxonomy', href: '#skills' },
    { label: 'AI Pairing Method', href: '#philosophy' },
    { label: 'Telemetry', href: '#system' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#f9f7f3]/95 dark:bg-[#141416]/95 backdrop-blur-md border-b border-[rgba(32,32,32,0.1)] dark:border-white/10 shadow-sm'
          : 'bg-[#f9f7f3] dark:bg-[#141416] border-b border-[rgba(32,32,32,0.08)] dark:border-white/10'
      }`}
    >
      {/* Top Replicate Micro-Bar */}
      <div className="border-b border-[rgba(32,32,32,0.06)] dark:border-white/5 px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ea2804] animate-pulse" />
          <span className="font-semibold text-[#202020] dark:text-[#fcfcfc]">REPLICATE LAB LOG</span>
          <span className="text-neutral-400 dark:text-neutral-600">/</span>
          <span className="hidden sm:inline">KUSHAGRA KUMAR (kk376)</span>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <span className="px-2 py-0.5 rounded-full bg-[#f3f0e8] dark:bg-[#212124] text-[10px] text-[#ea2804] font-semibold">
            STATUS: ACTIVE LEARNING
          </span>
          <span className="hidden md:inline text-neutral-400">FEDORA 44</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#202020] dark:text-[#fcfcfc] group-hover:text-[#ea2804] transition-colors">
              kk376
            </span>
            <span className="text-neutral-400 dark:text-neutral-500 font-light">/</span>
            <span className="font-sans text-sm font-medium text-neutral-600 dark:text-neutral-300">
              lab-notebook
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#f3f0e8] dark:bg-[#212124] text-neutral-600 dark:text-neutral-400 ml-1">
              v2.0
            </span>
          </a>

          {/* Center Navigation Links (Pill Style) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-sans font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#202020] dark:hover:text-white hover:bg-[#f3f0e8] dark:hover:bg-[#212124] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#212124] text-neutral-700 dark:text-neutral-200 hover:text-[#ea2804] dark:hover:text-[#ff6a3d] hover:border-[#ea2804]/40 transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#212124] text-neutral-700 dark:text-neutral-200 hover:text-[#ea2804] dark:hover:text-[#ff6a3d] hover:border-[#ea2804]/40 transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Replicate Fire Orange Pill CTA */}
            <a
              href="#connect"
              className="px-4 py-2 rounded-full bg-[#ea2804] hover:bg-[#c01f00] text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Transmit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Header */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#212124] text-neutral-800 dark:text-neutral-200 shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#f9f7f3] dark:bg-[#141416] border-b border-[rgba(32,32,32,0.1)] dark:border-white/10 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-sm font-medium text-neutral-800 dark:text-neutral-200 py-2 px-3 rounded-lg hover:bg-[#f3f0e8] dark:hover:bg-[#212124] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[rgba(32,32,32,0.08)] dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5 font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5 font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-1.5 rounded-full bg-[#ea2804] text-white font-sans text-xs font-semibold"
            >
              Transmit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
