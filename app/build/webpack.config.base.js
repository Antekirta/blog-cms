const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),

  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },

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
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, '../src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.css', '.sass', '.json']
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  }
}
