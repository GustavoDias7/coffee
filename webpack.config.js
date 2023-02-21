const path = require("path");

module.exports = {
  entry: {
    home: "./src/js/pages/home.js",
  },
  // devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public/js/"),
  },
  mode: "production",
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".js"],
  },
};
