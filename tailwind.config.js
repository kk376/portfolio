/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          paper: '#F4F3EE',
          surface: '#FFFFFF',
          muted: '#EAE7DF',
          ink: '#111111',
          'ink-muted': '#555555',
          blue: '#1D4ED8',
          orange: '#FF4F00',
          green: '#15803D',
          slate: '#141416',
          'slate-surface': '#1F2026',
          chalk: '#E5E5E0',
          'chalk-muted': '#9E9EA0',
        },
      },
      fontFamily: {
        serif: ['Newsreader', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
