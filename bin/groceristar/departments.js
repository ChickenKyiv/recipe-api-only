'use strict';

const path      = require('path');
let server      = require(path.resolve(__dirname, '../../server/server'));
var database    = server.datasources.groceryDS;

var Department  = server.models.Department;

// var relation1   = 'departmentId';
// var relation2   = 'departmentIds';
// const Raven = require('raven');
// Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();


function getDepartments(){

	var departments = [
		{

		 name: "Fresh vegetables",
		 type: 'food'
		},
		{

		 name: "Condiments / Sauces",
		 type: 'food'
		},
		{

		 name: "Dairy",
		 type: 'food'
		},{

		 name: "Cheese",
		 type: 'food'
		},{

		 name: "Meat",
		 type: 'food'
		},{

		 name: "Seafood",
		 type: 'food'
		},{

		 name: "Beverages",
		 type: 'food'
		},{

		 name: "Baked goods",
		 type: 'food'
		},{

		 name: "Baking",
		 type: 'food'
		},{

		 name: "Snacks",
		 type: 'food'
		},{

		 name: "Themed meals",
		 type: 'food'
		},{

		 name: "Baby stuff",
		 type: 'non-food'
		},{

		 name: "Pets",
		 type: 'non-food'
		},{

		 name: "Fresh fruits",
		 type: 'food'
		},{

		 name: "Refrigerated items",
		 type: 'food'
		},{

		 name: "Frozen",
		 type: 'food'
		},{

		 name: "Various groceries",
		 type: 'food'
		},{

		 name: "Canned foods",
		 type: 'food'
		},{

		 name: "Spices & herbs",
		 type: 'food'
		},{

		 name: "Personal care",
		 type: 'household'
		},{

		 name: "Medicine",
		 type: 'household'
		},{

		 name: "Kitchen",
		 type: 'household'
		},{

		 name: "Other",
		 type: 'household'
		},{

		 name: "Cleaning products",
		 type: 'household'
		},{

		 name: "Office supplies",
		 type: 'household'
		},{

		 name: "Other stuff",
		 type: 'household'
		},{

		 name: "To-do list",
		 type: 'household'
		}
	];

	return departments;

};

function createDepartments(cb){
	database.autoupdate('Department', function(err){
		if (err) {
			Raven.captureException(err);
			return cb(err);
		}

		Department.create(getDepartments(), cb);

	});
};



function idsOnly(array){

  var result = Object.keys(array).map(function(e) {
    return array[e].id;
    });

  return result;

};


module.exports.createDepartments = createDepartments;
