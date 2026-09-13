import React, { useEffect, useState } from 'react';
import { ThemeContext, type Theme, type Palette } from './theme-context';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [palette, setPaletteState] = useState<Palette>(() => {
    if (typeof window === 'undefined') return 'tokyonight';
    const stored = localStorage.getItem('palette') as Palette | null;
    if (stored === 'tokyonight' || stored === 'catppuccin') {
      return stored;
    }
    return 'tokyonight';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }, [palette]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const togglePalette = () => {
    setPaletteState((prev) => (prev === 'tokyonight' ? 'catppuccin' : 'tokyonight'));
  };

  const setPalette = (newPalette: Palette) => {
    setPaletteState(newPalette);
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        palette,
        isDark,
        toggleTheme,
        setTheme,
        togglePalette,
        setPalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
