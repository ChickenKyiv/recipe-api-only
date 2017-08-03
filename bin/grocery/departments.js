'use strict';

var path        = require('path');
let server      = require(path.resolve(__dirname, '../../server/server'));
var database        = server.datasources.groceryDS;

var Department  = server.models.Department;
var relation1   = 'departmentId';
var relation2   = 'departmentIds';


function getDepartments(){

	var departments = [
		{
	
		 name: "BAKERY/BREAD",
		  items: [
		
		  ]
		},
		{
		
			name: "BAKING",
			items: [
			
			]
		}
	];

	return departments;

};

function createDepartments(cb){
	database.autoupdate('Department', function(err){
		if (err) return cb(err);

		Department.create(getDepartments(), cb);
	
	});
};


function attachDepartmentsToIngredients(departments, ingredients){

	var first  = ingredients.slice(0, 2);
	var second = ingredients.slice(1, 3);
	// console.log(ingredients.splice(2, 4));
	// console.log(ingredients.splice(2, 2));


	var arrayWithIds = idsOnly(departments);

	// console.log(arrayWithIds[0]);
	// console.log(arrayWithIds[1]);
	// console.log(arrayWithIds[2]);
	
	first.forEach(function(ingredient){
		ingredient.updateAttribute(relation1, arrayWithIds[0]);
	});

	second.forEach(function(ingredient){
		ingredient.updateAttribute(relation1, arrayWithIds[1]);
	});



	// console.log(first);
	// console.log(second);

};

function attachDepartmentsToGroceries(departments, groceries){
	var arrayWithIds = idsOnly(departments);

	groceries.forEach(function(grocery){
		grocery.updateAttribute(relation2, arrayWithIds);
		
	});
	// console.log(groceries);
};

module.exports.createDepartments = createDepartments;
module.exports.attachDepartmentsToIngredients = attachDepartmentsToIngredients;
module.exports.attachDepartmentsToGroceries = attachDepartmentsToGroceries