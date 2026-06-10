/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          950: '#030806',
          900: '#07120c',
          800: '#0e1f16',
          700: '#173023',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7'
        },
        volt: '#CCFF00',
        hyper: '#00F0FF',
        championship: '#D4AF37'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
