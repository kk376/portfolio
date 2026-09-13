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
        brand: {
          blue: '#2563eb',
          'blue-hover': '#1d4ed8',
          cyan: '#06b6d4',
          indigo: '#4f46e5',
          accent: '#03d6f3',
          'accent-blue': '#458ff6',
        },
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        display: ['"Poppins"', '"Montserrat"', 'sans-serif'],
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
