const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
      app: './src/js/index.js',
      common: './src/common/index.js',
      snowflakes: './src/pages/snowflakes/js/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'pages/[name]/[hash].bundle.js',
    path: path.resolve(__dirname)
  },


  module:{
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['.','src','node_modules'],
            },
          }
      ]
  }]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: "pages/[name]/[hash].css",
        chunkFilename: "[id].css"
      }),
      new CleanWebpackPlugin(['pages']),  
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunks: ['app','common'],
        filename: './index.html'
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/snowflakes/index.html',
        chunks: ['snowflakes','common'],
        filename: 'pages/snowflakes/index.html'
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: false,
        cacheId: 'JF-site',
      })
  ],
  optimization: {
    minimize: false
  }
};