/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  lightMode: ['class', '[data-theme="light"]'],
  a1Mode: ['class', '[font-size="A1"]'],
  a2Mode: ['class', '[font-size="A2"]'],
  a3Mode: ['class', '[font-size="A3"]'],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {

      },
      animation: {

      }
    },
    screens: {
      'xs': '320px',

      'sm': '560px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1024px',

      '2xl': '1280px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'sm': '13px',
      'xs': '15px',
      'md': '17px',
      'lg': '19px',
      'xl': '21px',
      '2xl': '23px',
    }
  },
  plugins: [],
}
