import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-obsidian-800/80 bg-obsidian-950 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-semibold">Kushagra Kumar</span>
            <span className="text-slate-600">/</span>
            <span>Local Station // portfolio_v2</span>
          </div>

          <div className="text-center text-slate-500">
            Crafted with React, Tailwind & TypeScript. Vibe coded at lightspeed, hardened with engineering tests.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-medium">ZERO EM DASHES</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
