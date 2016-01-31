var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var data = [
  {id:1, name: "Toy Story", votes: 0},
  {id:2, name: "Gladiator", votes: 0},
  {id:3, name: "Spartacus", votes: 0},
  {id:4, name: "Platoon", votes: 0},
  {id:5, name: "Batman returns", votes: 0},
];

app.get('/surveyItems', function (req, res) {
  res.json(data);
});
app.use(bodyParser.json());
app.put('/surveyItems/:id', function (req, res) {
  var id = req.params.id;
  var item = data.find(function(e) {return e.id == id});
  var pos = data.indexOf(item);
  data[pos] = req.body;
  res.json(data[pos]);
});
app.use(express.static('.'));

app.listen(80, function () {
  console.log('running');
});