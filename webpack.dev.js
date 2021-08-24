const {merge} = require('webpack-merge'),
    path = require('path'),
    common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9090,
        historyApiFallback: true,
        liveReload: true,
        hot: true
    }
});