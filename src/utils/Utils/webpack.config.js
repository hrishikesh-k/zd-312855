const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const pckg = require("./package.json");
module.exports = {
  entry: "./src/index.ts",
  devtool: devMode ? "source-map" : "nosources-source-map",
  mode: devMode ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          /node_modules/,
          /build/,
          /dist/,
          /public/,
          /stories/,
          "/**/*.test.d.ts",
          "/**/*.mock.d.ts",
        ],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: devMode,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
    ],
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    library: `${pckg.name}`,
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    clean: true,
  },
  externals: [
    {
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React",
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "ReactDOM",
      },
    },
    /^(@dd\/.*|\$)$/,
  ],
};
