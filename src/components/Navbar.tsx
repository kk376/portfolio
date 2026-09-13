import React, { useState, useEffect } from 'react';
import { Radio, Menu, X, Cpu } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Upstream PRs', href: '#upstream' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Terminal', href: '#terminal' },
    { name: 'Vibe Manifesto', href: '#manifesto' },
    { name: 'Coordinates', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-obsidian-700/70 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Tactical status */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-obsidian-850 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <Radio className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
              </div>
              <div>
                <span className="font-mono font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                  KK376
                </span>
                <span className="text-slate-500 text-xs font-mono block">
                  vibe // systems
                </span>
              </div>
            </a>

            {/* Tactical Status Pill */}
            <div className="hidden md:flex items-center gap-2 pl-4 ml-4 border-l border-obsidian-700/60 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/90 font-medium">ONLINE</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                Fedora 44
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-obsidian-850 border border-obsidian-700 hover:border-cyan-400/50 hover:bg-obsidian-800 text-slate-200 text-xs font-mono transition-all flex items-center gap-2 shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">github/kk376</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-obsidian-850 border border-obsidian-700 text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/95 backdrop-blur-xl border-b border-obsidian-800 px-4 py-4 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors border-b border-obsidian-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <span>STATUS: READY</span>
            <span className="text-emerald-400">FEDORA 44 LINUX</span>
          </div>
        </div>
      )}
    </header>
  );
};
