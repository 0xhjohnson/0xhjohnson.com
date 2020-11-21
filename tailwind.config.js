const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Dank mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        gray: colors.coolGray,
        red: colors.rose,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        pink: colors.pink
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.50'),
              padding: theme('spacing[0.5]'),
              borderRadius: theme('borderRadius.md'),
              borderWidth: theme('borderWidth.DEFAULT'),
              borderColor: theme('colors.gray.200')
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.500')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200')
          }
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['responsive', 'dark']
    }
  },
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
