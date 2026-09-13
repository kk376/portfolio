import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Keyboard } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenShortcuts?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShortcuts }) => {
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
    { label: 'Now Status', href: '#now' },
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
          ? 'bg-white/90 dark:bg-[#0a101d]/90 backdrop-blur-md border-b border-[#e3e8ee] dark:border-white/10 shadow-sm'
          : 'bg-white/70 dark:bg-[#0a101d]/70 backdrop-blur-sm border-b border-[#e3e8ee]/60 dark:border-white/10'
      }`}
    >
      {/* Top Stripe Status Micro-Bar */}
      <div className="border-b border-[#e3e8ee]/60 dark:border-white/5 px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] font-mono text-[#64748d] dark:text-[#94a3b8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#533afd] animate-pulse" />
          <span className="font-semibold text-[#0d253d] dark:text-[#f8fafc]">STRIPE LAB ARCHITECTURE</span>
          <span className="text-[#a8c3de]">/</span>
          <span className="hidden sm:inline">KUSHAGRA KUMAR (kk376)</span>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <a
            href="#now"
            className="px-2.5 py-0.5 rounded-full bg-[#533afd]/10 text-[#533afd] dark:bg-[#533afd]/20 dark:text-[#b9b9f9] text-[10px] font-semibold hover:bg-[#533afd]/20 transition-colors cursor-pointer"
          >
            STATUS: ACTIVE LEARNING
          </a>
          <span className="hidden md:inline text-[#64748d]">FEDORA 44 WORKSTATION</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0d253d] dark:text-[#f8fafc] group-hover:text-[#533afd] transition-colors">
              kk376
            </span>
            <span className="text-[#a8c3de] font-light">/</span>
            <span className="font-sans text-sm font-medium text-[#273951] dark:text-[#94a3b8]">
              notebook
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#533afd]/10 text-[#533afd] dark:text-[#b9b9f9] border border-[#533afd]/20 ml-1">
              v2.0
            </span>
          </a>

          {/* Center Navigation Links (Stripe Pill Style) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium text-[#273951] dark:text-[#94a3b8] hover:text-[#533afd] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />

            {/* Keyboard Shortcuts Trigger */}
            <button
              onClick={onOpenShortcuts}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#64748d] dark:text-[#94a3b8] hover:border-[#533afd] hover:text-[#533afd] text-xs font-mono transition-all shadow-xs cursor-pointer"
              title="Press ? for keyboard shortcuts"
            >
              <kbd className="font-semibold text-[10px] bg-slate-100 dark:bg-[#1e293b] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                ?
              </kbd>
              <span className="text-[11px] hidden xl:inline font-sans">Hotkeys</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#273951] dark:text-[#f8fafc] hover:border-[#533afd] hover:text-[#533afd] transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#273951] dark:text-[#f8fafc] hover:border-[#533afd] hover:text-[#533afd] transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Stripe Signature Electric Indigo Button */}
            <a
              href="#connect"
              className="px-4 py-2 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95"
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
              className="p-2 rounded-full border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#0d253d] dark:text-[#f8fafc] shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a101d] border-b border-[#e3e8ee] dark:border-white/10 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-sm font-medium text-[#0d253d] dark:text-[#f8fafc] py-2 px-3 rounded-lg hover:bg-[#f6f9fc] dark:hover:bg-[#1e293b] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#e3e8ee] dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#273951] dark:text-[#f8fafc] flex items-center gap-1.5 font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#273951] dark:text-[#f8fafc] flex items-center gap-1.5 font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenShortcuts?.();
                }}
                className="px-3 py-1.5 rounded-full border border-[#e3e8ee] dark:border-white/10 text-xs font-mono text-[#64748d] dark:text-[#94a3b8] flex items-center gap-1.5"
              >
                <Keyboard className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff]" />
                <span>Shortcuts</span>
              </button>
              <a
                href="#connect"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-full bg-[#533afd] text-white font-sans text-xs font-semibold"
              >
                Transmit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
