var express = require('express');
var app = express();
var util = require('util');
var request = require('request');
var cheerio = require('cheerio');
//for security, we should implement this (later) <-- LOL
//var escape = require('escape');

app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/events', function(req, res) {
	var url = "http://events.tufts.edu/static";
	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);
			//var date, eventn, descr, loc;
			//var names = [];
			//var json = { "dates": [], "events": [], "descrs": [], "locs": [] };
			var json;
			$('.static-blog-descr').text(function( i ) {
			//$('.blog-ul').filter(function() {
				var data = $(this);
				
				//eventn = data.children().first().text();
				//date = data.children().eq(1).text();
				//descr = data.children().eq(2).text();
				//loc = data.children().last().text();
				
				json += data;
				//json.dates[i] = date;
				//json.events[i] = eventn;
				//json.descrs[i] = descr;
				//json.locs[i] = loc;
			});
/*
			var torender = "";
			for (i in names) {
				torender += names[i];
				torender += "</h1><br><h1>";
			}
			torender += "</h1>";
*/
			var x = JSON.stringify(json, null, 4);
			res.send(x);

		}
	});
});


app.post('/addEvent', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
   	.collection("events", function (er, collection){
      if(req.body.name && req.body.descr) {        
      	// update this with all the info we get from the user!!!
      	//escape these fields later!!!!!!!!!
        var name = req.body.name;
        var descr = req.body.descr;
        var username = req.body.username;
        var currTime = new Date().toUTCString();	//to use for event ID
        collection.insert({"score": score, "username": username, "grid": grid, "created_at":currTime}, function (err, r){});
      } else {
        console.log("Error: Not all fields specified in post request. Required: score, username, grid)");
      }  
    });
  });
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});