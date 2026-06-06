/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#112233',
          soft: '#1A2F45',
        },
        cyan: {
          DEFAULT: '#00E5FF',
        },
        amber: {
          DEFAULT: '#F5A623',
        },
        green: {
          DEFAULT: '#00FF9D',
        },
        red: {
          DEFAULT: '#FF4060',
        },
        white: '#EDF2F7',
        muted: '#5A6A7E',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
