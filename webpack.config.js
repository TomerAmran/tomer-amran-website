module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|tmp)/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
