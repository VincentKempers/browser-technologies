var express = require('express');
var faker = require('faker');
var app = express();

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

// storing all the users in an array
var allUsers = [];
var newAllUsers = [];
// function to sort the data.
function compare(a,b) {
  if (a.fullName < b.fullName)
    return -1;
  if (a.fullName > b.fullName)
    return 1;
  return 0;
}
// looping over all data to push in fake user!
for (var i = 0; i < 100; i++) {
  var fakeUser = faker.helpers.createCard();
  // push all data to allUser
  allUsers.push(fakeUser);
  newAllUsers = allUsers.map(function(d){
    return {
      firstLetter: d.name.charAt(0),
      fullName: d.name,
      nickName: d.username
    }
  })
  newAllUsers.sort(compare);
};

app.get('/', function(req,res){
  res.redirect('/contacts')
})

app.use('/contacts', function(req, res){
  res.render('index', {fakePerson: newAllUsers});
});

app.get('/:id', function(req, res) {
  var rightUser = [];
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username == req.params.id) {
      rightUser.push(allUsers[i]);
    }
  }
  res.render('detail', {fakePerson: rightUser});
});


app.listen(8600);
