module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xsm': '320px',
        // => @media (min-width: 320px) { ... }
      },
      backgroundImage: theme => ({
        'avatar': "url('https://via.placeholder.com/300x400/ccc.png')",
        }),
      colors: {
        darkGray: {
          100: '#0d0d0d',
          200: '#131313',
          300: '#1a1a1a',
          400: '#202020',
          500: '#262626',
          600: '#2d2d2d',
          700: '#333333',
          800: '#393939',
          900: '#404040',
        },
        orange: {
          100: '#ffaa00',
          200: '#ff9500',
          300: '#ff8000',
          400: '#ff6a00',
          500: '#ff5500',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
