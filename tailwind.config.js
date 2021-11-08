module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['Roboto Condensed', 'ui-monospace'],
      'sans': ['Cabin', 'ui-sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
