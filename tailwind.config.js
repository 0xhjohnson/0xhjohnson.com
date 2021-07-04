const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.{ts,tsx}'],
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
        pink: colors.pink,
        'light-owl': {
          alto: '#e0e0e0',
          gunpowder: '#403f53',
          alabaster: '#fbfbfb',
          manatee: '#989fb1',
          plum: '#994cc3',
          'blue-chill': '#0c969b',
          sunset: 'rgba(239, 83, 80, 0.56)',
          chesnut: '#bc5454',
          lipstick: '#aa0982',
          'havelock-blue': '#4876d6',
          'cod-gray': '#111111',
          contessa: '#c96765'
        },
        'night-owl': {
          cello: 'rgba(29, 59, 83, 0.99)',
          midnight: '#011627',
          nevada: '#637777',
          lilac: '#c792ea',
          'jungle-mist': '#b2ccd6',
          'salmon-pearl': 'rgba(239, 83, 80, 0.56)',
          'monte-carlo': '#80cbc4',
          bermuda: '#7fdbca',
          'fiery-rose': '#ff5874',
          tan: '#f78c6c',
          malibu: '#82aaff',
          'yellow-green': '#addb67',
          chardonnay: '#ffcb8b',
          botticelli: '#d6deeb'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ':not(pre) > code': {
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
            'a:hover': {
              color: theme('colors.gray.500')
            },
            pre: {
              color: null,
              backgroundColor: null
            },
            'pre code': {
              color: null
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.200')
              }
            },
            strong: {
              color: theme('colors.gray.100')
            },
            'ol > li::before': {
              color: theme('colors.gray.400')
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700')
            },
            hr: {
              borderColor: theme('colors.gray.700')
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700')
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100')
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
              padding: theme('spacing[0.5]'),
              borderRadius: theme('borderRadius.md'),
              borderWidth: theme('borderWidth.DEFAULT'),
              borderColor: theme('colors.gray.700'),
              fontWeight: '400'
            },
            'pre > code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              borderColor: 'transparent'
            },
            'a code': {
              color: theme('colors.gray.100')
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      })
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
