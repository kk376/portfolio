import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Upstream PRs', href: '#upstream' },
    { label: 'Projects', href: '#projects' },
    { label: 'System', href: '#system' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#06070b]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-lg dark:shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top rainbow gradient hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-emerald-400" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand with photo thumbnail */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
              <img
                src="/avatar.jpg"
                alt="Kushagra Kumar"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                  kk376
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                Learning Frontend
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Theme Toggle & Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-all shadow-sm dark:shadow-none"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-purple-400/60 hover:bg-purple-500/10 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-all shadow-sm dark:shadow-none"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-transparent"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0a0c14] border-b border-slate-200 dark:border-white/[0.08] px-4 py-4 space-y-3 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 flex items-center gap-1.5 font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 flex items-center gap-1.5 font-mono"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
            <ThemeToggle showLabel />
          </div>
        </div>
      )}
    </header>
  );
};
