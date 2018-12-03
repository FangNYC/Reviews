var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  // This is the 'root' of our client-side application + where webpack will start bundling things up
  entry: `${SRC_DIR}/index.js`,
  // This is where the index.html lives and where the bundle.js will go
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        // File extension we are looking for
        test: /\.js/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'inline-source-map',
}