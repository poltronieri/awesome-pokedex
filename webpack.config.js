const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    mode: isProduction ? "production" : "development",
    entry: path.resolve(__dirname, "src"),
    devtool: isProduction ? "" : "source-map",
    devServer: {
      static: path.join(__dirname, "dist"),
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/img/icon.png",
        filename: "index.html",
      }),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".css", ".scss", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // {
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"],
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  };
};
