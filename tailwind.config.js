/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          light: '#A0BAC8',  // Light blue-gray
          DEFAULT: '#004C76', // Dark blue
        },
        primary: {
          light: '#FFD1A3',  // Light peach
          DEFAULT: '#FF7F00', // Orange
        },
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
};