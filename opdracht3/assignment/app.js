var express = require('express');
// var webSocketServer = require('ws').Server;
var app = express();
// var wss = new webSocketServer({ port:3000 });

app.use('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(3000);
