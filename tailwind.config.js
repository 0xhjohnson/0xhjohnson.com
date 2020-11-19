const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.rose,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      pink: colors.pink
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Dank mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            src: 'url("/fonts/Inter-roman.var.woff2?v=3.15") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontDisplay: 'swap',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            src: 'url("/fonts/Inter-italic.var.woff2?v=3.15") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Dank mono',
            fontWeight: '400',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontNamedInstance: 'Normal',
            src: 'url("/fonts/DankMono-Regular.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Dank mono',
            fontWeight: '400',
            fontDisplay: 'swap',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            src: 'url("/fonts/DankMono-Italic.woff2") format("woff2")'
          }
        }
      ]);
    }
  ]
};
