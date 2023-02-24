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
        50: "#f2ede7",
        100: "#e5dcd0",
        200: "#ccbaa2",
        300: "#bfa98b",
        400: "#a69278",
        500: "#756754",
        600: "#5e5343",
        700: "#483f32",
        800: "#332c23",
        900: "#1f1b14",
        1000: "#0d0a07",
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
