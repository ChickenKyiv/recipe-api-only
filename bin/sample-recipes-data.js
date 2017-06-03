'use strict';

module.exports = function getSampleData (cb){

	var recipes = [
	{ 
		customerId: "2", 
		// ing:[ "6", "7", "8" ],
		// ingredients: [ "6", "7", "8" ],
		 // id: "1989",
		  // name: "Crock Pot Roast12",
		  title: "Crock Pot Roast12",
		  ingredients: 
		  [{
		  	quantity: "1",
		  name: " beef roast",
		  type: "Meat"
		},
		  {
		  	quantity: "1 package",
		  name: "brown gravy mix",
		  type: "Baking"
		},
		  {
		  	quantity: "1 package",
		  name: "dried Italian salad dressing mix",
		  type: "Condiments"
		},
	  {
	  	quantity: "1 package",
	  name: "dry ranch dressing mix",
	  type: "Condiments"
		},
	  {
	  	quantity: "1/2 cup",
	  name: "water",
	  type: "Drinks"
		}
		],
	  directions: [
		 "Place beef roast in crock pot.",
		  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
		  "Pour the water around the roast.",
		  "Cook on low for 7-9 hours."
	  ],  
	  prep_time    :"30min",
	  total_time   :"3h",
	  recipe_yield :"8",
	  img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg","url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
	  
	  
	},
	{ 
		customerId: "1", 
		// ing:[ "7", "8", "9" ],
		// ingredients: [ "6", "7", "8" ],
	 // id: "1990",
	  // name: "Crock Pot Roast1",
	  title: "Crock Pot Roast1",
	  img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
	  ingredients: 
	  [
	  {
	  	quantity: "1",
	  name: " beef roast"
		},
	  {
	  	quantity: "1 package",
	  name: "brown gravy mix"
		},
	  {
	  	quantity: "1 package",
	  name: "dried Italian salad dressing mix"
		},
	  {
	  	quantity: "1 package",
	  name: "dry ranch dressing mix"
		},
	  {
	  	quantity: "1/2 cup",
	  name: "water"
		}
	  ],
	  directions: [
	  	"Place beef roast in crock pot.",
	  	"Mix the dried mixes together in a bowl and sprinkle over the roast.",
	  	"Pour the water around the roast.",
	  	"Cook on low for 7-9 hours."
	  ],
	  prep_time    :"PT30M",
	  total_time   :"PT3H",
	  recipe_yield :"8",
	  
	
	}
	];


	return cb(recipes);
};