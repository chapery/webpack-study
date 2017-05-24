var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/script/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use:[
                    {loader: 'json-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {loader: 'babel-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    // devtool: 'eval-source-map',
    plugins: [
        new webpack.BannerPlugin('copyright asfdasdfasfd inc.'),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html',
            inject: 'head',
            date: new Date()
        })
    ],
    devServer: {
        port: 8080,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}