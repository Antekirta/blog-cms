const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')

const browserConfig = {
  mode: 'production',

  entry: './src/browser/index.tsx',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  watch: true,

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(true)
                               }
                             }),

    new MiniCssExtractPlugin({
                               filename: '[name].css'
                             })
  ]
}

const serverConfig = {
  entry: './src/server/index.ts',

  target: "node",

  output: {
    path: path.join(__dirname, '..'),
    filename: "server.js",
    libraryTarget: "commonjs2"
  },

  watch: true,

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(false)
                               }
                             })
  ]
}

module.exports = [merge(baseConfig, browserConfig), merge(baseConfig, browserConfig, serverConfig)]
