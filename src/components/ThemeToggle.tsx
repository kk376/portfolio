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
      aria-label={isDark ? 'Switch to warm cream mode' : 'Switch to charcoal dark mode'}
      title={isDark ? 'Switch to warm cream mode' : 'Switch to charcoal dark mode'}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-[#202020] text-[#202020] dark:text-[#fcfcfc] hover:border-[#ea2804] dark:hover:border-[#ff6a3d] transition-all shadow-sm focus:outline-none ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#ea2804]" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Cream' : 'Dark'}
        </span>
      )}
    </button>
  );
};
