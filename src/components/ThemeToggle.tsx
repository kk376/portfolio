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
      aria-label={isDark ? 'Switch to pale sage mode' : 'Switch to deep carbon mode'}
      title={isDark ? 'Switch to pale sage mode' : 'Switch to deep carbon mode'}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#191b16] text-[#0e0f0c] dark:text-[#f4f6f2] hover:border-[#9fe870] dark:hover:border-[#9fe870] transition-all shadow-sm focus:outline-none ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-[#9fe870]" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#0e0f0c]" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Sage' : 'Carbon'}
        </span>
      )}
    </button>
  );
};
