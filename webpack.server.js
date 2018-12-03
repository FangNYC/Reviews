const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  // entry: './server/babelServer.js',
  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  node: {
    __dirname: false, 
    __filename: false,
  },
  module: {
    rules: [
      {
        // File extension we are looking for
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        }
      }
    ]
  },
  
  devtool: 'inline-source-map'

};