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
      aria-label={isDark ? 'Switch to light paper mode' : 'Switch to dark slate mode'}
      title={isDark ? 'Switch to light paper mode' : 'Switch to dark slate mode'}
      className={`relative inline-flex items-center gap-2 p-2 rounded-none border-2 border-black dark:border-white shadow-swiss-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none bg-white dark:bg-[#1f2026] text-black dark:text-white transition-all focus:outline-none ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-[#1D4ED8]" />
        )}
      </div>

      {showLabel && (
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
          {isDark ? 'Paper (Light)' : 'Slate (Dark)'}
        </span>
      )}
    </button>
  );
};
