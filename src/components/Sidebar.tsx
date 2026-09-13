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
  Palette as PaletteIcon,
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
  { name: 'Upstream', href: '#upstream', icon: GitPullRequest },
  { name: 'Telemetry', href: '#telemetry', icon: Terminal },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Sidebar: React.FC = () => {
  const { isDark, toggleTheme, palette, togglePalette, setPalette } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-[var(--bg-canvas)]/90 backdrop-blur-md border-b border-slate-200 dark:border-[var(--border-subtle)] z-40 px-5 flex items-center justify-between transition-colors">
        <a href="#home" className="flex items-center gap-1 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          <span>KK</span>
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={togglePalette}
            aria-label={`Toggle palette: currently ${palette === 'tokyonight' ? 'Tokyo Night' : 'Catppuccin'}`}
            title={`Palette: ${palette === 'tokyonight' ? 'Tokyo Night' : 'Catppuccin'}`}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <PaletteIcon className="w-5 h-5 text-[var(--accent-primary)]" />
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-[var(--accent-peach)]" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="relative w-72 max-w-[80vw] bg-white dark:bg-[var(--bg-canvas)] h-full p-6 shadow-2xl flex flex-col justify-between z-10 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10">
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1 font-bold text-2xl tracking-tight text-slate-900 dark:text-white"
                >
                  <span>KK</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]" />
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
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
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                        isActive
                          ? 'bg-[var(--accent-primary)] text-white shadow-md'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[var(--accent-primary)]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Palette Switcher */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 px-1">
                  Theme Palette
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPalette('tokyonight')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      palette === 'tokyonight'
                        ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    Tokyo Night
                  </button>
                  <button
                    onClick={() => setPalette('catppuccin')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      palette === 'catppuccin'
                        ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    Catppuccin
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Frontend Developer</span>
              <span>© 2026 kk376</span>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[100px] bg-white dark:bg-[var(--bg-canvas)] border-r border-slate-200/80 dark:border-[var(--border-subtle)] z-50 flex-col items-center justify-between py-7 select-none shadow-sm transition-colors">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="flex items-center gap-0.5 font-bold text-2xl tracking-tight text-slate-900 dark:text-white group"
          title="Kushagra Kumar"
        >
          <span className="group-hover:text-[var(--accent-primary)] transition-colors">KK</span>
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
        </a>

        {/* Central Icon Navigation Stack */}
        <nav className="flex flex-col items-center gap-3.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                className={`relative group p-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'text-[var(--accent-primary)] bg-[var(--accent-light)] shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-[var(--accent-primary)] hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                {/* Floating Tooltip */}
                <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap z-50">
                  {item.name}
                </span>
                {isActive && (
                  <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-[var(--accent-primary)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions: Palette Switcher, Theme Toggle and Vertical Copyright */}
        <div className="flex flex-col items-center gap-3.5">
          {/* Palette Switcher Button */}
          <button
            onClick={togglePalette}
            aria-label={`Toggle palette (currently ${palette === 'tokyonight' ? 'Tokyo Night' : 'Catppuccin'})`}
            title={`Palette: ${palette === 'tokyonight' ? 'Tokyo Night' : 'Catppuccin'} (Click to toggle)`}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-[var(--bg-card)] hover:bg-[var(--accent-light)] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer group relative"
          >
            <PaletteIcon className="w-5 h-5 transition-transform group-hover:rotate-45" />
            <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap z-50">
              Palette: {palette === 'tokyonight' ? 'Tokyo Night' : 'Catppuccin'}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-[var(--bg-card)] hover:bg-[var(--accent-light)] text-slate-600 dark:text-slate-300 hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer group relative"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[var(--accent-peach)] transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
            )}
            <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap z-50">
              Mode: {isDark ? 'Dark' : 'Light'}
            </span>
          </button>

          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 [writing-mode:vertical-rl] rotate-180 tracking-widest mt-1">
            © 2026.
          </div>
        </div>
      </aside>
    </>
  );
};
