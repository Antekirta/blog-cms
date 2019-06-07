const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '../'),

  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '../dist'),
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
        test: /\.sass/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', 'sass']
  },

  plugins: [
    new HTMLWebpackPlugin({
                            template: path.resolve(__dirname, '../public/index.html')
                          })
  ],

  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  },

  watch: true
}
