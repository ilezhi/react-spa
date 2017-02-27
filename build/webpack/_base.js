const webpack = require('webpack');
const config = require('../../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cache = config.cache;
const paths = config.utils_paths;

const filename = cache ? '[name].[hash].js' : '[name].js';

let webpackConfig = {
    name : 'client',
    target : 'web',
    entry : {
        app : [
            paths.project(config.dir_src) + '/index.js'
        ],
        vendor : config.vendor_dependencies
    },
    output : {
        filename: filename,
        path : paths.project(config.dir_dist),
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        publicPath : '/'
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin(config.globals),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('site.css', { allChunks: true }),
        new HtmlWebpackPlugin({
            template : paths.src('index.html'),
            hash     : cache,
            filename : 'index.html',
            inject   : 'body'
        })
    ],
    resolve : {
        extensions : ['', '.js', '.jsx', '.scss', '.css'],
        alias : config.utils_aliases
    },
    module : {
        loaders : [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader : 'babel',
                query : {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]--[hash:base64:5]!sass')
            },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' }
        ]
    }
};

module.exports = webpackConfig;
