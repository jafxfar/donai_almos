/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Oleo Script Swash Caps'],
      },
      colors: {
        primary: '#F0C61B',
        one: '#2A5C29'
      },
    },
  },
  plugins: [],
}

