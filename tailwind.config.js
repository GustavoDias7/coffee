/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      beige: "#bfa98b",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "0rem",
      },
    },
  },
  plugins: [],
};
