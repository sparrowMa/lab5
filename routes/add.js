var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here

	// console.log("testForAddFriend");
	var newName = req.query.name;
	var newDes = req.query.description;
	// console.log(newName);
	// console.log(newDes);

	var newFriend = {
			"name": newName,
			"description": newDes,
			"imageURL": "http://lorempixel.com/400/400/people"			
	};
	// console.log(newFriend);

	data.friends.push(newFriend);

	res.render('index', data);
 }