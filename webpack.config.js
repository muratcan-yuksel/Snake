const path = require('path');

module.exports = {
  //this is our entry point
  entry: './src/app.js',
  //and this is where it'll spit the main.js
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
