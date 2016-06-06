module.exports = {
    name: 'server',
    entry: __dirname + "/src/server.js",
    target: 'node',
    output: {
      path: __dirname,
      filename: 'server.bundle.js',
    },
    node: {
      __filename: true,
      __dirname: true
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react']
        }
      },{
        test: /\.json$/,
        loader: 'json-loader',
      }]

    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
}
