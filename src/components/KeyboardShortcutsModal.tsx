import React from 'react';
import { X, Keyboard, Terminal, SunMoon, Mail, Radar } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerAction: (action: 'terminal' | 'theme' | 'email' | 'sonar') => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
  onTriggerAction,
}) => {
  if (!isOpen) return null;

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
      desc: 'Scroll to open source contributions and activate the live Cesium shader radar',
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
        className="relative w-full max-w-2xl rounded-[20px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1e1e2e] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181825]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[var(--accent-light)] text-[var(--accent-primary)]">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Command Wire &amp; Shortcuts
              </h3>
              <p className="text-xs text-slate-500 dark:text-[#a6adc8] font-medium">
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
                className={`p-3 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-[#252538]/70 flex items-center justify-between gap-4 transition-colors ${
                  item.action
                    ? 'cursor-pointer hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-light)] dark:hover:bg-[#313244]'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#181825] border border-slate-200 dark:border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-[#cdd6f4] flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.action && (
                        <span className="text-[10px] font-mono font-medium text-[var(--accent-primary)] bg-[var(--accent-light)] px-1.5 py-0.5 rounded">
                          Click to run
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-[#a6adc8] font-medium">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.keys.map((key) => (
                    <kbd
                      key={key}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[#181825] border border-slate-200 dark:border-white/10 font-mono text-xs font-bold text-slate-800 dark:text-[#cdd6f4] shadow-xs"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181825] flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-[#a6adc8]">
          <span>Press Esc anytime to close</span>
          <span className="text-[var(--accent-primary)] font-semibold">Catppuccin Edition</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;

