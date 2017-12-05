var express = require('express');
var path = require('path');
 
var page = require("./page.generator.js").page;
 
var app = express();
var port = 8082;
 
app.use(express.static(path.join(__dirname, '..', 'public')));
 
app.get('/', function(req, res) {
    var html = page();
    res.end(html);
});
 
app.listen(port, function() {
    console.log('Listening on port %d', port);
});