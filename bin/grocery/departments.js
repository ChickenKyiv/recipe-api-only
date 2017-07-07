'use strict';


var Department  = server.models.DepartmentModel2;
function getDepartments(){

	var departments = [
		{
	
		 name: "BAKERY/BREAD",
		  // items: [
		 //  {
		 //  	id: "6",
		 //  	name: "black pepper",
		 //  	// recipeId: ["1", "2"],
		 //  	type: "simple",
		 //  	units: "1 teaspoon",
		 //  	done: "0",
		 //  	delete: "0"
			// }
		  // ]
		},
		{
		
			name: "BAKING",
			// items: [
			// {
			// 	"id": "6",
			// 	name: "black pepper",
			// 	// recipeId: ["1", "2"],
			// 	type: "simple",
			// 	units: "1 teaspoon",
			// 	done: "0","delete": "0"
			// }
			// ]
		}
	];

	return departments;

};

function createDepartments(cb){
	database.autoupdate('DepartmentModel2', function(err){
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
		ingredient.updateAttribute('depId', arrayWithIds[0]);
	});

	second.forEach(function(ingredient){
		ingredient.updateAttribute('depId', arrayWithIds[1]);
	});



	// console.log(first);
	// console.log(second);

};

function attachDepartmentsToGroceries(departments, groceries){
	var arrayWithIds = idsOnly(departments);

	groceries.forEach(function(grocery){
		grocery.updateAttribute('departmentIds', arrayWithIds);
		
	});
	// console.log(groceries);
};

module.exports.createDepartments = createDepartments;
module.exports.attachDepartmentsToIngredients = attachDepartmentsToIngredients;
module.exports.attachDepartmentsToGroceries = attachDepartmentsToGroceries