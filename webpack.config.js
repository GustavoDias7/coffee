const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/js/pages/**.js").reduce((obj, el) => {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
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
