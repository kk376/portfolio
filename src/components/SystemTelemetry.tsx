import React, { useState, useRef } from 'react';
import { Terminal, Cpu, HardDrive, Monitor, Layers, Copy, Check, Info } from 'lucide-react';
import { AndrewSectionHeader } from './AndrewSectionHeader';
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-5 text-[#09d8ff] font-mono text-[11px] leading-tight select-none whitespace-pre bg-black/50 p-4 rounded-xl border border-slate-800">
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

        <div className="md:col-span-7 space-y-1.5 text-xs tabular-nums">
          <div className="text-[#09d8ff] font-bold border-b border-slate-800 pb-1 mb-2 flex items-center justify-between">
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

          <div className="flex gap-1.5 pt-2">
            <span className="w-3 h-3 rounded-sm bg-slate-700" />
            <span className="w-3 h-3 rounded-sm bg-[#ef2f4c]" />
            <span className="w-3 h-3 rounded-sm bg-[#7148fc]" />
            <span className="w-3 h-3 rounded-sm bg-[#c99200]" />
            <span className="w-3 h-3 rounded-sm bg-[#09d8ff]" />
            <span className="w-3 h-3 rounded-sm bg-[#0c9b56]" />
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
            <div className="text-[#09d8ff] font-semibold">Active Codebases:</div>
            <div>* fedora-post-install (v5.5.7, 1600+ lines bash)</div>
            <div>* kkfetch (Rust microsecond system fetcher)</div>
            <div>* cli-python-crud-project (Python CRUD file manager)</div>
            <div>* 10-python-mini-projects (Terminal utilities suite)</div>
          </div>
        );
        break;

      case 'prs':
      case 'upstream':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-[#09d8ff] font-semibold">Upstream Contributions:</div>
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
            <div><span className="text-[#09d8ff]">kkfetch</span>: print system hardware specifications</div>
            <div><span className="text-[#09d8ff]">upstream</span>: list upstream pull requests and merge requests</div>
            <div><span className="text-[#09d8ff]">projects</span>: list flagship codebases</div>
            <div><span className="text-[#09d8ff]">clear</span>: clear terminal window</div>
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
    <section id="system" className="py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AndrewSectionHeader
          id="system"
          title="Workstation Telemetry"
          lede="Raw Linux workstation diagnostics on Fedora 44 with hybrid graphics, measured using kkfetch compiled in Rust with direct kernel procfs queries."
        />

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-2.5 rounded-full font-quicksand text-xs font-bold transition-all active:scale-95 cursor-pointer ${
              activeTab === 'specs'
                ? 'bg-[#7148fc] text-white shadow-sm'
                : 'bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Structured Spec Sheet
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-6 py-2.5 rounded-full font-quicksand text-xs font-bold transition-all active:scale-95 cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-[#7148fc] text-white shadow-sm'
                : 'bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Interactive CLI Terminal
          </button>
        </div>

        {activeTab === 'specs' ? (
          /* Structured Specs Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Monitor className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 01 // PLATFORM
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">OS</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {SYSTEM_SPECS.os}
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                  {SYSTEM_SPECS.kernel}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
                Host: {SYSTEM_SPECS.host}
              </div>
            </div>

            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Cpu className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 02 // COMPUTE
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">CPU</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {SYSTEM_SPECS.cpu}
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                  6 Cores / 12 Threads (Zen 3)
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Architecture: x86_64
              </div>
            </div>

            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Layers className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 03 // GRAPHICS
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">GPU</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  Hybrid MUXless GPU
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {SYSTEM_SPECS.gpu}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Compositor: Wayland
              </div>
            </div>

            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <HardDrive className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 04 // MEMORY
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">RAM</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {SYSTEM_SPECS.memory}
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                  System Uptime: {SYSTEM_SPECS.uptime}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
                Packages: {SYSTEM_SPECS.packages}
              </div>
            </div>

            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Terminal className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 05 // ENVIRONMENT
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">SHELL</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {SYSTEM_SPECS.shell}
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {SYSTEM_SPECS.terminal}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Automation: Bash Suite
              </div>
            </div>

            <div className="andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Info className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
                    SPEC 06 // TOOLCHAIN
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">IDE</span>
                </div>
                <div className="font-quicksand text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {SYSTEM_SPECS.editor}
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                  Rust 1.85 / GCC 15 / Node 22
                </div>
              </div>

              <button
                onClick={copySpecs}
                className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 inline-flex items-center justify-between font-mono text-xs font-semibold text-[#7148fc] dark:text-[#09d8ff] hover:opacity-80 transition-opacity cursor-pointer"
              >
                <span>{copied ? 'Specs copied to clipboard' : 'Copy specification text'}</span>
                {copied ? <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ) : (
          /* Andrew Baisden Styled CLI Terminal Window */
          <div className="rounded-2xl border border-slate-800 bg-[#0b0f19] text-white shadow-2xl overflow-hidden max-w-4xl">
            {/* Window header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#0d1524]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="font-mono text-xs text-slate-400 ml-2 font-medium">
                  victus-station / kkfetch-telemetry
                </span>
              </div>

              <div className="flex items-center gap-2">
                {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 rounded-full bg-slate-800 hover:bg-[#7148fc] text-slate-300 hover:text-white text-[11px] font-mono font-medium transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body with locked window */}
            <div
              ref={terminalScrollRef}
              className="p-6 h-80 overflow-y-auto space-y-4 font-mono text-xs bg-[#0b0f19]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[#09d8ff] font-bold">kk376@victus</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-[#7148fc]">~</span>
                    <span className="text-slate-600">$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-3">{item.output}</div>
                </div>
              ))}

              {/* Input row */}
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <span className="text-[#09d8ff] font-bold">kk376@victus</span>
                <span className="text-slate-600">:</span>
                <span className="text-[#7148fc]">~</span>
                <span className="text-slate-600">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command pill above..."
                  className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="px-6 py-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between bg-[#0d1524]">
              <span>Press Enter to execute</span>
              <span className="text-[#09d8ff] font-medium">Isolated Viewport (No Page Jump)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SystemTelemetry;
