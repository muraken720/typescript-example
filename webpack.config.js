module.exports = {
  entry: {
    spec: './dist/test/index.spec.js'
  },
  output: {
    path: './dist/test',
    filename: 'bundle.[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}