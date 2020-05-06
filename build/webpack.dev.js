const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const env = require('./../config/dev.env');

module.exports = merge(base,{
    devServer:{
        contentBase: path.join(__dirname,'./../dist'),
        port:8080,
        compress:true,
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':JSON.stringify(env)
        })
    ],
});