'use strict';

var async      = require('async');

module.exports = function(app) {

  var User        = app.models.user;
  var Role        = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  var accounts = [
	{
	  name: 'john',	
	  email: 'john.doe@ibm.com',
	  password: 'john',
	  created_at: new Date(),
	  updated_at: new Date(),
	},
	{
	  name: 'jane',
	  email: 'jane.doe@ibm.com',
	  password: 'jane',
	  created_at: new Date(),
	  updated_at: new Date(),
	},
	{
	  name: 'admin',
	  email: 'admin@ibm.com',
	  password: 'admin',
	  created_at: new Date(),
	  updated_at: new Date(),

	}
  ];

	accounts.forEach(function(element) {
	    // console.log(element);

	    User.findOrCreate({
	      where: {
	        name: element.name,
	        email: element.email,
	      }
	    }, element,
	    function (err, user) {
	      if (err) throw err;
	      // console.log("+ " + log.id);
	      // callback();

	      if (user.name == 'admin'){
      		// create the admin role

      			console.log(user);

      			// commented due to laziness moving this code to automigrate.
			    Role.create({
			      name: 'admin'
			    }, function(err, role) {
			      if (err) throw err;

			      console.log('Created role:', role);

			      //make admin an admin role
			      role.principals.create({
			        principalType: RoleMapping.USER,
			        principalId: user.id 
			      }, function(err, principal) {
			        if (err) throw err;

			        console.log('Created principal:', principal);
			      });
			    });

	      }


	    });

	});

};

function Recipes(app) {

	var recipes = [
		{ 
			"customerId": "2", 
			"ing":[ "6", "7", "8" ],
			 "id": "1989",
			  "name\": \"Crock Pot Roast\",
			  \"ingredients\": 
			  [{\"quantity\": \"1\",
			  \"name\": \" beef roast\",
			  \"type\": \"Meat\"},
			  {\"quantity\": \"1 package\",
			  \"name\": \"brown gravy mix\",
			  \"type\": \"Baking\"},
			  {\"quantity\": \"1 package\",
			  \"name\": \"dried Italian salad dressing mix\",
			  \"type": "Condiments"},
			  {\"quantity": "1 package",
			  \"name": "dry ranch dressing mix",
			  \"type": "Condiments"},
			  {\"quantity": "1/2 cup",
			  \"name": "water",
			  \"type": "Drinks"}],
			  \"directions": [
			  \"Place beef roast in crock pot.",
			  \"Mix the dried mixes together in a bowl and sprinkle over the roast.",
			  "Pour the water around the roast.","Cook on low for 7-9 hours."],  
			  prep_time    :"30min",
			  total_time   :"3h",
			  "recipe_yield" :"8",
			   "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg","url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
			   "created_at":"December 17, 2003 03:24:00",
			   updated_at:"December 17, 2003 03:24:00"
			},
		{ 
			"customerId": "1", 
			"ing":[ "7", "8", "9" ],
			 "id": "1990",
			  "name": "Crock Pot Roast",
			  "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
			  "ingredients": [{"quantity": "1","name": " beef roast"},
			  {"quantity": "1 package","name": "brown gravy mix"},
			  {"quantity": "1 package",
			  "name": "dried Italian salad dressing mix"},
			  {"quantity": "1 package","name": "dry ranch dressing mix"},
			  {"quantity": "1/2 cup","name": "water"}],"directions": 
			  [
			  "Place beef roast in crock pot.",
			  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
			  "Pour the water around the roast.",
			  "Cook on low for 7-9 hours."],
			  "prep_time"    :"PT30M",
			  "total_time"   :"PT3H",
			  "recipe_yield" :"8",
			  "created_at":"December 17, 2003 03:24:00",
			  "updated_at":"December 17, 2003 03:24:00"
	}
	];



};

function Menu(app){

};

function Grocery(app){
	{\"ing\":[\"6\", \"7\", \"8\" ], \"departments\": [{\"id\": \"1\", \"name\": \"BAKERY/BREAD\", \"items\": [{\"id\": \"6\",\"name\": \"black pepper\",\"recipeId\": [\"1\", \"2\"],\"type\": \"simple\",\"units\": \"1 teaspoon\",\"done\": \"0\",\"delete\": \"0\"}]},{\"id\": \"2\", \"name\": \"BAKING\", \"items\": [{\"id\": \"6\",\"name\": \"black pepper\",\"recipeId\": [\"1\", \"2\"],\"type\": \"simple\",\"units\": \"1 teaspoon\",\"done\": \"0\",\"delete\": \"0\"}]}], \"img\": \"string\", \"desc\": \"string\", \"slug\": \"string\", \"created_at\": \"2017-05-20T16:36:50.843Z\", \"updated_at\": \"2017-05-20T16:36:50.843Z\"}
};

function Ingredients(){

};