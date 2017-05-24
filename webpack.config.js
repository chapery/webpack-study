var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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
    devtool: 'eval-source-map',
    plugins: [
        new webpack.BannerPlugin('copyright asfdasdfasfd inc.'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.tmpl.html')
        })
    ],
    devServer: {
        contentBase: __dirname,
        port: 8080,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}