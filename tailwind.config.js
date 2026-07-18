/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030303',       // Ultra dark pitch black
          card: '#0c0c0e',     // Glass-like container background
          border: '#1b1b1f',   // Thin borders for separation
          muted: '#8e8e93',    // Secondary text
        },
        accent: {
          cyan: '#00f2fe',     // Vibrant cyan
          blue: '#4facfe',     // Bright electric blue
          purple: '#7f00ff',   // Deep tech purple
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
