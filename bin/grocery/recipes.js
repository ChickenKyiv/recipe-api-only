'use strict';



var Recipe      = server.models.Recipe2;
var relation    = 'ingredients';

 function getRecipes(){

	var recipes = [
	{ 
		
		title: "Crock Pot Roast12",
		img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
		url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
	  
	  directions: [
		 "Place beef roast in crock pot.",
		  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
		  "Pour the water around the roast.",
		  "Cook on low for 7-9 hours."
	  ],  
	  prep_time    :"30min",
	  total_time   :"3h",
	  recipe_yield :"8",
	  
	  
	},
	{ 
		
	  title: "Crock Pot Roast1",
	  img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
	  url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
	  
	  directions: [
	  	"1. Place beef roast in crock pot.",
	  	"2. Mix the dried mixes together in a bowl and sprinkle over the roast.",
	  	"3. Pour the water around the roast.",
	  	"4. Cook on low for 7-9 hours."
	  ],
	  prep_time    :"10min",
	  total_time   :"1h",
	  recipe_yield :"4",
	  
	
	}
	];


	return recipes;
};



function createRecipes(cb){
	database.automigrate('Recipe2', function(err){
		if (err) return cb(err);

		Recipe.create(getRecipes(), cb);
	});
};

module.exports.createRecipes = createRecipes;