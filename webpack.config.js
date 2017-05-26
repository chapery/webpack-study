var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        p1: './src/script/p1.js',
        p2: './src/script/p2.js',
        p3: './src/script/p3.js'
    },
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
                include: path.join(__dirname, 'src/script'),
                exclude: path.join(__dirname, 'node_modules'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    // devtool: 'eval-source-map',
    plugins: [
        new webpack.BannerPlugin('copyright webpack-study inc.'),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'p1.html',
            inject: false,
            chunks: ['main', 'p1']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'p2.html',
            inject: false,
            chunks: ['main', 'p2']
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