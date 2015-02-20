// entry point

// require node-modules
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

// require MVC model files
var indexController = require('./controllers/indexController.js');
//var voteController = require('./controllers/voteController.js');
var data = require('./models/data.js');

// app definition and setup from scaffolding
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// define routing
app.get('/', indexController.goHome);
app.get('/videos', indexController.getVideos);
app.post('/formsubmit', indexController.subForm);
app.post('/goToPage', indexController.goPage);
// app.get('/makepairs', voteController.makePairs);
//app.post('/votesubmit', voteController.goForm);




var server = app.listen(3955, function() {
	console.log('Express server listening on port ' + server.address().port);
});
