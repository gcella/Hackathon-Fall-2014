var express = require('express');
var app = express();
var util = require('util');

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
			var json = { date : "", eventn : "", descr : "", loc : ""};

			$('.static-blog-descr').filter(function() {
				var data = $(this);

				eventn = data.children().first().text();
				date = data.children().eq(1).text();
				descr = data.children().eq(2).text();
				loc = data.children().eq(4).text();

				json.date = date;
				json.eventn = eventn;
				json.descr = descr;
				json.loc = loc;
			});
			var x = JSON.stringify(json, null, 4);
			res.send(x);
		}
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});