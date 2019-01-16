'use strict';

// module.exports.groceryIterator = function(grocery){
// 	console.log(grocery);
// };
// module.exports.getUltimateGroceryData = function(req, res, next){
const path  = require('path');
const app   = require(path.resolve(__dirname, '../server/server'));
const User  = app.models.user;
const async = require('async');

module.exports = async function(next){
	let ultimateGL
	let admin
	try {	    

	    // this is a duplicated code. :todo
	    admin    = await User.findOne(User.queryUltimateAdmin());

	    var json     = admin.toJSON();
	    var ultimate = json.groceries[0];
	    ultimateGL = {
	      id: ultimate.id,
	      name: ultimate.name
	    };
	    // console.log(ultimateGL);
	    
	} catch (e) {
	//this will eventually be handled by your error handling middleware
		next(e) 
	}
	// console.log(ultimateGL);

	return ultimateGL;

};