const path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        filename:'js/app.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use : ['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use : [
                    {
                        loader:'babel-loader',
                        options:{
                            babelrc:false,
                            presets:['@babel/preset-env'],
                            plugins:[require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                ]
            },
        ]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port:8080,
        compress:true,
    }
};