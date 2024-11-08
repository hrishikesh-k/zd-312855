const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

module.exports = {
  mode: 'production',
  entry: {
    main: glob.sync('./src/scss/index.scss'), // Dynamically capture all SCSS files
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css', // Adjust output filename as needed
    }),
  ],
};
