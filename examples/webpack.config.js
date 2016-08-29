'use strict';

const path = require('path');
const webpack = require('webpack');

const buildPath = path.join(__dirname, 'dist');

const config = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: buildPath,
        filename: 'build-[hash].js',
        publicPath: '/',
    },
    devServer: {
        hot: true,
        inline: true,
        noInfo: false,
        contentBase: './',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    'babel',
                ],
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?sourceMap&modules',
                    'postcss',
                ],
            },
        ],
    },
    postcss: () => ['autoprefixer'],
    plugins: [
        new webpack.IgnorePlugin(/ReactContext/),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
};

module.exports = config;
