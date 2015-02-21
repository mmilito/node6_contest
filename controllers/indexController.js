// main controller page
var _= require('underscore');
var data = require('../models/data.js');


// define indexController object with available methods
var indexController = {

	// go home
	goHome: function(req,res){
		res.render('index', data);
	},
	
	// re-render voting page with next pair
	incrementPair: function(req,res){
		//BEWARE OF DATA TYPE
		data.startVotingPair=(parseInt(data.startVotingPair)+1).toString();
		res.redirect('/videos');
	},


	// render video page, makes data (model) available
	getVideos: function(req,res){
		data.pairs();
		res.render('videos', data);	
	},

	// get the data from form, add to array and go to video page
	subForm: function(req,res){
		if (data.bigVideoArray.length<data.numContestants){
			data.bigVideoArray.push(req.body);
		}
		res.redirect('/videos');
	},

	// go on to voting page
	goPage: function(req,res){
		res.redirect('/videos');
	},

	// voting function
	goVote: function(req,res){
		var votedFor=_.find(data.bigVideoArray, {name: decodeURIComponent(req.params.name)});
		var votedIndex= _.indexOf(data.bigVideoArray,votedFor);
		data.bigVideoArray[votedIndex].votes=data.bigVideoArray[votedIndex].votes+1;
		res.redirect('/videos');
	}

};

module.exports=indexController;