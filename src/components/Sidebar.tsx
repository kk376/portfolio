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
  { name: 'Upstream', href: '#upstream', icon: GitPullRequest },
  { name: 'Telemetry', href: '#telemetry', icon: Terminal },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Sidebar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
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
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-[#1E1E28]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 z-40 px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          <span>KK</span>
          <span className="w-2 h-2 rounded-full bg-[#FF4C60]" />
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-[#FFD15C]" /> : <Moon className="w-5 h-5 text-slate-700" />}
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

          <aside className="relative w-72 max-w-[80vw] bg-white dark:bg-[#1E1E28] h-full p-6 shadow-2xl flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10">
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1 font-bold text-2xl tracking-tight text-slate-900 dark:text-white"
                >
                  <span>KK</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF4C60]" />
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
                          ? 'bg-[#FF4C60] text-white shadow-md'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#FF4C60]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Apprentice Engineer</span>
              <span>© 2026 kk376</span>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[100px] bg-white dark:bg-[#1E1E28] border-r border-slate-200/80 dark:border-white/5 z-50 flex-col items-center justify-between py-7 select-none shadow-sm">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="flex items-center gap-0.5 font-bold text-2xl tracking-tight text-slate-900 dark:text-white group"
          title="Kushagra Kumar"
        >
          <span className="group-hover:text-[#FF4C60] transition-colors">KK</span>
          <span className="w-2 h-2 rounded-full bg-[#FF4C60] animate-pulse" />
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
                    ? 'text-[#FF4C60] bg-rose-50 dark:bg-rose-950/40 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-[#FF4C60] hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                {/* Floating Tooltip */}
                <span className="pointer-events-none absolute left-full ml-3.5 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap z-50">
                  {item.name}
                </span>
                {isActive && (
                  <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-[#FF4C60]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions: Theme Toggle and Vertical Copyright */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle light/dark theme"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-[#252536] hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-600 dark:text-slate-300 hover:text-[#FF4C60] transition-all duration-200"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#FFD15C] transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 [writing-mode:vertical-rl] rotate-180 tracking-widest">
            © 2026.
          </div>
        </div>
      </aside>
    </>
  );
};
