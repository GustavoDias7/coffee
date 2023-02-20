const path = require("path");

module.exports = {
  entry: {
    home: "./src/js/home.js",
  },
  // devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public/js"),
    libraryTarget: "umd",
  },
  mode: "production",
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".js"],
  },
};
