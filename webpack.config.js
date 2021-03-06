module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.css/ , loader:'style!css!'},
      {test: /\.less/ , loader:'style!css!less!'}
    ]
  },
  devServer: { inline: true }
};
