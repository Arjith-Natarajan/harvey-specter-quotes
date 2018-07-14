import { join } from "path";
const include = join(__dirname, "src");

export default {
  entry: "./src/index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "harveySpecterQuotes"
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader" }, { test: /\.json$/ }]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
