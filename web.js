//web.js -- Oct 24

var express = require("express");
var logfmt = require("logfmt");
//var routes = require("./routes/routes");
var http = require("http");
var path = require ("path");
var mongo = require("mongodb");

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
        "mongodb://localhost/tuftsclubs";

var db = mongo.Db.connect(mongoUri, function (err, database) {
      db = database;
});

// environments
app.set("port", process.env.PORT || 3000);
app.use(logfmt.requestLogger());
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "jade");
//app.use(express.logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, "public")));
//app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/index.html", express.static(__dirname + "/index.html"));

// development only
//if ("development" == app.get("env")) {
//  app.use(express.errorHandler());
//}

//root: prints a list of users and scores
app.get('/', function(req,res) {
  res.set("Content-Type", "text/html");
  var htmlToRender = '<!DOCTYPE HTML><html><head><link href="/style/main.css" media="all" rel="stylesheet" type="text/css" /><link href="/style.css" media="all" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/></head><body><h1>Tufts Clubs</h1><br><h2>Tufts Clubs!</h2><table id="mytable"><thead><tr><th>Event</th><th>Club Name</th></tr></thead><tbody>';
//  db.collection("events", function(er, col) {
/*    if (!er) {
      col.find().sort({score:-1}).toArray(function(errr,goodthing){
        // list all events and clubs!
        htmlToRender += "</tbody></table></body></html>"
        res.send(htmlToRender);
        });*/
  //}
  //});
  res.send(htmlToRender);
});

// SHOWS FREE FOOD
app.get('/freefood', function(req, res) {
  res.sendfile(path.join(__dirname, 'public', path.basename("index.html")));
});


http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});
