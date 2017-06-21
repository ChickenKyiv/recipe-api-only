'use strict';


var path        = require('path');
var async       = require('async');

let server      = require(path.resolve(__dirname, '../server/server'));

var database    = server.datasources.videoDS;


let getUsers         = require(path.resolve(__dirname, 'sample-users-data'));

let getRecipes       = require(path.resolve(__dirname, 'sample-recipes-data'));

let getMenus         = require(path.resolve(__dirname, 'sample-menus-data'));

let getIngredients   = require(path.resolve(__dirname, 'sample-ingredients-data'));

let getGroceries     = require(path.resolve(__dirname, 'sample-grocery-data'));

let getDepartments   = require(path.resolve(__dirname, 'sample-departments-data'));

let getUsers         = require(path.resolve(__dirname, 'sample-users-data'));


let getAllergy  = require(path.resolve(__dirname, 'allergy'));
let getCourses  = require(path.resolve(__dirname, 'courses'));
let getCuisine  = require(path.resolve(__dirname, 'cuisine'));
let getDiets    = require(path.resolve(__dirname, 'diet'));
let getHolidays = require(path.resolve(__dirname, 'holidays'));


//models
var User        = server.models.UserModel;


var Recipe      = server.models.RecipeModel; 
var Ingredient  = server.models.IngredientModel;

var Menu        = server.models.MenuModel;
var Grocery     = server.models.GroceryModel;

var Department  = server.models.DepartmentModel;

var Allergy =  server.models.AllergyModel;

var Course  =  server.models.CourseModel;

var Cuisine =  server.models.CuisineModel;

var Diet    =  server.models.DietModel;

var Holiday =  server.models.HolidayModel;



// module.exports = function(){

	async.parallel({
		users       : async.apply(createUsers),
		recipes     : async.apply(createRecipes),
		
		ingredients : async.apply(createIngredients),
		menus       : async.apply(createMenus),
		groceries   : async.apply(createGroceries),
		departments : async.apply(createDepartments),

		allergies   : async.apply(createAllergies)
		courses     : async.apply(createCourses)
		cuisines    : async.apply(createCuisines)
		diets       : async.apply(createDiets)
		holidays    : async.apply(createHolidays)

	}, function(err, results){
		if( err ) throw err;

		// console.log(results);
		// console.log(results.users);
		// console.log(results.recipes);
		// console.log(results.ingredients);
		// console.log(results.menus);
		// console.log(results.groceries);
		// console.log(results.departments);
		// console.log(results.allergies);
		// console.log(results.courses);
		// console.log(results.cuisines);
		// console.log(results.diets);
		// console.log(results.holidays);

// results.holidays
// results.diets
// results.cuisines
// results.courses
// results.allergies
// results.department
// results.groceries

		attachVideosToUsers(results.users, results.videos, function(err){
			console.log('>models create sucessfully');
		});


		// attachExampleVideosToAdmin(results.users, results.examples1, function(err){
		// 	console.log('>examples1 attached to admin');
		// });

		// attachExampleVideosToAdmin(results.users, results.examples2, function(err){
		// 	console.log('>examples2 attached to admin');
		// });

		// attachExampleVideosToAdmin(results.users, results.examples3, function(err){
		// 	console.log('>examples3 attached to admin');
		// });

		// attachExampleVideosToAdmin(results.users, results.examples4, function(err){
		// 	console.log('>examples4 attached to admin');
		// });



	});

// };




function createUsers(cb){
	// console.log(users);
	database.automigrate('UserModel', function(err){
		if (err) return cb(err);

		User.create(getUsers(), cb);
	});
};


function createRecipes(cb){
	database.automigrate('RecipeModel', function(err){
		if (err) return cb(err);

		Recipe.create(getRecipes(), cb);
	});
};

function createIngredients(cb){
	database.automigrate('IngredientModel', function(err){
		if (err) return cb(err);

		Ingredient.create(getIngredients(), cb);
	});
};


function createMenus(cb){
	database.autoupdate('MenuModel', function(err){
		if (err) return cb(err);

	
	
		Menu.create(getMenus(), cb);
	
	});
};

function createGroceries(cb){
	database.autoupdate('GroceryModel', function(err){
		if (err) return cb(err);

	
	
		Grocery.create(getGroceries(), cb);
	
	});
};

function createDepartments(cb){
	database.autoupdate('DepartmentModel', function(err){
		if (err) return cb(err);

	
	
		Department.create(getDepartments(), cb);
	
	});
};

function createAllergies(cb){
	database.autoupdate('AllergyModel', function(err){
		if (err) return cb(err);

	
	
		Allergy.create(getAllergy(), cb);
	});
};

function createCourses(cb){
	database.autoupdate('CourseModel', function(err){
		if (err) return cb(err);

	
	
		Course.create(getCourses(), cb);
	});
};

function createCuisines(cb){
	database.autoupdate('CuisineModel', function(err){
		if (err) return cb(err);

	
	
		Cuisine.create(getCuisine(), cb);
	});
};

function createDiets(cb){
	database.autoupdate('DietModel', function(err){
		if (err) return cb(err);

	
	
		Diet.create(getDiets(), cb);
	});
};

function createHolidays(cb){
	database.autoupdate('HolidayModel', function(err){
		if (err) return cb(err);

		Holiday.create(getHolidays(), cb);
	});
};




//attaching recipes to admin user
function attachRecipeToUsers(users, videos, cb){

	// videos.forEach(function(video){
	// 	video.updateAttribute('userId', users[2].id);
	// 	console.log(video.userId);
	// });

	// Video.updateAttribute('userId', users[0].id);
};

function attachMenusToUsers(users, videos, cb){

	// videos.forEach(function(video){
	// 	video.updateAttribute('userId', users[2].id);
	// 	console.log(video.userId);
	// });

	// Video.updateAttribute('userId', users[0].id);
};

function attachIngredientsToRecipes(ingredients, recipes, cb){

};

function attachRecipesToMenu(recipes, menus, cb){

};

function attachDepartmentsToGroceries(departments, groceries, cb){

};

function attachAllergiesToRecipes(allergies, recipes, cb){

};

function attachCoursesToRecipes(courses, recipes, cb){

};

function attachCuisinesToRecipes(cuisines, recipes, cb){

};

function attachDietsToRecipes(){

};

function attachHolidaysToRecipes(){

};


// function attachExampleVideosToAdmin(users, exampleVideos, cb){

// 	// exampleVideos.forEach(function(video){
// 	// 	video.updateAttribute('userId', users[2].id);
// 	// 	// console.log(video.userId);
// 	// });

// };


