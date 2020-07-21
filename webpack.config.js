const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
//const isProd = !isDev;

module.exports = {
  mode: 'development',
  entry: './lib/components/Index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },  
  devServer: {
    port: 3000,
    hot: isDev
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};