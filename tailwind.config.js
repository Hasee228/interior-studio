/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF9F5',
          100: '#F4EFE6',
          200: '#E8E1D5',
          300: '#D6C8B4',
          600: '#8C7A6B',
          700: '#6E5E50',
          850: '#4A413A',
          900: '#3A332C',
          950: '#221E1A',
        },
      },
    },
  },
  plugins: [],
};