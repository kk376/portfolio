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
        verge: {
          canvas: '#131313',
          slate: '#2d2d2d',
          mint: '#3cffd0',
          'mint-border': '#309875',
          violet: '#5200ff',
          'violet-rule': '#3d00bf',
          yellow: '#fffa00',
          pink: '#ff007a',
          orange: '#ff5500',
          blue: '#3860be',
          hairline: '#ffffff',
          dim: '#949494',
        },
        dark: {
          950: '#06070b',
          900: '#0b0d14',
          850: '#10131c',
          800: '#161a26',
          700: '#222838',
          600: '#2e364c',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
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
