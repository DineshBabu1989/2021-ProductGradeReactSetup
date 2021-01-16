const path = require('path');

module.exports = {
  entry: './src/index.js', // it says where is the main file of the project
  output: {
    filename: 'bundle.js', // what will be the name of the resulting bundle
    path: path.resolve(__dirname, 'dist'), // which directory holds this main.js file
  },
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
    ],
  },
};