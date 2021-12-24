const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: colors.indigo },
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
