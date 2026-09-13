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
    <section id="system" className="py-20 md:py-24 border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 bg-[#f9f7f3] dark:bg-[#141416] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0e8] dark:bg-[#1f1f23] border border-[rgba(32,32,32,0.1)] dark:border-white/10 text-xs font-mono font-medium text-[#ea2804]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea2804]" />
                <span>BENCHMARK // WORKSTATION TELEMETRY</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#202020] dark:text-[#fcfcfc] tracking-tight leading-tight max-w-3xl">
              Workstation environment. Hardware specifications and microsecond fetch.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#575757] dark:text-[#a0a0a0] mt-3 max-w-2xl leading-relaxed">
              Raw Linux workstation diagnostics on Fedora 44 with hybrid graphics, measured using kkfetch compiled in Rust with direct kernel procfs queries.
            </p>
          </div>

          {/* Replicate Pill Switcher */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all active:scale-95 ${
                activeTab === 'specs'
                  ? 'bg-[#ea2804] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1f1f23] text-neutral-700 dark:text-neutral-300 border border-[rgba(32,32,32,0.1)] dark:border-white/10 hover:border-[#ea2804]/40 hover:bg-[#f3f0e8] dark:hover:bg-[#28282c]'
              }`}
            >
              Structured Spec Sheet
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all active:scale-95 ${
                activeTab === 'terminal'
                  ? 'bg-[#ea2804] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1f1f23] text-neutral-700 dark:text-neutral-300 border border-[rgba(32,32,32,0.1)] dark:border-white/10 hover:border-[#ea2804]/40 hover:bg-[#f3f0e8] dark:hover:bg-[#28282c]'
              }`}
            >
              Interactive CLI Terminal
            </button>
          </div>
        </div>

        {activeTab === 'specs' ? (
          /* Structured Specs Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <Monitor className="w-4 h-4 text-[#ea2804]" />
                    SPEC 01 // PLATFORM
                  </span>
                  <span className="text-neutral-400">OS</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">{SYSTEM_SPECS.os}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{SYSTEM_SPECS.kernel}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px] text-neutral-500">
                Host: {SYSTEM_SPECS.host}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <Cpu className="w-4 h-4 text-[#ff6a3d]" />
                    SPEC 02 // COMPUTE
                  </span>
                  <span className="text-neutral-400">CPU</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">{SYSTEM_SPECS.cpu}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">6 Cores / 12 Threads (Zen 3)</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px] text-neutral-500">
                Architecture: x86_64
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <Layers className="w-4 h-4 text-[#2b9a66]" />
                    SPEC 03 // GRAPHICS
                  </span>
                  <span className="text-neutral-400">GPU</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">Hybrid MUXless GPU</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{SYSTEM_SPECS.gpu}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px] text-neutral-500">
                Compositor: Wayland
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <HardDrive className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                    SPEC 04 // MEMORY
                  </span>
                  <span className="text-neutral-400">RAM</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">{SYSTEM_SPECS.memory}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">System Uptime: {SYSTEM_SPECS.uptime}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px] text-neutral-500">
                Packages: {SYSTEM_SPECS.packages}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <Terminal className="w-4 h-4 text-[#ea2804]" />
                    SPEC 05 // ENVIRONMENT
                  </span>
                  <span className="text-neutral-400">SHELL</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">{SYSTEM_SPECS.shell}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{SYSTEM_SPECS.terminal}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 font-mono text-[11px] text-neutral-500">
                Automation: Bash Suite
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(32,32,32,0.12)] dark:border-white/10 bg-white dark:bg-[#1f1f23] p-6 shadow-sm flex flex-col justify-between hover:border-[#ea2804]/30 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(32,32,32,0.08)] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#202020] dark:text-[#fcfcfc] font-semibold">
                    <Info className="w-4 h-4 text-[#2b9a66]" />
                    SPEC 06 // TOOLCHAIN
                  </span>
                  <span className="text-neutral-400">IDE</span>
                </div>
                <div className="font-display text-2xl font-bold text-[#202020] dark:text-[#fcfcfc] mb-1">{SYSTEM_SPECS.editor}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">Rust 1.85 / GCC 15 / Node 22</div>
              </div>

              <button
                onClick={copySpecs}
                className="mt-5 pt-3 border-t border-[rgba(32,32,32,0.06)] dark:border-white/5 inline-flex items-center justify-between font-mono text-xs font-semibold text-[#202020] dark:text-[#fcfcfc] hover:text-[#ea2804] dark:hover:text-[#ff6a3d] transition-colors"
              >
                <span>{copied ? 'Specs copied to clipboard' : 'Copy specification text'}</span>
                {copied ? <Check className="w-4 h-4 text-[#2b9a66]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ) : (
          /* Replicate Dark Code Well Terminal */
          <div className="rounded-2xl border border-white/10 bg-[#202020] text-white shadow-xl overflow-hidden">
            {/* Window header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#151515]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="font-mono text-xs text-neutral-400 ml-2">
                  victus-station / kkfetch-bench
                </span>
              </div>

              {/* Quick action chips */}
              <div className="flex items-center gap-2">
                {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#ea2804] text-neutral-300 hover:text-white text-[11px] font-mono transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body with locked window position */}
            <div
              ref={terminalScrollRef}
              className="p-6 h-80 overflow-y-auto space-y-4 font-mono text-xs bg-[#202020]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-[#ea2804] font-semibold">kk376@victus</span>
                    <span className="text-neutral-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-neutral-400">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3">{item.output}</div>
                </div>
              ))}

              {/* Active input line */}
              <div className="flex items-center gap-2 text-neutral-400 pt-1">
                <span className="text-[#ea2804] font-semibold">kk376@victus</span>
                <span className="text-neutral-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-400">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command pill above..."
                  className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs placeholder:text-neutral-600"
                />
              </div>
            </div>

            <div className="px-5 py-2.5 border-t border-white/5 text-[11px] font-mono text-neutral-500 flex items-center justify-between bg-[#18181a]">
              <span>Press Enter to execute</span>
              <span className="text-[#2b9a66]">Isolated Viewport (No Page Jump)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
