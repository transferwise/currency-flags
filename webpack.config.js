const webpack = require('webpack');

const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'flags.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },
};
