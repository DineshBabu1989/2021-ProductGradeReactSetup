const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist', // shows dev server where to serve from
  },
  output: {
    filename: '[name].bundle.js', // dynamic naming of bundles incase if we use muliple bundles
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/public", "index.html")
    }),
  ],
  module: { 
    // this is for managing your assests
    rules: [
      {
        test: /\.css$/i,
        // style-loader helps inject CSS in to the DOM, css-loader helps importing CSS inside JS
        // order of the loader is important
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};