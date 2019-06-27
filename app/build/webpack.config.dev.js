const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const browserConfig = {
  mode: 'development',

  context: path.resolve(__dirname, '../'),

  entry: './src/browser/index.tsx',

  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'index-bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
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

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', 'css', 'sass']
  },

  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
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
                              App: '<App />'
                            }
                          })
  ]
}

module.exports = browserConfig
