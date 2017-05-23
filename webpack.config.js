var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}