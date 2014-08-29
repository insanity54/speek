var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);



// Serve the html css js
// ==========================

var port = 8181;

app.use(express.static(__dirname + '/client'));

server.listen(port);
console.log('server listening on port ' + port);
