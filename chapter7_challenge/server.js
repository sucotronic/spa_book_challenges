var express = require('express');
var app = express();
var movies = ["Blade Runner", "Gladiator", "Toy Story", "Ghost in the shell"];
/*
    $rootScope.$on("search", function(e, msg) {
        var results = movies.filter(RegExp.prototype.test.bind(new RegExp(msg, "i")));
        $rootScope.$broadcast("results", results);
    });
*/
app.get('/search/:query', function (req, res) {
  var results = movies.filter(RegExp.prototype.test.bind(new RegExp(req.params.query, "i")));
  res.json({results:results});
});
app.use(express.static('.'));
app.listen(80, function () {
  console.log('running');
});