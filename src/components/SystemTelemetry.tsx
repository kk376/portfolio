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
    <section id="system" className="py-24 border-t border-white/20 relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.2em] font-bold mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Workstation Bench // Hardware Diagnostics</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              System Environment & kkfetch
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('specs')}
              className={`text-xs uppercase tracking-wider transition-colors ${
                activeTab === 'specs'
                  ? 'bg-verge-mint text-black font-mono font-bold px-4 py-2 rounded-full'
                  : 'border border-white/20 text-white/70 hover:text-white font-mono px-4 py-2 rounded-full'
              }`}
            >
              Structured Telemetry
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`text-xs uppercase tracking-wider transition-colors ${
                activeTab === 'terminal'
                  ? 'bg-verge-mint text-black font-mono font-bold px-4 py-2 rounded-full'
                  : 'border border-white/20 text-white/70 hover:text-white font-mono px-4 py-2 rounded-full'
              }`}
            >
              Interactive Terminal
            </button>
          </div>
        </div>

        {activeTab === 'specs' ? (
          /* Structured Specs Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-mint transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.14em] mb-3">
                  <Monitor className="w-4 h-4 text-verge-mint" />
                  <span>Platform // OS</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">{SYSTEM_SPECS.os}</div>
                <div className="font-mono text-xs text-[#949494]">{SYSTEM_SPECS.kernel}</div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-[#949494] uppercase tracking-wider">
                Workstation Host: {SYSTEM_SPECS.host}
              </div>
            </div>

            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-yellow transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-yellow uppercase tracking-[0.14em] mb-3">
                  <Cpu className="w-4 h-4 text-verge-yellow" />
                  <span>Compute // Processor</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">{SYSTEM_SPECS.cpu}</div>
                <div className="font-mono text-xs text-[#949494]">6 Cores / 12 Threads (4.0 GHz Boost)</div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-[#949494] uppercase tracking-wider">
                Architecture: x86_64 Zen 3
              </div>
            </div>

            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-violet transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.14em] mb-3">
                  <Layers className="w-4 h-4 text-verge-mint" />
                  <span>Graphics Configuration</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">Hybrid MUXless GPU</div>
                <div className="font-mono text-xs text-[#949494]">{SYSTEM_SPECS.gpu}</div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-[#949494] uppercase tracking-wider">
                Wayland Compositor Active
              </div>
            </div>

            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-mint transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.14em] mb-3">
                  <HardDrive className="w-4 h-4 text-verge-mint" />
                  <span>Memory & System State</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">{SYSTEM_SPECS.memory}</div>
                <div className="font-mono text-xs text-[#949494]">Uptime: {SYSTEM_SPECS.uptime}</div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-[#949494] uppercase tracking-wider">
                Active Packages: {SYSTEM_SPECS.packages}
              </div>
            </div>

            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-yellow transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-yellow uppercase tracking-[0.14em] mb-3">
                  <Terminal className="w-4 h-4 text-verge-yellow" />
                  <span>User Shell & Terminal</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">{SYSTEM_SPECS.shell}</div>
                <div className="font-mono text-xs text-[#949494]">{SYSTEM_SPECS.terminal}</div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-[#949494] uppercase tracking-wider">
                Custom Bash Automation
              </div>
            </div>

            <div className="p-6 bg-[#2d2d2d] border border-white/10 hover:border-verge-violet transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-verge-mint uppercase tracking-[0.14em] mb-3">
                  <Info className="w-4 h-4 text-verge-mint" />
                  <span>Toolchain & Editor</span>
                </div>
                <div className="font-display text-xl uppercase tracking-wider text-white mb-1">{SYSTEM_SPECS.editor}</div>
                <div className="font-mono text-xs text-[#949494]">Rust 1.85 / GCC 15 / Node 22</div>
              </div>

              <button
                onClick={copySpecs}
                className="mt-6 pt-3 border-t border-white/10 inline-flex items-center justify-between font-mono text-xs text-white hover:text-verge-mint transition-colors"
              >
                <span>{copied ? 'Specs Copied to Clipboard' : 'Copy System Telemetry'}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-verge-mint" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ) : (
          /* Interactive CLI View with strict internal scrolling */
          <div className="border border-white/20 bg-[#1e1e1e] overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#2d2d2d] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-verge-mint inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-verge-yellow inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-verge-violet inline-block" />
                <span className="font-mono text-xs text-[#949494] ml-3 uppercase tracking-wider">
                  kk376@victus-station: ~ (kkfetch v1.2)
                </span>
              </div>

              {/* Quick action chips */}
              <div className="flex items-center gap-2">
                {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2.5 py-1 border border-white/20 hover:border-verge-mint hover:text-verge-mint text-white text-[11px] font-mono uppercase tracking-wider transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body with locked window position */}
            <div
              ref={terminalScrollRef}
              className="p-6 h-80 overflow-y-auto space-y-4 font-mono text-xs bg-[#131313]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#949494]">
                    <span className="text-verge-mint font-bold">kk376@victus</span>
                    <span className="text-white/40">:</span>
                    <span className="text-verge-yellow">~</span>
                    <span className="text-white/60">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3">{item.output}</div>
                </div>
              ))}

              {/* Active input line */}
              <div className="flex items-center gap-2 text-[#949494] pt-1">
                <span className="text-verge-mint font-bold">kk376@victus</span>
                <span className="text-white/40">:</span>
                <span className="text-verge-yellow">~</span>
                <span className="text-white/60">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command chip above..."
                  className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs placeholder:text-[#949494]/60"
                />
              </div>
            </div>

            <div className="px-5 py-2.5 bg-[#2d2d2d] border-t border-white/10 text-[10px] font-mono text-[#949494] flex items-center justify-between uppercase tracking-wider">
              <span>Press Enter to execute</span>
              <span className="text-verge-mint">Isolated Viewport (No Page Jump)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
