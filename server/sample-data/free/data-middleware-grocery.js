'use strict';

module.exports = [

  	{
		"id" : "1", //department ID
		"name"        : "BAKERY/BREAD",	
		"items" : [
			{
				"id"      : "1",
				"name"   : "hamburger buns",
				"recipeId" : ["1"],
				"type"     : "simple",
				"units"    : "4",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "2",
				"name"   : "small French baguette",
				"recipeId" : ["1"],
				"type"     : "simple",
				"units"    : "1",
				"done"     : "0",
				"delete"   : "0"			
			} 
		

		]

	},

	{
		"id" : "2",
		"name"        : "BAKING",	
		"items" : [
			{
				"id"      : "4",
				"name"   : "all-purpose flour",
				"recipeId" : ["1"],
				"type"     : "simple",
				"units"    : "0.5 cup",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "5",
				"name"   : "granulated sugar",
				"recipeId" : ["1"],
				"type"     : "simple",
				"units"    : "1 pinch",
				"done"     : "0",
				"delete"   : "0"			
			}
		

		]

	},
	{
		"id" : "3",
		"name"        : "PANTRY STAPLES",	
		"items" : [
			{
				"id"      : "6",
				"name"   : "black pepper",
				"recipeId" : ["1", "2"],
				"type"     : "simple",
				"units"    : "1 teaspoon",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "7",
				"name"   : "extra-virgin olive oil",
				"recipeId" : ["1", "2", "3", "4"],
				"type"     : "complex",
				"units"    : "17 tablespoons + 0.25 cup",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "8",
				"name"   : "kosher salt",
				"recipeId" : ["5", "6", "7", "8"],
				"type"     : "simple",
				"units"    : "1 teaspoon",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "9",
				"name"   : "kosher salt and freshly ground black pepper",
				"recipeId" : ["1", "2", "3", "4"],
				"type"     : "simple",
				"units"    : "",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "10",
				"name"   : "olive oil",
				"recipeId" : ["1", "2", "3", "4"],
				"type"     : "simple",
				"units"    : "5 tablespoons",
				"done"     : "0",
				"delete"   : "0"			
			}, 
			{
				"id"      : "11",
				"name"   : "unsalted butter",
				"recipeId" : ["1", "2", "3"],
				"type"     : "simple",
				"units"    : "5 tablespoon",
				"done"     : "0",
				"delete"   : "0"			
			} 

		]

	}

];
