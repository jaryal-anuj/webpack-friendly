const base = require('./webpack.base');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const env = require('./../config/prod.env');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base,{
    devtool:'#source-map',
    module:{
        rules:[
            {
                test:/\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
        ]
    },
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env':JSON.stringify(env)
        }),
        new ExtractTextPlugin({
            filename:'../dist/css/app.css'
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions:{
                map:{
                    inline:false
                }
            }
        })
    ],
});