'use strict';


const path  = require('path');


let app     = require(path.resolve(__dirname, '../server'));
const async = require('async');
// var Grocery = app.models.Grocery;
// var User    = app.models.user;
let middlewarez = require(path.resolve(__dirname, '../like-middleware-helper'));

exports.getAccount = (req, res, next) => {
	var groceryId  = req.params.groceryId;

	var ultimateGL = await middlewarez(next);


    // var ultimateGL = {};
	var response   = {};
	// let admin
	// try {

	// 	var User = app.models.user;

	// 	// this is a duplicated code. :todo
	// 	admin    = await User.findOne(User.queryUltimateAdmin());

	// 	var json     = admin.toJSON();
	// 	var ultimate = json.groceries[0];
	// 	ultimateGL = {
	// 	  id: ultimate.id,
	// 	  name: ultimate.name
	// 	};


	// } catch (e) {
	// 	//this will eventually be handled by your error handling middleware
	// 	next(e) 
	// }

	


};

// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}
