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
			var date, eventn, campus;
			var json = { date : "", eventn : "", campus : ""};

			$('.static-blog-descr').filter(function() {
				var data = $(this);

				json.data = 
			})
		}
	})
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});