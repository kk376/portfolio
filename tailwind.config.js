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
        wise: {
          lime: '#9fe870',
          'lime-hover': '#cdffad',
          'lime-neutral': '#c5edab',
          'lime-pale': '#e2f6d5',
          canvas: '#ffffff',
          sage: '#e8ebe6',
          ink: '#0e0f0c',
          'ink-deep': '#163300',
          body: '#454745',
          mute: '#868685',
          border: 'rgba(14, 15, 12, 0.08)',
          // Dark mode complementary palette
          'dark-carbon': '#0e0f0c',
          'dark-card': '#191b16',
          'dark-surface': '#22251e',
          'dark-ink': '#f4f6f2',
          'dark-body': '#b5b8b2',
          'dark-border': 'rgba(244, 246, 242, 0.1)',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'card': '24px',
        'tile': '28px',
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
