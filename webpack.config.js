const path = require('path');

module.exports = {
  entry: './src/index.js', // it says where is the main file of the project
  output: {
    filename: 'bundle.js', // what will be the name of the resulting bundle
    path: path.resolve(__dirname, 'dist'), // which directory holds this main.js file
  },
};