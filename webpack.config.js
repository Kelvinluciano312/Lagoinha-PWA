const path = require('path');

module.exports = {
  entry: './JS/admin.js',
  output: {
    filename: 'admin-bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
