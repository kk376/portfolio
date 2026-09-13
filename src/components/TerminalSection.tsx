import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Sparkles, Check, Copy } from 'lucide-react';
import { SYSTEM_SPECS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const KkfetchOutput: React.FC = () => (
  <div className="font-mono text-xs sm:text-sm text-slate-200 py-2 leading-relaxed">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      {/* ASCII Fedora / KK Logo */}
      <div className="md:col-span-4 text-cyan-400 font-mono text-[11px] sm:text-xs leading-[1.15] select-none whitespace-pre bg-obsidian-950/60 p-3 rounded border border-cyan-500/20">
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

      {/* System Specs List */}
      <div className="md:col-span-8 space-y-1 text-xs">
        <div className="text-emerald-400 font-bold border-b border-obsidian-700/60 pb-1 mb-1.5 flex items-center justify-between">
          <span>{SYSTEM_SPECS.user}@{SYSTEM_SPECS.host}</span>
          <span className="text-[10px] text-slate-400 font-normal">kkfetch v1.2 [RUST]</span>
        </div>

        <div><span className="text-cyan-400 font-semibold">OS:</span> <span className="text-slate-300">{SYSTEM_SPECS.os}</span></div>
        <div><span className="text-cyan-400 font-semibold">Kernel:</span> <span className="text-slate-300">{SYSTEM_SPECS.kernel}</span></div>
        <div><span className="text-cyan-400 font-semibold">Uptime:</span> <span className="text-slate-300">{SYSTEM_SPECS.uptime}</span></div>
        <div><span className="text-cyan-400 font-semibold">Packages:</span> <span className="text-slate-300">{SYSTEM_SPECS.packages}</span></div>
        <div><span className="text-cyan-400 font-semibold">Shell:</span> <span className="text-slate-300">{SYSTEM_SPECS.shell}</span></div>
        <div><span className="text-cyan-400 font-semibold">Terminal:</span> <span className="text-slate-300">{SYSTEM_SPECS.terminal}</span></div>
        <div><span className="text-cyan-400 font-semibold">CPU:</span> <span className="text-slate-300">{SYSTEM_SPECS.cpu}</span></div>
        <div><span className="text-cyan-400 font-semibold">GPU:</span> <span className="text-slate-300">{SYSTEM_SPECS.gpu}</span></div>
        <div><span className="text-cyan-400 font-semibold">Memory:</span> <span className="text-slate-300">{SYSTEM_SPECS.memory}</span></div>
        <div><span className="text-cyan-400 font-semibold">Editor:</span> <span className="text-slate-300">{SYSTEM_SPECS.editor}</span></div>

        {/* Color palette blocks */}
        <div className="flex gap-1.5 pt-2">
          <span className="w-3 h-3 rounded-sm bg-obsidian-900 border border-slate-700" />
          <span className="w-3 h-3 rounded-sm bg-red-500" />
          <span className="w-3 h-3 rounded-sm bg-emerald-400" />
          <span className="w-3 h-3 rounded-sm bg-amber-400" />
          <span className="w-3 h-3 rounded-sm bg-cyan-400" />
          <span className="w-3 h-3 rounded-sm bg-purple-500" />
          <span className="w-3 h-3 rounded-sm bg-white" />
        </div>
      </div>
    </div>
  </div>
);

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'kkfetch',
      output: <KkfetchOutput />,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'kkfetch':
      case 'fetch':
        outputNode = <KkfetchOutput />;
        break;

      case 'vibe':
      case 'philosophy':
        outputNode = (
          <div className="p-3 my-2 rounded bg-obsidian-950/80 border border-emerald-500/30 text-xs font-mono space-y-2">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>THE VIBE CODING PHILOSOPHY</span>
            </div>
            <p className="text-slate-300">
              "We leverage generative models to sculpt architecture and prototypes in record time,
              then apply deep systems engineering, zero-warning test passes, and strict safety proofs."
            </p>
            <div className="text-slate-400 text-[11px]">
              Transparency first: No hidden generative assistants. All code verified by human hands.
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="py-2 text-xs font-mono space-y-2">
            <div className="text-cyan-400 font-bold">ACTIVE FLAGSHIP PROJECTS:</div>
            <div className="space-y-1.5 pl-2 border-l border-cyan-500/30">
              <div><span className="text-emerald-400">1. gods-eye-view PR #214</span> (Cesium Tactical Sonar Shader)</div>
              <div><span className="text-emerald-400">2. fedora-post-install</span> (Automated Fedora 44 suite, v5.5.7)</div>
              <div><span className="text-emerald-400">3. kkfetch</span> (Rust high-performance system fetcher)</div>
              <div><span className="text-emerald-400">4. kkpdf-zed</span> (Native Zed editor PDF document engine)</div>
              <div><span className="text-emerald-400">5. dev-suite</span> (Engineering standards & security audit tools)</div>
            </div>
            <div className="text-slate-400 text-[11px] pt-1">
              Type 'help' or scroll to the Projects section for direct links.
            </div>
          </div>
        );
        break;

      case 'help':
        outputNode = (
          <div className="py-2 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</div>
            <div><span className="text-emerald-400 font-semibold">kkfetch</span> - Run Rust system fetcher output</div>
            <div><span className="text-emerald-400 font-semibold">vibe</span> - Read the vibe coding engineering manifesto</div>
            <div><span className="text-emerald-400 font-semibold">projects</span> - List flagship projects and upstream PRs</div>
            <div><span className="text-emerald-400 font-semibold">whoami</span> - Display developer bio and coordinates</div>
            <div><span className="text-emerald-400 font-semibold">clear</span> - Clear terminal buffer</div>
            <div><span className="text-emerald-400 font-semibold">help</span> - Display this help manual</div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="py-2 text-xs font-mono space-y-1 text-slate-300">
            <div><span className="text-cyan-400 font-bold">NAME:</span> Kushagra Kumar (kk376)</div>
            <div><span className="text-cyan-400 font-bold">ROLE:</span> Systems, Linux Automation & Open Source Engineer</div>
            <div><span className="text-cyan-400 font-bold">LOCATION:</span> India (IST / UTC+05:30)</div>
            <div><span className="text-cyan-400 font-bold">GITHUB:</span> https://github.com/kk376</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-amber-400 py-1">
            command not found: {trimmed}. Type <span className="text-cyan-400 underline">help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal('');
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

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const copyTerminalLog = () => {
    const textToCopy = `kk376@victus-station: kkfetch\nOS: ${SYSTEM_SPECS.os}\nKernel: ${SYSTEM_SPECS.kernel}\nCPU: ${SYSTEM_SPECS.cpu}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 md:py-24 border-t border-obsidian-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Interactive CLI Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live kkfetch Prober
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Execute real terminal probes against the system spec or inspect project telemetry directly.
          </p>
        </div>

        {/* Quick Execution Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2">Click to Run:</span>
          {['kkfetch', 'vibe', 'projects', 'whoami', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-obsidian-900 hover:bg-obsidian-850 border border-obsidian-700 hover:border-cyan-400/60 font-mono text-xs text-cyan-400 transition-colors flex items-center gap-1 shadow-sm"
            >
              <Play className="w-2.5 h-2.5" />
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="hud-border rounded-xl overflow-hidden bg-obsidian-950/95 shadow-2xl backdrop-blur-md">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-obsidian-900 border-b border-obsidian-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-slate-400 ml-2">
                kk376@victus-station: ~ (bash 5.2.32)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyTerminalLog}
                className="p-1.5 rounded hover:bg-obsidian-800 text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy Terminal Specs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setHistory([])}
                className="p-1.5 rounded hover:bg-obsidian-800 text-slate-400 hover:text-slate-200 transition-colors"
                title="Reset Buffer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[500px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                  <span className="text-emerald-400 font-semibold">kk376@victus</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400 font-medium">~</span>
                  <span className="text-slate-400">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-2 sm:pl-4">{item.output}</div>
              </div>
            ))}

            {/* Current Input Prompt */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm pt-2">
              <span className="text-emerald-400 font-semibold">kk376@victus</span>
              <span className="text-slate-500">:</span>
              <span className="text-cyan-400 font-medium">~</span>
              <span className="text-slate-400">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or click a command chip above..."
                className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm placeholder:text-slate-600"
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer status */}
          <div className="px-4 py-2 bg-obsidian-900/80 border-t border-obsidian-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SESSION: TTY1 // 60 FPS
            </span>
            <span className="text-slate-400">PRESS ENTER TO EXECUTE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
