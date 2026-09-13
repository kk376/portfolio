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
        greg: {
          coral: '#FF4C60',
          'coral-hover': '#e63946',
          'coral-light': '#FFF0F2',
          'coral-muted': 'rgba(255, 76, 96, 0.12)',
          yellow: '#FFD15C',
          'yellow-light': '#FFF9E6',
          'yellow-muted': 'rgba(255, 209, 92, 0.15)',
          purple: '#6C6CE5',
          'purple-light': '#F1F1FD',
          'purple-muted': 'rgba(108, 108, 229, 0.15)',
          cyan: '#08D9D6',
          green: '#38EF7D',
          body: '#F9F9FF',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.06)',
          'dark-body': '#1E1E28',
          'dark-card': '#252536',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
          'dark-card-hover': '#2a2a3e',
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
