const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}



