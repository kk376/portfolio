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
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--btn-primary-hover)',
          secondary: 'var(--accent-secondary)',
          cyan: 'var(--accent-cyan)',
          green: 'var(--accent-green)',
          peach: 'var(--accent-peach)',
          light: 'var(--accent-light)',
          muted: 'var(--accent-muted)',
        },
        canvas: {
          DEFAULT: 'var(--bg-canvas)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          sidebar: 'var(--bg-sidebar)',
        },
      },
      fontFamily: {
        rubik: ['"Rubik"', '"Noto Sans"', 'sans-serif'],
        display: ['"Rubik"', '"Noto Sans"', 'sans-serif'],
        sans: ['"Rubik"', '"Noto Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        pill: '9999px',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'wheel': 'wheel 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wheel: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '40%': { opacity: '1' },
          '80%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
      }
    },
  },
  plugins: [],
}

