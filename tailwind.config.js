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
        replicate: {
          orange: '#ea2804',
          'orange-deep': '#c01f00',
          'orange-glow': '#ff6a3d',
          'orange-pink': '#f4a8a0',
          canvas: '#f9f7f3',
          bone: '#f3f0e8',
          card: '#ffffff',
          dark: '#202020',
          deep: '#151515',
          ink: '#202020',
          body: '#3a3a3a',
          charcoal: '#575757',
          mute: '#646464',
          ash: '#8d8d8d',
          stone: '#bbbbbb',
          hairline: 'rgba(32, 32, 32, 0.12)',
          'hairline-strong': '#202020',
          success: '#2b9a66',
          // Dark mode complements
          'dark-canvas': '#141416',
          'dark-bone': '#1d1d20',
          'dark-card': '#242428',
          'dark-ink': '#fcfcfc',
          'dark-body': '#d1d1cf',
          'dark-mute': 'rgba(252, 252, 252, 0.72)',
          'dark-hairline': 'rgba(255, 255, 255, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'well': '16px',
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
