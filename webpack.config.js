const path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        filename:'js/app.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port:8080,
        compress:true,
        open:true
    }
};