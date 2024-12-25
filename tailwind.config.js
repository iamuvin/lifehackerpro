/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coral': {
          500: '#F67280',
          600: '#E56371',
        },
        'golden': {
          500: '#FFC857',
        },
        'emerald': {
          500: '#119DA4',
        },
        'slate': {
          500: '#495867',
        },
      },
    },
  },
  plugins: [],
};