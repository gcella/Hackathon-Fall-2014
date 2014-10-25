var express = require('express');
var app = express();
var util = require('util');
var request = require('request');
var cheerio = require('cheerio');
var pg = require('pg');
var conString = "postgres://ihihinqvcgnpgv:AInbBQ7QFjQWlpGB3XNyHCEktb@ec2-54-225-136-187.compute-1.amazonaws.com/dqraht2o37lsn";

//for security, we should implement this (later) <-- LOL
//var escape = require('escape');

app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/test', function(req, res){
  res.sendfile('matts.json');
});

app.get('/clubs', function(req, res) {
    /*pg.connect(conString, function(err, client, done) {
      if(err) {
        res.send('Error fetching data');
      }
      client.query('SELECT NOW() AS "theTime"', function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if(err) {
          return console.error('error running query', err);
        }
        res.send(result);
      });
    });*/
})

app.get('/events', function(req, res) {
	var url = "http://events.tufts.edu/static";
	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);

			var json = { "dates": [], "events": [], "descrs": [] };

			$('.static-blog-descr').text(function( i ) {
				var data = $(this);

				json.events[i] = data.children().first().text();

				var dataString = data.toString();
				var save = dataString.substr(dataString.indexOf('</h2>') + 5, dataString.length);
				var newString = dataString.substr(dataString.indexOf('</h2>') + 5, dataString.length);

				var dateString = newString.substr(0, newString.indexOf('<br>'));
				json.dates[i] = dateString; 

				description = save.substr(save.indexOf('<br>'), save.indexOf('<b>')).split('<b>');
				json.descrs[i] = description;
			});

			var x = JSON.stringify(json, null, 4);
			res.send(x);

		}
	});
});


app.post('/addEvent', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
   	collection("events", function (er, collection){
      if(req.body.name && req.body.descr) {        
      	// update this with all the info we get from the user!!!
      	// escape these fields later!!!!!!!!!
        var name = req.body.name;
        var descr = req.body.descr;
        var username = req.body.username;
        var currTime = new Date().toUTCString();	//to use for event ID
        collection.insert({"score": score, "username": username, "grid": grid, "created_at":currTime}, function (err, r){});
      } else {
        console.log("Error: Not all fields specified in post request. Required: score, username, grid)");
      }  
    });
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});