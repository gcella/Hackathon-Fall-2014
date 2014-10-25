var express = require('express');
var app = express();
var util = require('util');

app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});