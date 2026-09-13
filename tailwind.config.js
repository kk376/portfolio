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
        andrew: {
          purple: '#7148fc',
          'purple-hover': '#5d35e0',
          blue: '#09d8ff',
          green: '#0c9b56',
          yellow: '#c99200',
          red: '#ef2f4c',
          dark: '#15161e',
          'dark-card': '#202230',
          'dark-border': '#2d3042',
          light: '#f3f6fb',
          'light-card': '#ffffff',
          'light-border': '#e2e8f0',
        },
      },
      fontFamily: {
        quicksand: ['"Quicksand"', 'sans-serif'],
        display: ['"Quicksand"', 'sans-serif'],
        sans: ['"Quicksand"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'panel': '16px',
        'pill': '9999px',
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
