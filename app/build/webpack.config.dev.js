const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const browserConfig = {
  mode: 'development',

  entry: './src/browser/index.tsx',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: [path.join(__dirname, '../public'), path.join(__dirname, '../dist')],
    compress: true,
    port: 9001
  },

  watch: true,

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(true)
                               }
                             }),

    new HtmlWebpackPlugin({
                            filename: path.join(__dirname, '../public/index.html'),
                            template: path.join(__dirname, '../views/index.ejs'),
                            templateParameters: {
                              App: '<App />',
                              ssr: false
                            }
                          })
  ]
}

module.exports = merge(baseConfig, browserConfig)
