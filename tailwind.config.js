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
        greg: {
          coral: 'var(--accent-primary)',
          'coral-hover': 'var(--btn-primary-hover)',
          'coral-light': 'var(--accent-light)',
          'coral-muted': 'var(--accent-muted)',
          yellow: 'var(--accent-peach)',
          'yellow-light': '#FFF9E6',
          'yellow-muted': 'rgba(255, 209, 92, 0.15)',
          purple: 'var(--accent-secondary)',
          'purple-light': '#F1F1FD',
          'purple-muted': 'rgba(108, 108, 229, 0.15)',
          cyan: 'var(--accent-cyan)',
          green: 'var(--accent-green)',
          body: 'var(--bg-canvas)',
          card: 'var(--bg-card)',
          border: 'var(--border-subtle)',
          'dark-body': 'var(--bg-canvas)',
          'dark-card': 'var(--bg-card)',
          'dark-border': 'var(--border-subtle)',
          'dark-card-hover': 'var(--bg-card-hover)',
        },
      },
      fontFamily: {
        rubik: ['"Rubik"', '"Noto Sans"', 'sans-serif'],
        display: ['"Rubik"', '"Noto Sans"', 'sans-serif'],
        sans: ['"Rubik"', '"Noto Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'greg': '20px',
        'btn': '30px',
        'card': '20px',
        'pill': '9999px',
      },
      boxShadow: {
        'greg': '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
        'greg-dark': '0px 5px 20px 0px rgba(0, 0, 0, 0.25)',
        'greg-coral': '0px 5px 20px 0px rgba(255, 76, 96, 0.4)',
        'greg-yellow': '0px 5px 20px 0px rgba(255, 209, 92, 0.4)',
        'greg-purple': '0px 5px 20px 0px rgba(108, 108, 229, 0.4)',
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
