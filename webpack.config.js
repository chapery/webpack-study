var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'main1': './app/index.js',
        'main2': './app/index2.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['main1', 'main2']
        })
    ]
}