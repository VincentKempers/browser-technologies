var express = require('express');
var faker = require('faker');
var app = express();

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

// storing all the users in an array
var allUsers = [];

// function to sort the data.
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
// looping over all data to push in fake user!
for (var i = 0; i < 15; i++) {
  var fakeUser = faker.helpers.createCard();
  // push all data to allUsers
  allUsers.push(fakeUser);
  allUsers.sort(compare);
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
    // console.log(d.name);
    if (req.params.id == d.name) {
      console.log(d.name);
    } else {
      console.log('vincent');
    }
  });
  res.render('detail', {fakePerson: rightUser});
});


app.listen(8600);
