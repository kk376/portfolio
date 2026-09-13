import React, { useState, useEffect, useCallback } from 'react';
import { Command } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { UpstreamSection } from './components/UpstreamSection';
import { SystemTelemetry } from './components/SystemTelemetry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { PERSONAL_INFO } from './data/portfolioData';

const PortfolioContent: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  };

  const triggerAction = useCallback((action: 'terminal' | 'theme' | 'email' | 'sonar') => {
    switch (action) {
      case 'terminal': {
        const sysSection = document.getElementById('telemetry');
        if (sysSection) {
          sysSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const input = document.querySelector<HTMLInputElement>('#telemetry input');
            if (input) {
              input.focus();
            }
          }, 350);
        }
        showToast('Jumped to CLI Terminal (kkfetch telemetry)');
        break;
      }
      case 'theme': {
        toggleTheme();
        showToast(isDark ? 'Switched to Light Canvas' : 'Switched to Dark Canvas');
        break;
      }
      case 'email': {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        showToast('Copied email to clipboard!');
        break;
      }
      case 'sonar': {
        const upstreamSection = document.getElementById('upstream');
        if (upstreamSection) {
          upstreamSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const openSonarBtn = Array.from(document.querySelectorAll<HTMLButtonElement>('#upstream button'))
              .find((btn) => btn.textContent?.includes('Tactical Sonar'));
            if (openSonarBtn && openSonarBtn.textContent?.includes('Launch Live')) {
              openSonarBtn.click();
            }
          }, 350);
        }
        showToast('Activating Live Cesium Tactical Sonar');
        break;
      }
    }
  }, [toggleTheme, isDark]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        if (e.key === 'Escape') {
          target.blur();
        }
        return;
      }

      const key = e.key.toLowerCase();

      if (
        e.key === '?' ||
        (e.shiftKey && e.key === '/') ||
        ((e.metaKey || e.ctrlKey) && key === 'k')
      ) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShortcutsOpen(false);
      } else if (key === '/' || key === 'k') {
        e.preventDefault();
        triggerAction('terminal');
      } else if (key === 't') {
        e.preventDefault();
        triggerAction('theme');
      } else if (key === 'c') {
        e.preventDefault();
        triggerAction('email');
      } else if (key === 's') {
        e.preventDefault();
        triggerAction('sonar');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerAction]);

  return (
    <div className="min-h-screen bg-[#F9F9FF] dark:bg-[#1E1E28] text-slate-800 dark:text-slate-200 antialiased font-sans transition-colors duration-300">
      {/* Greg Sithole Fixed Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area: Offset for Desktop Sidebar */}
      <main className="md:ml-[100px] min-h-screen">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ResumeSection />
        <ProjectsSection />
        <UpstreamSection />
        <SystemTelemetry />
        <ContactSection />
        <Footer onOpenShortcuts={() => setShortcutsOpen(true)} />
      </main>

      {/* Floating Shortcuts Helper Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setShortcutsOpen(true)}
          className="group relative px-3.5 py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#252536]/90 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:border-[#FF4C60]/60 hover:shadow-lg hover:shadow-[#FF4C60]/10 transition-all duration-200 shadow-md flex items-center gap-2.5 cursor-pointer active:scale-95"
          title="Keyboard Shortcuts (Press ? or ⌘K)"
          aria-label="Open keyboard shortcuts modal"
        >
          <div className="flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[#FF4C60]/10 text-[#FF4C60] border border-[#FF4C60]/20 group-hover:bg-[#FF4C60] group-hover:text-white transition-colors duration-200 shadow-xs">
              <Command className="w-3 h-3 stroke-[2.5]" />
            </span>
            <kbd className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#181824] border border-slate-200 dark:border-white/10 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 shadow-xs group-hover:border-[#FF4C60]/40 group-hover:text-[#FF4C60] transition-colors">
              ?
            </kbd>
          </div>
          <span className="text-[11px] font-semibold tracking-wide text-slate-700 dark:text-slate-300 group-hover:text-[#FF4C60] transition-colors">
            Shortcuts
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Keyboard navigation active" />
        </button>
      </div>

      {/* Action Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-4 py-2.5 rounded-full border border-[#FF4C60]/40 bg-[#1E1E28] text-white font-mono text-xs shadow-xl flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF4C60] animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsModal
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
        onTriggerAction={triggerAction}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;
