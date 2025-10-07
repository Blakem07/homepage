// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/homepage/",
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "." }, // Copies static assets (e.g. images, fonts, favicon) from /public to the output directory
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
