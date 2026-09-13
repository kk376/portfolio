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
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#2d3042] bg-white dark:bg-[#202230] text-slate-700 dark:text-slate-200 hover:border-[#7148fc] dark:hover:border-[#09d8ff] transition-all shadow-xs focus:outline-none cursor-pointer active:scale-95 ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#ffca04]" />
        ) : (
          <Moon className="w-4 h-4 text-[#7148fc]" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
