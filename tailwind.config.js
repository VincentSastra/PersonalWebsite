const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '96': '96',
      },
    },
    height: {
      xxl: '134px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      primary: '#A6886D',
      secondary: '#260C02',
      tertiary: '#F2F2F2',
      fourth: '#F26A1B',
      fifth: '#8C4216',

      // primary: '#ACD1E9',
      // blue: '#ACD1E9',
      // blueDark: '#84BBDE',
      // secondary: '#F5FAFA',
      // tertiary: '#E8D0A9',
      // fourth: '#B7AFA3',
      // fifth: '#C1DAD6',
      // sixth: '#6D929B',
      // seventh: '#417582',
      white: '#FFFFFF',
    }
  }
}
