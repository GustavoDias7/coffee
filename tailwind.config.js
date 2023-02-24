/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      ...colors,
      beige: {
        50: "#e5dcd0",
        100: "#d8cbb9",
        200: "#ccbaa2",
        300: "#bfa98b",
        400: "#a69278",
        500: "#8d7c66",
        600: "#756754",
        700: "#5e5343",
        800: "#483f32",
        900: "#332c23",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "0",
      },
    },
  },
  plugins: [],
};
