import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Upstream', href: '#upstream' },
    { label: 'Skills', href: '#skills' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Telemetry', href: '#system' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-white/80 dark:bg-[#0b0f19]/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark inspired by Anand Baraik */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-xl anand-gradient-bg flex items-center justify-center text-white font-poppins font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              KK
            </span>
            <div className="flex flex-col">
              <span className="font-poppins text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full font-montserrat text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Keyboard Shortcuts Pill */}
            <button
              onClick={onOpenShortcuts}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#162032] text-slate-600 dark:text-slate-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-mono transition-all shadow-xs cursor-pointer"
              title="Press ? for keyboard shortcuts"
            >
              <kbd className="font-bold text-[10px] bg-slate-100 dark:bg-[#1f2937] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                ?
              </kbd>
              <span className="text-[11px] font-sans font-medium">Hotkeys</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#162032] text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full anand-gradient-bg hover:opacity-95 text-white font-poppins text-xs font-semibold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#162032] text-slate-700 dark:text-slate-300 shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 px-5 py-5 space-y-2 shadow-xl animate-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-montserrat text-sm font-semibold text-slate-800 dark:text-slate-200 py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-[#162032] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3 font-poppins text-xs font-semibold text-slate-700 dark:text-slate-300">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full anand-gradient-bg text-white font-poppins text-xs font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
