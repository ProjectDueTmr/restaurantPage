
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  module: {
    rules: [
        {
            test: /\.html$/,
            use: ["html-Loader"],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }
    ],
  },
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
 
};