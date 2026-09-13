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
        stripe: {
          primary: '#533afd',
          'primary-deep': '#4434d4',
          'primary-press': '#2e2b8c',
          'primary-soft': '#665efd',
          'primary-subdued': '#b9b9f9',
          'brand-dark-900': '#1c1e54',
          ink: '#0d253d',
          'ink-secondary': '#273951',
          'ink-mute': '#64748d',
          canvas: '#ffffff',
          'canvas-soft': '#f6f9fc',
          'canvas-cream': '#f5e9d4',
          hairline: '#e3e8ee',
          'hairline-input': '#a8c3de',
          ruby: '#ea2261',
          magenta: '#f96bee',
          cyan: '#00d4ff',
          lemon: '#ff9f43',
          // Dark mode complementary palette
          'dark-canvas': '#0a101d',
          'dark-card': '#0f172a',
          'dark-surface': '#1e293b',
          'dark-ink': '#f8fafc',
          'dark-mute': '#94a3b8',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
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
