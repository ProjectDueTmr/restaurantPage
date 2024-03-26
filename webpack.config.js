
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.html$/,
            use: ["html-Loader"],
        }
    ],
  }
};