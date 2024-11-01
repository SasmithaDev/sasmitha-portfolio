/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite',
        'shooting-star': 'shooting-star 5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(45deg)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { transform: 'translateX(-500px) translateY(500px) rotate(45deg)', opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        'astro': {
          DEFAULT: '#4F46E5',
          dark: '#3730A3',
        }
      }
    },
  },
  plugins: [],
};