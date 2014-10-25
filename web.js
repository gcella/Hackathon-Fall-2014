var express = require('express');
var app = express();
var util = require('util');
var request = require('request');
var cheerio = require('cheerio');

app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/getEvents', function(req, res) {
	var url = "http://events.tufts.edu/static";
	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);
			var date, eventn, descr, loc;
			var names = [];
			var json = { date : "", eventn : "", descr : "", loc : ""};

			$('.static-blog-descr').each(function( i ) {
			//$('.blog-ul').filter(function() {
				var data = $(this);

				names[i] = data.children().first().text();
				date = data.children().eq(1).text();
				descr = data.children().eq(2).text();
				loc = data.children().last().text();


				json.date = date;
				json.eventn = eventn;
				json.descr = descr;
				json.loc = loc;
				//info[i] = json;
			});

			var torender = "<h1>";
			for (i in names) {
				torender += names[i];
				torender += "</h1><br><h1>";
			}
			torender += "</h1>";

			//var x = JSON.stringify(info, null, 4);
			res.send(torender);

		}
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});