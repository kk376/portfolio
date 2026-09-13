import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
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
          ? 'bg-[#06070b]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/50'
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
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  kk376
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono block">
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
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 hover:from-cyan-500/25 hover:via-purple-500/25 hover:to-pink-500/25 border border-purple-500/30 text-xs font-medium text-white transition-all flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-purple-400" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0c14] border-b border-white/[0.08] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-purple-400 flex items-center gap-1.5 font-mono"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
