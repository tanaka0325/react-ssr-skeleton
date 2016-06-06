module.exports = [
  {
    name: 'client',
    entry: __dirname + "/src/index.js",
    output: {
      path: __dirname + '/public/',
      filename: 'app.bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:{
            presets: ['react', 'es2015']
          }
        },{
          test: /\.json$/,
          loader: 'json-loader',
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
];
