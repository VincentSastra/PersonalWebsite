const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Poppins", "sans"],
        'futura': ["Futura", "sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      spacing: {
        st: '73px'
      },
    },
    colors: {
      black: '#000000',
      white: '#E5E5E5',
      orange: '#F27059',
      ltorange: '#F7B267'
    }
  }
}
