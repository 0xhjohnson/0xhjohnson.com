const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
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
            'a:hover': {
              color: theme('colors.gray.500')
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
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.900')
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
