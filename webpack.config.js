module.exports = {
    entry: './app.js',
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer:{
        port:7000,
        open: true,
        hot: true,
        inline: true
    }
}