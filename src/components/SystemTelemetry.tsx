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
        <div className="md:col-span-4 text-cyan-400 font-mono text-[11px] leading-tight select-none whitespace-pre bg-black/40 p-3 rounded-lg border border-white/[0.08]">
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

        <div className="md:col-span-8 space-y-1 text-xs tabular-nums">
          <div className="text-cyan-400 font-semibold border-b border-white/[0.08] pb-1 mb-1.5 flex items-center justify-between">
            <span>{SYSTEM_SPECS.user}@{SYSTEM_SPECS.host}</span>
            <span className="text-[10px] text-slate-400 font-normal">kkfetch v1.2 [Rust]</span>
          </div>

          <div><span className="text-slate-400 font-medium">OS:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.os}</span></div>
          <div><span className="text-slate-400 font-medium">Kernel:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.kernel}</span></div>
          <div><span className="text-slate-400 font-medium">Uptime:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.uptime}</span></div>
          <div><span className="text-slate-400 font-medium">Packages:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.packages}</span></div>
          <div><span className="text-slate-400 font-medium">Shell:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.shell}</span></div>
          <div><span className="text-slate-400 font-medium">CPU:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.cpu}</span></div>
          <div><span className="text-slate-400 font-medium">GPU:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.gpu}</span></div>
          <div><span className="text-slate-400 font-medium">Memory:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.memory}</span></div>

          <div className="flex gap-1 pt-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ea2261]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#533afd]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ff9f43]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00d4ff]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#7a5af8]" />
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
            <div>* fedora-post-install (v5.5.7, 1600+ lines bash)</div>
            <div>* kkfetch (Rust microsecond system fetcher)</div>
            <div>* kkpdf-zed (Native PDF document engine for Zed)</div>
            <div>* dev-suite (Engineering standards and security auditing)</div>
          </div>
        );
        break;

      case 'prs':
      case 'upstream':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-cyan-400 font-semibold">Upstream Contributions:</div>
            <div>* mission-center-devs/gng !117 (D3cold power thrash fix)</div>
            <div>* mission-center-devs/mission-center #544 (Wayland freeze root cause)</div>
            <div>* bilawalsidhu/gods-eye-view #214 (Tactical Sonar Cesium shader)</div>
            <div>* bilawalsidhu/gods-eye-view #216 (WCAG accessibility fix)</div>
            <div>* zed-industries/zed #63727 (Wayland shutdown timeout investigation)</div>
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
    <section id="system" className="py-20 md:py-24 border-b border-[#e3e8ee] dark:border-white/10 bg-[#f6f9fc] dark:bg-[#0a101d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 dark:bg-[#533afd]/20 border border-[#533afd]/20 text-xs font-mono font-semibold text-[#533afd] dark:text-[#a8c3de]">
                <span className="w-2 h-2 rounded-full bg-[#533afd] dark:bg-[#00d4ff]" />
                <span>BENCHMARK // WORKSTATION TELEMETRY</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#0d253d] dark:text-[#f8fafc] tracking-[-0.03em] leading-tight max-w-3xl">
              Workstation environment. Hardware specifications and microsecond fetch.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748d] dark:text-[#94a3b8] mt-3 max-w-2xl leading-relaxed">
              Raw Linux workstation diagnostics on Fedora 44 with hybrid graphics, measured using kkfetch compiled in Rust with direct kernel procfs queries.
            </p>
          </div>

          {/* Stripe Pill Switcher */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-medium transition-all active:scale-95 ${
                activeTab === 'specs'
                  ? 'bg-[#533afd] text-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-[#0f172a] text-[#273951] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 hover:border-[#533afd]/40'
              }`}
            >
              Structured Spec Sheet
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-medium transition-all active:scale-95 ${
                activeTab === 'terminal'
                  ? 'bg-[#533afd] text-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-[#0f172a] text-[#273951] dark:text-[#94a3b8] border border-[#e3e8ee] dark:border-white/10 hover:border-[#533afd]/40'
              }`}
            >
              Interactive CLI Terminal
            </button>
          </div>
        </div>

        {activeTab === 'specs' ? (
          /* Structured Specs Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <Monitor className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 01 // PLATFORM
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">OS</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">{SYSTEM_SPECS.os}</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8] tabular-nums">{SYSTEM_SPECS.kernel}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8] tabular-nums">
                Host: {SYSTEM_SPECS.host}
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <Cpu className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 02 // COMPUTE
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">CPU</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">{SYSTEM_SPECS.cpu}</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8] tabular-nums">6 Cores / 12 Threads (Zen 3)</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8]">
                Architecture: x86_64
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <Layers className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 03 // GRAPHICS
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">GPU</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">Hybrid MUXless GPU</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8]">{SYSTEM_SPECS.gpu}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8]">
                Compositor: Wayland
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <HardDrive className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 04 // MEMORY
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">RAM</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">{SYSTEM_SPECS.memory}</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8] tabular-nums">System Uptime: {SYSTEM_SPECS.uptime}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8] tabular-nums">
                Packages: {SYSTEM_SPECS.packages}
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <Terminal className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 05 // ENVIRONMENT
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">SHELL</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">{SYSTEM_SPECS.shell}</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8]">{SYSTEM_SPECS.terminal}</div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 font-mono text-[11px] text-[#64748d] dark:text-[#94a3b8]">
                Automation: Bash Suite
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div>
                <div className="flex items-center justify-between border-b border-[#e3e8ee] dark:border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[#0d253d] dark:text-[#f8fafc] font-semibold">
                    <Info className="w-4 h-4 text-[#533afd] dark:text-[#00d4ff]" />
                    SPEC 06 // TOOLCHAIN
                  </span>
                  <span className="text-[#64748d] dark:text-[#94a3b8]">IDE</span>
                </div>
                <div className="font-display text-2xl font-medium text-[#0d253d] dark:text-[#f8fafc] mb-1 tracking-tight">{SYSTEM_SPECS.editor}</div>
                <div className="font-mono text-xs text-[#64748d] dark:text-[#94a3b8] tabular-nums">Rust 1.85 / GCC 15 / Node 22</div>
              </div>

              <button
                onClick={copySpecs}
                className="mt-5 pt-3 border-t border-[#e3e8ee] dark:border-white/5 inline-flex items-center justify-between font-mono text-xs font-semibold text-[#533afd] dark:text-[#00d4ff] hover:opacity-80 transition-opacity"
              >
                <span>{copied ? 'Specs copied to clipboard' : 'Copy specification text'}</span>
                {copied ? <Check className="w-4 h-4 text-[#533afd] stroke-[2.5]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ) : (
          /* Stripe Dark Code Well Terminal */
          <div className="rounded-xl border border-[#e3e8ee] dark:border-white/10 bg-[#0d253d] dark:bg-[#080b11] text-white shadow-xl overflow-hidden">
            {/* Window header bar */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#0a1b2d] dark:bg-[#05080d]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="font-mono text-xs text-slate-400 ml-2">
                  victus-station / kkfetch-bench
                </span>
              </div>

              {/* Quick action chips */}
              <div className="flex items-center gap-2">
                {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#533afd] text-slate-300 hover:text-white text-[11px] font-mono font-medium transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body with locked window position */}
            <div
              ref={terminalScrollRef}
              className="p-6 h-80 overflow-y-auto space-y-4 font-mono text-xs bg-[#0d253d] dark:bg-[#080b11]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[#00d4ff] font-semibold">kk376@victus</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-[#a8c3de]">~</span>
                    <span className="text-slate-500">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3">{item.output}</div>
                </div>
              ))}

              {/* Active input line */}
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <span className="text-[#00d4ff] font-semibold">kk376@victus</span>
                <span className="text-slate-500">:</span>
                <span className="text-[#a8c3de]">~</span>
                <span className="text-slate-500">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command pill above..."
                  className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="px-6 py-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between bg-[#0a1b2d] dark:bg-[#05080d]">
              <span>Press Enter to execute</span>
              <span className="text-cyan-400 font-medium">Isolated Viewport (No Page Jump)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
