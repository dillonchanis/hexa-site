const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
    ],
    options: {
      whitelist: [
        "body",
        "html",
        "img",
        "a",
        "g-image",
        "g-image--lazy",
        "g-image--loaded",
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        'dark-gray': '#121524'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        ...defaultTheme.spacing,
        88: '22rem',
        100: '25rem'
      },
      opacity: {
        ...defaultTheme.opacity,
        90: '0.90'
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
