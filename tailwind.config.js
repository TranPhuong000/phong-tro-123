/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/index.html'
],

  theme: {
    extend: {
      width:{
        'full': 'full'
      },
      backgroundColor: {
        primary: '#ffffff',
        secondary1: '#0045a8',
        secondary2: '#f30202',
        secondary3: '#41af53',
      },
      maxWidth:{
        '500': '500px'
      }

    },
  },
  plugins: [],
}