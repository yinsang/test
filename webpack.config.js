let path = require('path');
module.exports = {
    entry: './app.js',
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer:{
        compress: true,
        port:7000,
        open: true,
        inline: true
    }
}