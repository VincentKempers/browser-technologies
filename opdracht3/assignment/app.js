var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'pug');

app.use('/', function(req, res){
  request('https://uinames.com/api/?amount=25', function (error, response, body) {
    var data = JSON.parse(body);
    console.log(data)
    var contacts = data.map(function(d){
      return {
        name: d.name + ' ' + d.surname,
        region: d.region
      }
    })
    res.render('index', {data: contacts});
  });
});

app.listen(3000);
