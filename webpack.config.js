var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        p1: './src/script/p1.js',
        p2: './src/script/p2.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devtool: 'eval-source-map',
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
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js',
                                ctx: {
                                    autoprefixer: {
                                        browsers: ['last 5 versions']
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js',
                                ctx: {
                                    autoprefixer: {
                                        browsers: ['last 5 versions']
                                    }
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                include: path.join(__dirname, 'src/components/'),
                use: [
                    'html-loader'
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