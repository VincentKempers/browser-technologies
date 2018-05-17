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


// request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
//   var data = JSON.parse(body);
//   var contacts = data.map(function(d){
//     console.log(d);
//     return {
//       name: d.name + ' ' + d.surname,
//       region: d.region
//     }
//   })
//   console.log(contacts);
//
// });

// app.use('/:id', function(req, res){
//   request('https://uinames.com/api/?ext', function (error, response, body) {
//     var data = JSON.parse(body);
//     var contact = data.map(function(d){
//       return {
//         name: d.title + ' ' + d.name + ' ' + d.surname,
//         region: d.region,
//         birthday: d.birthday.dmy,
//         email: d.email,
//         image: d.photo
//       }
//     })
//     res.render('detail', {data: contact});
//   });
// });

app.listen(8600);
