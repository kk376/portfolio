import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { GitlabIcon } from './icons/GitlabIcon';

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
    { label: 'Upstream & PRs', href: '#upstream' },
    { label: 'Flagship Projects', href: '#projects' },
    { label: 'System Telemetry', href: '#system' },
    { label: 'Methodology', href: '#methodology' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08090c]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-md bg-white/[0.06] border border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-white/[0.25] transition-colors">
              KK
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-slate-200 transition-colors block">
                Kushagra Kumar
              </span>
              <span className="text-[11px] text-slate-500 font-mono block">
                Systems & Open Source
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.18] transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://gitlab.com/Kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.18] transition-all"
              title="GitLab Profile"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" />
            </a>

            <a
              href="mailto:kkushagra86@gmail.com"
              className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-xs font-medium text-white transition-colors flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Mobile menu button */}
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
        <div className="md:hidden bg-[#0a0b10] border-b border-white/[0.08] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-4">
            <a
              href="https://github.com/kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href="https://gitlab.com/Kk376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 font-mono"
            >
              <GitlabIcon className="w-3.5 h-3.5 text-orange-400" />
              GitLab
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
