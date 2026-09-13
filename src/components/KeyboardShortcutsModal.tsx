import React, { useState } from 'react';
import { X, Keyboard, Check, Copy, ExternalLink, Terminal, SunMoon, Mail, Radar, Compass, Palette } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerAction: (action: 'terminal' | 'theme' | 'palette' | 'email' | 'sonar') => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
  onTriggerAction,
}) => {
  const [copiedPrLine, setCopiedPrLine] = useState(false);

  if (!isOpen) return null;

  const prSnippet = `- [Kushagra Kumar](https://kk376.github.io) [Frontend Developer | Linux Systems & Open Source]`;

  const copyDirectoryPrLine = () => {
    navigator.clipboard.writeText(prSnippet);
    setCopiedPrLine(true);
    setTimeout(() => setCopiedPrLine(false), 2000);
  };

  const shortcuts = [
    {
      keys: ['/', 'K'],
      label: 'Focus CLI Terminal',
      desc: 'Jump directly to the interactive workstation terminal and focus the prompt',
      icon: <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />,
      action: () => {
        onTriggerAction('terminal');
        onClose();
      },
    },
    {
      keys: ['T'],
      label: 'Toggle Theme Mode',
      desc: 'Switch between light and dark modes',
      icon: <SunMoon className="w-4 h-4 text-[var(--accent-peach)]" />,
      action: () => {
        onTriggerAction('theme');
      },
    },
    {
      keys: ['P'],
      label: 'Switch Theme Palette',
      desc: 'Toggle between Tokyo Night and Catppuccin color schemes',
      icon: <Palette className="w-4 h-4 text-[var(--accent-primary)]" />,
      action: () => {
        onTriggerAction('palette');
      },
    },
    {
      keys: ['C'],
      label: 'Copy Email Address',
      desc: 'Copy personal inbox address directly to your clipboard',
      icon: <Mail className="w-4 h-4 text-[var(--accent-secondary)]" />,
      action: () => {
        onTriggerAction('email');
      },
    },
    {
      keys: ['S'],
      label: 'Launch Tactical Sonar',
      desc: 'Scroll to upstream dispatches and activate the live Cesium shader radar',
      icon: <Radar className="w-4 h-4 text-[var(--accent-cyan)]" />,
      action: () => {
        onTriggerAction('sonar');
        onClose();
      },
    },
    {
      keys: ['?'],
      label: 'Open Shortcuts Helper',
      desc: 'Toggle this reference dialog from anywhere on the page',
      icon: <Keyboard className="w-4 h-4 text-[var(--accent-primary)]" />,
    },
    {
      keys: ['Esc'],
      label: 'Close Active Modal',
      desc: 'Dismiss open dialogs, drawers, and overlay menus',
      icon: <X className="w-4 h-4 text-slate-400" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl rounded-[20px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[var(--bg-card)] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[var(--bg-surface)]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[var(--accent-light)] text-[var(--accent-primary)]">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Command Wire &amp; Shortcuts
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Instant workstation hotkeys for rapid navigation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close shortcuts dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 gap-2.5">
            {shortcuts.map((item) => (
              <div
                key={item.label}
                onClick={item.action}
                className={`p-3 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-[var(--bg-canvas)]/50 flex items-center justify-between gap-4 transition-colors ${
                  item.action ? 'cursor-pointer hover:border-[var(--accent-primary)] hover:bg-[var(--accent-light)]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-[var(--bg-card)] border border-slate-200 dark:border-white/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.action && (
                        <span className="text-[10px] font-mono font-medium text-[var(--accent-primary)] bg-[var(--accent-light)] px-1.5 py-0.5 rounded">
                          Click to run
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.keys.map((key) => (
                    <kbd
                      key={key}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[var(--bg-surface)] border border-slate-200 dark:border-white/10 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Directory Inclusion Section */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                  developer-portfolios Catalog Submission
                </span>
              </div>
              <a
                href="https://github.com/emmabostian/developer-portfolios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent-primary)] hover:underline"
              >
                <span>Directory Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed font-medium">
              Formatted according to the CONTRIBUTING.md checklist for open source developer directories (ordered alphabetically by Kushagra under K).
            </p>

            <div className="p-3 rounded-xl bg-slate-900 dark:bg-[#12141d] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <code className="font-mono text-xs text-[var(--accent-cyan)] break-all select-all">
                {prSnippet}
              </code>
              <button
                onClick={copyDirectoryPrLine}
                className="px-3.5 py-1.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer active:scale-95"
              >
                {copiedPrLine ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy PR Line</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[var(--bg-surface)] flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
          <span>Press Esc anytime to close</span>
          <span className="text-[var(--accent-primary)] font-semibold">Custom Palette Edition</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;
