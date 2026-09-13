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
    { label: 'Developer Network', href: '#socialmedia' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Upstream', href: '#upstream' },
    { label: 'Telemetry', href: '#system' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#15161e]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#2d3042] shadow-sm'
          : 'bg-white/80 dark:bg-[#15161e]/80 backdrop-blur-sm border-b border-slate-100 dark:border-[#2d3042]/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Andrew Baisden Logo Style */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-xl bg-[#7148fc] flex items-center justify-center text-white font-quicksand font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              KK
            </span>
            <div className="flex flex-col">
              <span className="font-quicksand text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#7148fc] dark:group-hover:text-[#09d8ff] transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full font-quicksand text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#7148fc] dark:hover:text-[#09d8ff] hover:bg-slate-100 dark:hover:bg-[#202230] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Keyboard Shortcuts Trigger */}
            <button
              onClick={onOpenShortcuts}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#202230] text-slate-600 dark:text-slate-400 hover:border-[#7148fc] dark:hover:border-[#09d8ff] hover:text-[#7148fc] dark:hover:text-[#09d8ff] text-xs font-mono transition-all shadow-xs cursor-pointer"
              title="Press ? for keyboard shortcuts"
            >
              <kbd className="font-bold text-[10px] bg-slate-100 dark:bg-[#15161e] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                ?
              </kbd>
              <span className="text-[11px] font-quicksand font-semibold">Hotkeys</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-300 hover:border-[#7148fc] hover:text-[#7148fc] dark:hover:border-[#09d8ff] dark:hover:text-[#09d8ff] transition-all shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-300 hover:border-[#7148fc] hover:text-[#7148fc] dark:hover:border-[#09d8ff] dark:hover:text-[#09d8ff] transition-all shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#7148fc] hover:bg-[#5d35e0] text-white font-quicksand text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-300 shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white dark:bg-[#15161e] border-b border-slate-200 dark:border-[#2d3042] px-5 py-5 space-y-2 shadow-xl animate-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-quicksand text-sm font-bold text-slate-800 dark:text-slate-200 py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-[#202230] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-[#2d3042] flex items-center justify-between">
            <div className="flex items-center gap-3 font-quicksand text-xs font-bold text-slate-700 dark:text-slate-300">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#7148fc] dark:hover:text-[#09d8ff]"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#7148fc] dark:hover:text-[#09d8ff]"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full bg-[#7148fc] text-white font-quicksand text-xs font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
