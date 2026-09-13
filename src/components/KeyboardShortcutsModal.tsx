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
      icon: <Terminal className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
      action: () => {
        onTriggerAction('terminal');
        onClose();
      },
    },
    {
      keys: ['T'],
      label: 'Toggle Theme',
      desc: 'Switch between light canvas and dark slate mode',
      icon: <SunMoon className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
      action: () => {
        onTriggerAction('theme');
      },
    },
    {
      keys: ['C'],
      label: 'Copy Email Address',
      desc: 'Copy personal inbox address directly to your clipboard',
      icon: <Mail className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
      action: () => {
        onTriggerAction('email');
      },
    },
    {
      keys: ['S'],
      label: 'Launch Tactical Sonar',
      desc: 'Scroll to upstream dispatches and activate the live Cesium shader radar',
      icon: <Radar className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
      action: () => {
        onTriggerAction('sonar');
        onClose();
      },
    },
    {
      keys: ['?'],
      label: 'Open Shortcuts Helper',
      desc: 'Toggle this reference dialog from anywhere on the page',
      icon: <Keyboard className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
    },
    {
      keys: ['Esc'],
      label: 'Close Active Modal',
      desc: 'Dismiss open dialogs, drawers, and overlay menus',
      icon: <X className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-[#2d3042] bg-white dark:bg-[#202230] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#2d3042] bg-slate-50 dark:bg-[#15161e]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-[#7148fc] dark:text-[#09d8ff]">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-quicksand text-base font-bold text-slate-900 dark:text-white">
                Command Wire &amp; Shortcuts
              </h3>
              <p className="font-quicksand text-xs text-slate-500 dark:text-slate-400 font-medium">
                Instant workstation hotkeys for rapid navigation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#15161e] transition-colors cursor-pointer"
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
                className={`p-3 rounded-xl border border-slate-200/80 dark:border-[#2d3042] bg-slate-50/50 dark:bg-[#15161e]/40 flex items-center justify-between gap-4 transition-colors ${
                  item.action ? 'cursor-pointer hover:border-[#7148fc] hover:bg-purple-50/40 dark:hover:bg-purple-950/30' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#202230] border border-slate-200 dark:border-[#2d3042] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-quicksand text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.action && (
                        <span className="text-[10px] font-mono font-medium text-[#7148fc] dark:text-[#09d8ff] bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.5 rounded">
                          Click to run
                        </span>
                      )}
                    </div>
                    <div className="font-quicksand text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.keys.map((key) => (
                    <kbd
                      key={key}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[#15161e] border border-slate-200 dark:border-slate-700 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Directory Inclusion Section */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-[#2d3042]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                  developer-portfolios Catalog Submission
                </span>
              </div>
              <a
                href="https://github.com/emmabostian/developer-portfolios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#7148fc] dark:text-[#09d8ff] hover:underline"
              >
                <span>Directory Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-quicksand text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed font-medium">
              Formatted according to the CONTRIBUTING.md checklist for open source developer directories (ordered alphabetically by Kushagra under K).
            </p>

            <div className="p-3 rounded-xl bg-slate-900 dark:bg-[#15161e] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <code className="font-mono text-xs text-[#09d8ff] break-all select-all">
                {prSnippet}
              </code>
              <button
                onClick={copyDirectoryPrLine}
                className="px-3.5 py-1.5 rounded-full bg-[#7148fc] hover:bg-[#5d35e0] text-white font-quicksand text-xs font-bold inline-flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer active:scale-95"
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
        <div className="px-6 py-3 border-t border-slate-200 dark:border-[#2d3042] bg-slate-50 dark:bg-[#15161e] flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
          <span>Press Esc anytime to close</span>
          <span className="text-[#7148fc] dark:text-[#09d8ff] font-semibold">Andrew Baisden Style</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;
