import { createContext } from 'react';

export type Theme = 'dark' | 'light';
export type Palette = 'tokyonight' | 'catppuccin';

export interface ThemeContextType {
  theme: Theme;
  palette: Palette;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  togglePalette: () => void;
  setPalette: (palette: Palette) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
