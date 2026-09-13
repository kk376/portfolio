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
      aria-label={isDark ? 'Switch to Aurora light mode' : 'Switch to Midnight dark mode'}
      title={isDark ? 'Switch to Aurora light mode' : 'Switch to Midnight dark mode'}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e3e8ee] dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#0d253d] dark:text-[#f8fafc] hover:border-[#533afd] dark:hover:border-[#665efd] transition-all shadow-sm focus:outline-none ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#533afd]" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Aurora' : 'Midnight'}
        </span>
      )}
    </button>
  );
};
