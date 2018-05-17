var express = require('express');
var faker = require('faker');
var app = express();

app.set('view engine', 'pug');

var allUsers = [];

for (var i = 0; i < 3; i++) {
  var fakeUser = {
    card: faker.helpers.createCard()
  };
  allUsers.push(fakeUser)
};

app.get('/', function(req,res){
  res.redirect('/contacts')
})

app.use('/contacts', function(req, res){
  res.render('index', {fakePerson: allUsers});
});

app.get('/:id', function(req, res) {
  var rightUser = [];
  allUsers.forEach(function (d) {
    if (d.card.name === req.params.id) {
      console.log(d.card);
      rightUser.push(d.card);
    }
  });
  res.render('detail', {fakePerson: rightUser});
});


app.listen(8600);
