const base = require('./webpack.base');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const env = require('./../config/prod.env');

module.exports = merge(base,{
    plugins:[
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env':JSON.stringify(env)
        })
    ],
});