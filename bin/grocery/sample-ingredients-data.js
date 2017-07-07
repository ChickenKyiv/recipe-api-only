'use strict';

module.exports = function getSampleData (cb){

	var ingredients = [
	{ 
	
		name: "black pepper",
		// recipe_id: ["1", "2"],
		type: "simple",
		units: "1 teaspoon",
		done: "0",
		delete: "0", 

		// recipesId: '5928d6ddcef3be0530f8bdff'
	},
	{ 
  	
      name: "extra-virgin olive oil",
      // recipe_id: ["1", "2", "3", "4"],
      type: "complex",
      units: "17 tablespoons + 0.25 cup",
      done: "0",
      delete: "0", 
     
      // recipesId: '5928d6ddcef3be0530f8bdff'
  	},
  	{ 
      
      name: "kosher salt",
      // recipe_id: ["5", "6", "7", "8"],
      type: "simple",
      units: "1 teaspoon",
      done: "0",
      delete: "0", 

      // recipesId: '5928d6ddcef3be0530f8be00'
	},
	{ 
      
      name: "kosher salt and freshly ground black",
      // recipe_id: ["1", "2", "3", "4"],
      type: "simple",
      units: "5 teaspoons",
      done: "0",
      delete: "0", 
     
      // recipesId: '5928d6ddcef3be0530f8bdff',
	}
	];



	return ingredients;
};