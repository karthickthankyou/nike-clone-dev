const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: colors.indigo, accent: colors.black },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
      },
      lineHeight: {
        '80p': '80%',
        '90p': '90%',
      },
      fontFamily: {
        display: ['Helvetica'],
      },
      outlineWidth: {
        1.5: '1.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
