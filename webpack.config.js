const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        global: './src/global.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true,
    devtool: 'cheap-eval-source-map',
};