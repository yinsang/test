<<<<<<< HEAD
var path = require("path");
var assetsPath = path.join(__dirname, "public", "assets");
var serverPath = path.join(__dirname, "server");
module.exports = [
    {
        name: "browser",
        entry: "./app/entry.js",
        output:{
            path:assetsPath,
            filename: 'entry.generator.js'
        },
        module:{
            loaders:[
                {
                    test:/\.js/, loader: "jsx-loader"
                }
            ]
        }
    },{
        name: "server-side rending",
        entry: "./server/page.js",
        output:{
            path: serverPath,
            filename: "page.generator.js",
            library: "page",
            libraryTarget: 'commonjs'
        },
        module:{
            loaders:[
                {
                    test: /\.js$/, loader: "jsx-loader"
                }
            ]
        }
    }
]
=======
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
>>>>>>> 09fd33cb3dc5b6ed73297b442297fc5ba0c59f11
