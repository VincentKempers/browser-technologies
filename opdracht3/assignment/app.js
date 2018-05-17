var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'pug');

app.use('/', function(req, res){
  request('https://uinames.com/api/?amount=25', function (error, response, body) {
    var data = JSON.parse(body);
    var contacts = data.map(function(d){
      return {
        name: d.name + ' ' + d.surname,
        region: d.region
      }
    })
    res.render('index', {data: contacts});
  });
});


app.use('/:id', function(req, res){
  request('https://uinames.com/api/?ext', function (error, response, body) {
    var data = JSON.parse(body);
    var contact = data.map(function(d){
      return {
        name: d.title + ' ' + d.name + ' ' + d.surname,
        region: d.region,
        birthday: d.birthday.dmy,
        email: d.email,
        image: d.photo
      }
    })
    res.render('detail', {data: contact});
  });
});

app.listen(8600);
