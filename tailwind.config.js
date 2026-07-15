/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0a0a0b',
          800: '#121214',
          700: '#1a1a1d',
          600: '#26262b',
          500: '#3a3a40',
        },
        gold: {
          DEFAULT: '#c8a35c',
          light: '#e6c178',
          deep: '#9a7a3a',
        },
        cream: '#f5f3ef',
      },
    },
  },
  plugins: [],
};
