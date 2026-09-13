import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Layers,
  GitPullRequest,
  Terminal,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Experience', href: '#resume', icon: GraduationCap },
  { name: 'Projects', href: '#portfolio', icon: Layers },
  { name: 'Open Source', href: '#upstream', icon: GitPullRequest },
  { name: 'CLI', href: '#telemetry', icon: Terminal },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Sidebar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 sm:h-20 bg-white/85 dark:bg-[#1e1e2e]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 z-50 transition-colors duration-200 shadow-xs">
        {/* Subtle Catppuccin Gradient Accent Stripe */}
        <div className="h-[2.5px] w-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] via-[var(--accent-cyan)] to-[var(--accent-peach)] opacity-85" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-2.5px)] flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group select-none cursor-pointer"
            title="Kushagra Kumar"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-muted)] border border-[var(--accent-primary)]/30 flex items-center justify-center font-mono font-bold text-sm text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors duration-200 shadow-xs">
              KK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-[#cdd6f4] group-hover:text-[var(--accent-primary)] transition-colors">
                Kushagra Kumar
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#a6adc8] hidden sm:block">
                Frontend &amp; Open Source
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--accent-primary)] text-white shadow-sm shadow-[var(--accent-primary)]/25'
                      : 'text-slate-600 dark:text-[#a6adc8] hover:text-[var(--accent-primary)] dark:hover:text-[#cdd6f4] hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-[#252538] hover:bg-[var(--accent-light)] text-slate-700 dark:text-[#cdd6f4] hover:text-[var(--accent-primary)] border border-slate-200 dark:border-white/10 transition-all duration-200 cursor-pointer shadow-xs"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[var(--accent-peach)] transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-[#cdd6f4] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="relative w-72 max-w-[80vw] bg-white dark:bg-[#1e1e2e] h-full p-6 shadow-2xl flex flex-col justify-between z-10 transition-colors border-r border-slate-200 dark:border-white/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10">
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-[#cdd6f4]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-light)] border border-[var(--accent-primary)]/30 flex items-center justify-center font-mono font-bold text-xs text-[var(--accent-primary)]">
                    KK
                  </div>
                  <span>Kushagra</span>
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                        isActive
                          ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
                          : 'text-slate-600 dark:text-[#a6adc8] hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[var(--accent-primary)]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-400 dark:text-[#6c7086]">
              <span>Frontend Developer</span>
              <span>© 2026 kk376</span>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
