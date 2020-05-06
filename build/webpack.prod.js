const base = require('./webpack.base');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(base,{
    plugins:[
        new UglifyJSPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            minimize:true
                        }
                    },
                    'sass-loader']
            },
        ]
    }
});