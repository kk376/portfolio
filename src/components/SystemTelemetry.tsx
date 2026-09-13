import React, { useState, useRef } from 'react';
import { Terminal, Cpu, HardDrive, Monitor, Layers, Copy, Check, Info } from 'lucide-react';
import { SYSTEM_SPECS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const SystemTelemetry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'terminal'>('specs');
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalScrollRef = useRef<HTMLDivElement | null>(null);

  const renderKkfetchAscii = () => (
    <div className="font-mono text-xs text-slate-200 py-1 leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        <div className="md:col-span-4 text-cyan-400 font-mono text-[11px] leading-tight select-none whitespace-pre bg-black/40 p-3 rounded border border-white/[0.06]">
{`       .----------------.
      |      _   _       |
      |     | | / /      |
      |     | |/ /       |
      |     | |\\ \\       |
      |     |_| \\_\\      |
      |                  |
      |    KUSHAGRA      |
      |     KUMAR        |
       '----------------'
       [FEDORA 44 // KK]`}
        </div>

        <div className="md:col-span-8 space-y-1 text-xs">
          <div className="text-emerald-400 font-semibold border-b border-white/[0.08] pb-1 mb-1.5 flex items-center justify-between">
            <span>{SYSTEM_SPECS.user}@{SYSTEM_SPECS.host}</span>
            <span className="text-[10px] text-slate-500 font-normal">kkfetch v1.2 [Rust]</span>
          </div>

          <div><span className="text-slate-500 font-medium">OS:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.os}</span></div>
          <div><span className="text-slate-500 font-medium">Kernel:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.kernel}</span></div>
          <div><span className="text-slate-500 font-medium">Uptime:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.uptime}</span></div>
          <div><span className="text-slate-500 font-medium">Packages:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.packages}</span></div>
          <div><span className="text-slate-500 font-medium">Shell:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.shell}</span></div>
          <div><span className="text-slate-500 font-medium">CPU:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.cpu}</span></div>
          <div><span className="text-slate-500 font-medium">GPU:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.gpu}</span></div>
          <div><span className="text-slate-500 font-medium">Memory:</span> <span className="text-slate-300 ml-1.5">{SYSTEM_SPECS.memory}</span></div>

          <div className="flex gap-1 pt-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
            <span className="w-2.5 h-2.5 rounded-sm bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'kkfetch',
      output: renderKkfetchAscii(),
    },
  ]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'kkfetch':
      case 'fetch':
        outputNode = renderKkfetchAscii();
        break;

      case 'projects':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-cyan-400 font-semibold">Active Codebases:</div>
            <div>• fedora-post-install (v5.5.7, 1600+ lines bash)</div>
            <div>• kkfetch (Rust microsecond system fetcher)</div>
            <div>• kkpdf-zed (Native PDF document engine for Zed)</div>
            <div>• dev-suite (Engineering standards and security auditing)</div>
          </div>
        );
        break;

      case 'prs':
      case 'upstream':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-cyan-400 font-semibold">Upstream Contributions:</div>
            <div>• mission-center-devs/gng !117 (D3cold power thrash fix)</div>
            <div>• mission-center-devs/mission-center #544 (Wayland freeze root cause)</div>
            <div>• bilawalsidhu/gods-eye-view #214 (Tactical Sonar Cesium shader)</div>
            <div>• bilawalsidhu/gods-eye-view #216 (WCAG accessibility fix)</div>
            <div>• zed-industries/zed #63727 (Wayland shutdown timeout investigation)</div>
          </div>
        );
        break;

      case 'help':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div><span className="text-cyan-400">kkfetch</span>: print system hardware specifications</div>
            <div><span className="text-cyan-400">upstream</span>: list upstream pull requests and merge requests</div>
            <div><span className="text-cyan-400">projects</span>: list flagship codebases</div>
            <div><span className="text-cyan-400">clear</span>: clear terminal window</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-amber-400 py-0.5">
            command not found: {trimmed}. Type 'help' for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal('');

    // Fix: Only scroll the internal container, NEVER call window.scroll or scrollIntoView!
    setTimeout(() => {
      if (terminalScrollRef.current) {
        terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
      }
    }, 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const copySpecs = () => {
    const text = `${SYSTEM_SPECS.user}@${SYSTEM_SPECS.host}\nOS: ${SYSTEM_SPECS.os}\nKernel: ${SYSTEM_SPECS.kernel}\nCPU: ${SYSTEM_SPECS.cpu}\nGPU: ${SYSTEM_SPECS.gpu}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="system" className="py-20 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
              Workstation & Diagnostics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              System Environment & kkfetch
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Structured View
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'terminal'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Interactive CLI
            </button>
          </div>
        </div>

        {activeTab === 'specs' ? (
          /* Structured Specs Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 dark:hover:border-cyan-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <Monitor className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Operating System</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{SYSTEM_SPECS.os}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{SYSTEM_SPECS.kernel}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-400/50 dark:hover:border-emerald-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Processor Unit</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{SYSTEM_SPECS.cpu}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">6 Cores / 12 Threads</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-purple-400/50 dark:hover:border-purple-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Graphics Configuration</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Hybrid Graphics (MUXless)</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{SYSTEM_SPECS.gpu}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <HardDrive className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Memory & State</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{SYSTEM_SPECS.memory}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">Uptime: {SYSTEM_SPECS.uptime}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 dark:hover:border-cyan-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-500" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>User Environment</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{SYSTEM_SPECS.shell}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{SYSTEM_SPECS.terminal}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0b0d16] border border-slate-200 dark:border-white/[0.08] hover:border-pink-400/50 dark:hover:border-pink-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-xl relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-rose-500" />
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                  <Info className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span>Editor & Toolchain</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{SYSTEM_SPECS.editor}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">Rust 1.85 / GCC 15</div>
              </div>

              <button
                onClick={copySpecs}
                className="mt-3 inline-flex items-center justify-between text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors pt-2 border-t border-slate-100 dark:border-white/[0.04]"
              >
                <span>{copied ? 'Specs Copied!' : 'Copy Telemetry Text'}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ) : (
          /* Interactive CLI View with strict internal scrolling */
          <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-white/[0.08] bg-[#0c0e17] dark:bg-[#07080c] shadow-md dark:shadow-xl">
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] dark:bg-white/[0.02] border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                <span className="font-mono text-xs text-slate-400 ml-2">
                  kk376@victus-station: ~ (kkfetch v1.2)
                </span>
              </div>

              {/* Quick action chips */}
              <div className="flex items-center gap-1.5">
                {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.06] text-[11px] font-mono transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body with locked window position */}
            <div
              ref={terminalScrollRef}
              className="p-4 sm:p-5 h-80 overflow-y-auto space-y-3 font-mono text-xs"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">kk376@victus</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-slate-500">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3">{item.output}</div>
                </div>
              ))}

              {/* Active input line */}
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <span className="text-emerald-400">kk376@victus</span>
                <span className="text-slate-600">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-500">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command above..."
                  className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="px-4 py-1.5 bg-white/[0.02] border-t border-white/[0.04] text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>Type command and press Enter</span>
              <span className="text-slate-400">No automatic page scroll</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
