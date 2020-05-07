const path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        filename:'js/app.js',
        path: path.resolve(__dirname,'./../dist')
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'../src'),
            'styles':path.join(__dirname,'../src/assets/styles')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use : [
                    {
                        loader:'babel-loader',
                        options:{
                            //
                        }
                    }
                ]
            },
        ]
    }
};