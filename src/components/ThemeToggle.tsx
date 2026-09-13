import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40 ${
        isDark
          ? 'bg-white/[0.04] border-white/[0.08] hover:border-amber-400/50 text-amber-400 hover:bg-amber-400/10'
          : 'bg-slate-100 border-slate-200 hover:border-purple-400/60 text-purple-600 hover:bg-purple-50 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-purple-600" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
