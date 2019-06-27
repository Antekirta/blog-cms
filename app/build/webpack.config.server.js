const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const browserConfig = {
  mode: 'production',

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
      ...styleLoaders()
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

  watch: false,

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(false)
                               }
                             }),

    new MiniCssExtractPlugin({
                               filename: '[name].css'
                             })
  ]
}

const serverConfig = {
  ...browserConfig,

  entry: './src/server/index.tsx',
  target: "node",
  output: {
    path: path.join(__dirname, '..'),
    filename: "server.js",
    libraryTarget: "commonjs2"
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
      },

      ...styleLoaders()
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(false)
                               }
                             })
  ]
}

module.exports = [browserConfig, serverConfig]

function styleLoaders() {
  return [
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
}
