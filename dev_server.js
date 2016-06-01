var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});

server.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }
});

console.log('Listening at http://localhost:3000/');