const webpack = require("webpack");

const images = require("remark-images");
const emoji = require("remark-emoji");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [images, emoji],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    clientLogLevel: "info",
    historyApiFallback: true,
    hot: true,
  },
  node: {
    fs: "empty",
  },
};
