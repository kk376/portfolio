import React, { useState, useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import { SYSTEM_SPECS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const SystemTelemetry: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalScrollRef = useRef<HTMLDivElement | null>(null);

  const renderKkfetchAscii = () => (
    <div className="font-mono text-xs text-slate-200 py-1 leading-relaxed">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Fedora ASCII Art */}
        <div className="lg:col-span-5 text-[#FF4C60] font-mono text-[11px] leading-tight select-none whitespace-pre bg-black/40 p-4 rounded-xl border border-slate-800/80 overflow-x-auto">
{`             .',;::::;,'.
         .';:cccccccccccc:;,.
      .;cccccccccccccccccccccc;.
    .:cccccccccccccccccccccccccc:.
  .;ccccccccccccc;.:dddl:.;ccccccc;.
 .:ccccccccccccc;OWMKOOXMWd;ccccccc:.
.:ccccccccccccc;KMMc;cc;xMMc;ccccccc:.
,cccccccccccccc;MMM.;cc;;WW:;cccccccc,
:cccccccccccccc;MMM.;cccccccccccccccc:
:ccccccc;oxOOOo;MMM0OOk.;cccccccccccc:
cccccc;0MMKxdd:;MMMkddc.;cccccccccccc;
ccccc;XM0';cccc;MMM.;cccccccccccccccc'
ccccc;MMo;ccccc;MMW.;ccccccccccccccc;
ccccc;0MNc.ccc.xMMd;ccccccccccccccc;
cccccc;dNMWXXXWM0:;cccccccccccccc:,
cccccccc;.:odl:.;cccccccccccccc:,.
:cccccccccccccccccccccccccccc:'.
.:cccccccccccccccccccccc:;,..
  '::cccccccccccccc::;,.`}
        </div>

        {/* System Specs List */}
        <div className="lg:col-span-7 space-y-1.5 text-xs tabular-nums font-mono">
          <div className="text-[#FF4C60] font-bold border-b border-slate-800 pb-1 mb-2 flex items-center justify-between">
            <span>{SYSTEM_SPECS.user}@fedora</span>
            <span className="text-[10px] text-slate-400 font-normal">kkfetch v1.2 [Rust procfs]</span>
          </div>

          <div><span className="text-slate-400 font-medium">OS:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.os}</span></div>
          <div><span className="text-slate-400 font-medium">Host:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.host} (MSI Thin A15)</span></div>
          <div><span className="text-slate-400 font-medium">Kernel:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.kernel}</span></div>
          <div><span className="text-slate-400 font-medium">Uptime:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.uptime}</span></div>
          <div><span className="text-slate-400 font-medium">Packages:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.packages}</span></div>
          <div><span className="text-slate-400 font-medium">Shell:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.shell}</span></div>
          <div><span className="text-slate-400 font-medium">Display:</span> <span className="text-slate-200 ml-1.5">1920x1080 in 15", 144 Hz</span></div>
          <div><span className="text-slate-400 font-medium">Desktop:</span> <span className="text-slate-200 ml-1.5">GNOME 50.4 (Wayland)</span></div>
          <div><span className="text-slate-400 font-medium">Terminal:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.terminal}</span></div>
          <div><span className="text-slate-400 font-medium">CPU:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.cpu}</span></div>
          <div><span className="text-slate-400 font-medium">GPU0:</span> <span className="text-slate-200 ml-1.5">AMD Radeon 680M (512 MiB) [Integrated]</span></div>
          <div><span className="text-slate-400 font-medium">GPU1:</span> <span className="text-slate-200 ml-1.5">NVIDIA GeForce RTX 2050 (4 GiB) [Discrete]</span></div>
          <div><span className="text-slate-400 font-medium">Memory:</span> <span className="text-slate-200 ml-1.5">{SYSTEM_SPECS.memory}</span></div>

          <div className="flex gap-1.5 pt-2">
            <span className="w-3 h-3 rounded-sm bg-[#FF4C60]" />
            <span className="w-3 h-3 rounded-sm bg-[#FFD15C]" />
            <span className="w-3 h-3 rounded-sm bg-[#6C6CE5]" />
            <span className="w-3 h-3 rounded-sm bg-[#08D9D6]" />
            <span className="w-3 h-3 rounded-sm bg-[#38EF7D]" />
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
            <div className="text-[#FFD15C] font-semibold">Active Codebases:</div>
            <div>* fedora-post-install (v5.5.7, 1600+ lines bash automation)</div>
            <div>* kkfetch (Rust sub-millisecond procfs telemetry fetcher)</div>
            <div>* cli-python-crud-project (Python pathlib file manager)</div>
            <div>* 10-python-mini-projects (Interactive terminal utilities suite)</div>
          </div>
        );
        break;

      case 'prs':
      case 'upstream':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-[#FF4C60] font-semibold">Upstream Contributions:</div>
            <div>* bilawalsidhu/gods-eye-view #214 (Tactical Sonar Cesium shader bugfix)</div>
            <div>* bilawalsidhu/gods-eye-view #216 (WCAG accessibility fix)</div>
            <div>* mission-center-devs/gng !117 (D3cold GPU power thrash fix)</div>
            <div>* zed-industries/zed #63727 (Wayland shutdown timeout investigation)</div>
          </div>
        );
        break;

      case 'help':
        outputNode = (
          <div className="py-1 text-xs font-mono space-y-1 text-slate-300">
            <div><span className="text-[#FF4C60]">kkfetch</span>: print live workstation hardware telemetry</div>
            <div><span className="text-[#FFD15C]">upstream</span>: list upstream pull requests and investigations</div>
            <div><span className="text-[#6C6CE5]">projects</span>: list flagship codebases</div>
            <div><span className="text-[#08D9D6]">clear</span>: clear terminal screen</div>
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

  return (
    <section id="telemetry" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="Station Telemetry"
        subtitle="Live Linux workstation diagnostics measured using kkfetch in Rust with direct kernel procfs queries"
      />

      {/* Greg Sithole Styled CLI Terminal Window */}
      <div className="rounded-[20px] border border-slate-800 bg-[#12141d] text-white shadow-2xl overflow-hidden max-w-4xl mx-auto">
        {/* Window Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#161824]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF4C60] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFD15C] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#38EF7D] inline-block" />
            <span className="font-mono text-xs text-slate-400 ml-2 font-medium">
              fedora / kkfetch-telemetry
            </span>
          </div>

          <div className="flex items-center gap-2">
            {['kkfetch', 'upstream', 'projects', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-3 py-1 rounded-full bg-slate-800 hover:bg-[#FF4C60] text-slate-300 hover:text-white text-[11px] font-mono font-medium transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Terminal Body */}
        <div
          ref={terminalScrollRef}
          className="p-6 h-96 overflow-y-auto space-y-4 font-mono text-xs bg-[#12141d]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[#FF4C60] font-bold">kk376@fedora</span>
                <span className="text-slate-600">:</span>
                <span className="text-[#FFD15C]">~</span>
                <span className="text-slate-600">$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-3">{item.output}</div>
            </div>
          ))}

          {/* Interactive Input Prompt */}
          <div className="flex items-center gap-2 text-slate-400 pt-1">
            <span className="text-[#FF4C60] font-bold">kk376@fedora</span>
            <span className="text-slate-600">:</span>
            <span className="text-[#FFD15C]">~</span>
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

        {/* Terminal Footer Bar */}
        <div className="px-6 py-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between bg-[#161824]">
          <span>Press Enter to execute</span>
          <span className="text-[#38EF7D] font-medium">Sub-millisecond Rust Procfs</span>
        </div>
      </div>
    </section>
  );
};

export default SystemTelemetry;
