var express = require('express');
var app = express();
var util = require('util');
var request = require('request');
var cheerio = require('cheerio');

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var MONGOLAB_URI = "mongodb://heroku_app30984285:asrdlrc74fb18cvqal0d8r0gtq@ds047950.mongolab.com:47950/heroku_app30984285";

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
  //res.send("hello!");
});

app.get('/listclubs', function(req, res){
	res.render('listclubs');
})

app.get('/clubs', function(req, res) {
    MongoClient.connect(MONGOLAB_URI, function(err, db) {
        if(err) throw err;
        var collection = db.collection('clubs');
        // Locate all the entries using find
        collection.find().toArray(function(err, results) {
            console.dir(results);
            res.json(results);
            db.close();
        });
    });
});

app.get("/clubs/:id", function(req, res) {
    MongoClient.connect(MONGOLAB_URI, function(err, db) {
        if(err) throw err;
        var collection = db.collection('clubs');
        // Locate all the entries using find
        console.log(req.params.id);
        // collection.find(req.params.id).toArray(function(err, results) {
        //     console.dir(results);
        //     res.json(results);
        //     db.close();
        // });
    });
});

app.get('/foodfinder', function(req, res) {
	res.render('foodfinder');
})

app.get('/tuftsevents', function(req, res) {
	var url = "http://events.tufts.edu/static";
	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);

			var json = { "dates": [], "events": [], "descrs": [] };

			$('.static-blog-descr').text(function( i ) {
				var data = $(this);

				json.events[i] = data.children().first().text();
				//var events = JSON.stringify(data.children().first().text());
				var dataString = data.toString();
				var save = dataString.substr(dataString.indexOf('</h2>') + 5, dataString.length);
				var newString = dataString.substr(dataString.indexOf('</h2>') + 5, dataString.length);

				var dateString = newString.substr(0, newString.indexOf('<br>'));
				json.dates[i] = dateString; 
				//dateString = JSON.stringify(dateString);

				description = save.substr(save.indexOf('<br>'), save.indexOf('<b>')).split('<b>');
				json.descrs[i] = description;
				//description = JSON.stringify(description);
			});
			var x = JSON.stringify(json, null, 4);
			res.send(x);
		}
	});
});

app.get('/addevent', function(req, res) {
	res.render('eventform');
});

app.get('/addclub', function(req, res) {
	res.send("create a new club");
})

app.post('/newevent', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	db.collection("events", function(er, collection) {
		if(req.body.evn && req.body.date && req.body.descr) {
			var evenName = req.body.evn;
			var evDate = req.body.date;
			var descript = req.body.descr;
			var currTime = new Date().toUTCString();
			collection.insert({"name":evenName, "description": descript, "eventdate": evDate, "created_at": currTime}, function(err,r){});
		} else {
			console.log("bad data entry error");
		}
	});
	//res.render('index');
});

app.post('/addclub', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	db.collection("clubs", function(er, collection) {
		if(req.body.name && req.body.email && req.body.descr) {
			var clubName = req.body.name;
			var descr = req.body.descr;
			var email = req.body.email;
			var currTime = new Date().toUTCString();
			collection.insert({"name":clubName, "description": descr, "email": email, "created_at": currTime}, function(err,r){});
		} else {
			console.log("bad data entry error");
		}
	});
	//res.render('index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});




