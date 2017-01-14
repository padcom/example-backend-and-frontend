var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/frontend/main.js',
  output: {
    path: path.resolve(__dirname, './target'),
    filename: 'index.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/  }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/frontend/index.html' })
  ],

  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/example',
        secure: false
      }
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}
