// data page for videos
// Emma's link below, for cut and paste
// <iframe width="560" height="315" src="https://www.youtube.com/embed/gddAqLoW6Qg" frameborder="0" allowfullscreen></iframe>

/////!!!! Change here to alter number of contestants allowed
var numContestants = 4;

var _ = require('underscore');

// data structure, 
var bigVideoArray = [
	{	name: 'Kalyn Geisler',
		url: 'iframe width="560" height="315" src="https://www.youtube.com/embed/MEgP5MHOstI" frameborder="0" allowfullscreen></iframe',
		title: 'Kalyn & Malu',
		description: 'stacking up',
		votes: 0
		},
	{	name: 'Leah Coe',
		url:'iframe width="560" height="315" src="https://www.youtube.com/embed/tnt9Bj0w4tU" frameborder="0" allowfullscreen></iframe',
		title: 'Mayfest 2013',
		description: 'Gold freestyle on Oliver',
		votes: 0
		},
	{	name: 'Joanne Eccles',
		url:'iframe width="560" height="315" src="https://www.youtube.com/embed/ok_7TF_3Bzo" frameborder="0" allowfullscreen></iframe',
		title: 'WEG 2014',
		description: 'Start at 45 secs, one-handed handstand near end',
		votes: 0
		},
	{	name: 'Emma Milito',
		url: 'iframe width="560" height="315" src="https://www.youtube.com/embed/gddAqLoW6Qg" frameborder="0" allowfullscreen></iframe',
		title: 'Emma Copper',
		description: 'first copper competition',
		votes: 0
	}
];

// seed value to move through voting pairs - BEWARE of DATA TYPE!!!
var startVotingPair = "1";

module.exports = {
	numContestants: numContestants,
	bigVideoArray: bigVideoArray,
	startVotingPair: startVotingPair
};