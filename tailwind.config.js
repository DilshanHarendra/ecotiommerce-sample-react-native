const {PRIMARY_COLOR} = require('./src/shared/constant');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
      },
    },
  },
  plugins: [],
};
