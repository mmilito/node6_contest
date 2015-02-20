// main controller page

var data = require('../models/data.js');

// define indexController object with available methods
var indexController = {

	// go home
	goHome: function(req,res){
		res.render('index', data);
	},

	// render video page, makes data (model) available
	getVideos: function(req,res){
			
			// make pairs of videos to vote on
		for(var i=0;i<data.bigVideoArray.length;i++){
			if ((i+1) %2 === 0){
				data.bigVideoArray[i].pairs="a";
			} else {
				data.bigVideoArray[i].pairs="b";
			}
		}
		res.render('videos', data);
	},

	// get the data from form, add to array and go to video page
	subForm: function(req,res){
		data.bigVideoArray.push(req.body);
		res.redirect('/videos');
	},

	// go on to video review page
	goPage: function(req,res){
		res.redirect('/videos');
	}

};

module.exports=indexController;