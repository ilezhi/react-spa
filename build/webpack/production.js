var webpack = require('webpack');
var webpackConfig =  require('./_base');
webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = webpackConfig;
