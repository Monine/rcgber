var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'rcgber.min.js' : 'rcgber.js',
    library: 'rcgber',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      // https://github.com/babel/babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: [
          resolve('src')
        ],
        exclude: [
          resolve('node_modules')
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      resolve('src')
    ]
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
