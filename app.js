// entry point

// require node-modules
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

// require MVC model files
var indexController = require('./controllers/indexController.js');
var data = require('./models/data.js');

// app definition and setup from scaffolding
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//////??? SHOULD THESE BE CHAINED UNDER app.route()?
// route definitions
app.get('/', indexController.goHome);
app.get('/videos', indexController.getVideos);
app.post('/video2', indexController.incrementPair);
app.post('/formsubmit', indexController.subForm);
app.post('/gotopage', indexController.goPage);
app.get('/votesubmit/:name', indexController.goVote);


var server = app.listen(3955, function() {
	console.log('Express server listening on port ' + server.address().port);
});
