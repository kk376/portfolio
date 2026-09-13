import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProfileText } from './components/AboutProfileText';
import { DeveloperNetwork } from './components/DeveloperNetwork';
import { TechStackSection } from './components/TechStackSection';
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
        const sysSection = document.getElementById('system');
        if (sysSection) {
          sysSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const terminalTabBtn = document.querySelector<HTMLButtonElement>(
              '#system button:nth-of-type(2)'
            );
            if (terminalTabBtn && !terminalTabBtn.classList.contains('bg-[#7148fc]')) {
              terminalTabBtn.click();
            }
            const input = document.querySelector<HTMLInputElement>('#system input');
            if (input) {
              input.focus();
            }
          }, 350);
        }
        showToast('Jumped to CLI Terminal (kkfetch benchmark)');
        break;
      }
      case 'theme': {
        toggleTheme();
        showToast(isDark ? 'Switched to Light Canvas' : 'Switched to Slate Dark Mode');
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

      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
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
    <div className="min-h-screen bg-[#f3f6fb] dark:bg-[#15161e] text-slate-900 dark:text-[#f3f4f6] antialiased font-sans transition-colors duration-200">
      <Navbar onOpenShortcuts={() => setShortcutsOpen(true)} />
      <main>
        <Hero />
        <AboutProfileText />
        <DeveloperNetwork />
        <TechStackSection />
        <ProjectsSection />
        <UpstreamSection />
        <SystemTelemetry />
        <ContactSection />
      </main>
      <Footer onOpenShortcuts={() => setShortcutsOpen(true)} />

      {/* Floating Shortcuts Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setShortcutsOpen(true)}
          className="group px-3.5 py-2 rounded-full border border-slate-200 dark:border-[#2d3042] bg-white/95 dark:bg-[#202230]/95 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:border-[#7148fc] text-xs font-mono transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          title="Press ? for keyboard shortcuts"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#15161e] border border-slate-200 dark:border-slate-700 font-mono text-[10px] font-bold text-[#7148fc] dark:text-[#09d8ff]">
            ?
          </kbd>
          <span className="text-[11px] font-quicksand font-bold group-hover:text-[#7148fc] dark:group-hover:text-[#09d8ff]">
            Shortcuts
          </span>
        </button>
      </div>

      {/* Action Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-4 py-2.5 rounded-full border border-[#7148fc]/40 bg-[#15161e] text-white font-mono text-xs shadow-xl flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#09d8ff] animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
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
