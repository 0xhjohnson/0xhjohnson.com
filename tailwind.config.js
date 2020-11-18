const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  experimental: {
    uniformColorPalette: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      mono: ['Dank mono', ...defaultTheme.fontFamily.mono]
    }
  },
  variants: {},
  plugins: []
};
