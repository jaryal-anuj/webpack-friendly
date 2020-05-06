const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(base,{
    devServer:{
        contentBase: path.join(__dirname,'./../dist'),
        port:8080,
        compress:true,
    }
});