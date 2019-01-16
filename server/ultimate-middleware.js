'use strict';


const path  = require('path');
const app   = require(path.resolve(__dirname, '../server/server'));
const User  = app.models.user;
const async = require('async');

// :todo this is a partly copied functionality from other midleware funciton.
// this is a duplicated code, and we need to change that.
// in order to not renaming a few functions we did this.

// :todo loopback provide an ability to incapsulate
module.exports = async function(next){
	let ultimateGL
	let admin
	try {	    
	    // this is a duplicated code. :todo
	    admin    = await User.findOne(User.queryUltimateAdmin());

	    var json     = admin.toJSON();
	    var ultimate = json.groceries[0];

    
	} catch (e) {
	//this will eventually be handled by your error handling middleware
		next(e) 
	}
	
	return ultimate;

};