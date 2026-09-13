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
          ? 'bg-[#e8ebe6]/95 dark:bg-[#0e0f0c]/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm'
          : 'bg-[#e8ebe6] dark:bg-[#0e0f0c] border-b border-black/5 dark:border-white/10'
      }`}
    >
      {/* Top Scandinavian Micro-Bar */}
      <div className="border-b border-black/5 dark:border-white/5 px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] font-mono text-[#454745] dark:text-[#b5b8b2]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9fe870] animate-pulse" />
          <span className="font-bold text-[#0e0f0c] dark:text-[#f4f6f2]">APPRENTICE DISPATCH</span>
          <span className="text-[#868685]">/</span>
          <span className="hidden sm:inline">KUSHAGRA KUMAR (kk376)</span>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <span className="px-2.5 py-0.5 rounded-full bg-[#e2f6d5] dark:bg-[#22251e] text-[10px] text-[#163300] dark:text-[#9fe870] font-bold">
            STATUS: ACTIVE LEARNING
          </span>
          <span className="hidden md:inline text-[#868685]">FEDORA 44 WORKSTATION</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#0e0f0c] dark:text-[#f4f6f2] group-hover:text-[#9fe870] transition-colors">
              kk376
            </span>
            <span className="text-[#868685] font-light">/</span>
            <span className="font-sans text-sm font-semibold text-[#454745] dark:text-[#b5b8b2]">
              notebook
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white dark:bg-[#191b16] text-[#0e0f0c] dark:text-[#f4f6f2] border border-black/5 dark:border-white/10 ml-1">
              v2.0
            </span>
          </a>

          {/* Center Navigation Links (Wise Pill Style) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-[#454745] dark:text-[#b5b8b2] hover:text-[#0e0f0c] dark:hover:text-white hover:bg-white dark:hover:bg-[#191b16] transition-all"
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
              className="p-2 rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] text-[#0e0f0c] dark:text-[#f4f6f2] hover:border-[#9fe870] transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] text-[#0e0f0c] dark:text-[#f4f6f2] hover:border-[#9fe870] transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Wise Fluorescent Electric Lime Pill CTA */}
            <a
              href="#connect"
              className="px-5 py-2.5 rounded-full bg-[#9fe870] hover:bg-[#cdffad] text-[#0e0f0c] font-sans text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Transmit</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Navigation Header */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] text-[#0e0f0c] dark:text-[#f4f6f2] shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#e8ebe6] dark:bg-[#0e0f0c] border-b border-black/5 dark:border-white/10 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-sm font-semibold text-[#0e0f0c] dark:text-[#f4f6f2] py-2 px-3 rounded-xl hover:bg-white dark:hover:bg-[#191b16] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#0e0f0c] dark:text-[#f4f6f2] flex items-center gap-1.5 font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#0e0f0c] dark:text-[#f4f6f2] flex items-center gap-1.5 font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full bg-[#9fe870] text-[#0e0f0c] font-sans text-xs font-bold"
            >
              Transmit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
