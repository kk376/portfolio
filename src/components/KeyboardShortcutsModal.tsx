import React, { useState } from 'react';
import { X, Keyboard, Check, Copy, ExternalLink, Terminal, SunMoon, Mail, Radar, Compass } from 'lucide-react';

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
  const [copiedPrLine, setCopiedPrLine] = useState(false);

  if (!isOpen) return null;

  const prSnippet = `- [Kushagra Kumar](https://kk376.github.io) [Apprentice Software Engineer | Linux Systems Automation & Frontend]`;

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
      icon: <Terminal className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
      action: () => {
        onTriggerAction('terminal');
        onClose();
      },
    },
    {
      keys: ['T'],
      label: 'Toggle Theme',
      desc: 'Switch between light Aurora canvas and dark Midnight mode',
      icon: <SunMoon className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
      action: () => {
        onTriggerAction('theme');
      },
    },
    {
      keys: ['C'],
      label: 'Copy Email Address',
      desc: 'Copy personal inbox address directly to your clipboard',
      icon: <Mail className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
      action: () => {
        onTriggerAction('email');
      },
    },
    {
      keys: ['S'],
      label: 'Launch Tactical Sonar',
      desc: 'Scroll to upstream dispatches and activate the live Cesium shader radar',
      icon: <Radar className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
      action: () => {
        onTriggerAction('sonar');
        onClose();
      },
    },
    {
      keys: ['?'],
      label: 'Open Shortcuts Helper',
      desc: 'Toggle this reference dialog from anywhere on the page',
      icon: <Keyboard className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
    },
    {
      keys: ['Esc'],
      label: 'Close Active Modal',
      desc: 'Dismiss open dialogs, drawers, and overlay menus',
      icon: <X className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a101d]/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#0a101d]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#533afd]/10 dark:bg-[#533afd]/20 text-[#533afd] dark:text-[#00d4ff]">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#0d253d] dark:text-[#f8fafc]">
                Command Wire & Shortcuts
              </h3>
              <p className="font-sans text-xs text-[#64748d] dark:text-[#94a3b8]">
                Instant workstation hotkeys for rapid navigation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748d] hover:text-[#0d253d] dark:text-[#94a3b8] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
                className={`p-3 rounded-xl border border-[#e3e8ee] dark:border-white/5 bg-[#f6f9fc]/50 dark:bg-[#1e293b]/40 flex items-center justify-between gap-4 transition-colors ${
                  item.action ? 'cursor-pointer hover:border-[#533afd]/30 hover:bg-[#533afd]/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#0f172a] border border-[#e3e8ee] dark:border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-[#0d253d] dark:text-[#f8fafc] flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.action && (
                        <span className="text-[10px] font-mono font-medium text-[#533afd] dark:text-[#00d4ff] bg-[#533afd]/10 px-1.5 py-0.5 rounded">
                          Click to run
                        </span>
                      )}
                    </div>
                    <div className="font-sans text-[11px] text-[#64748d] dark:text-[#94a3b8]">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.keys.map((key) => (
                    <kbd
                      key={key}
                      className="px-2 py-1 rounded-md bg-white dark:bg-[#0a101d] border border-[#e3e8ee] dark:border-white/15 font-mono text-xs font-semibold text-[#0d253d] dark:text-[#f8fafc] shadow-xs"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Directory Inclusion Section */}
          <div className="mt-4 pt-4 border-t border-[#e3e8ee] dark:border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#533afd] dark:text-[#00d4ff]" />
                <span className="font-mono text-xs font-semibold text-[#0d253d] dark:text-[#f8fafc]">
                  developer-portfolios Catalog Submission
                </span>
              </div>
              <a
                href="https://github.com/emmabostian/developer-portfolios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#533afd] dark:text-[#00d4ff] hover:underline"
              >
                <span>Directory Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-sans text-[11px] text-[#64748d] dark:text-[#94a3b8] mb-3 leading-relaxed">
              Formatted according to the CONTRIBUTING.md checklist for Emma Bostian's open source developer directory (ordered alphabetically by Kushagra under K).
            </p>

            <div className="p-3 rounded-xl bg-[#0d253d] dark:bg-[#080b11] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <code className="font-mono text-xs text-cyan-300 break-all select-all">
                {prSnippet}
              </code>
              <button
                onClick={copyDirectoryPrLine}
                className="px-3 py-1.5 rounded-full bg-[#533afd] hover:bg-[#4434d4] text-white font-sans text-xs font-medium inline-flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-sm cursor-pointer"
              >
                {copiedPrLine ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00d4ff]" />
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
        <div className="px-6 py-3 border-t border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#0a101d] flex items-center justify-between font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8]">
          <span>Press Esc anytime to close</span>
          <span className="text-[#533afd] dark:text-[#00d4ff] font-medium">Stripe Iridescent Standard</span>
        </div>
      </div>
    </div>
  );
};
