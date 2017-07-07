'use strict';


var path            = require('path');
var async           = require('async');

let server          = require(path.resolve(__dirname, '../server/server'));

var database        = server.datasources.recipeDS;

let getNutritions  = require(path.resolve(__dirname, 'nutritions'));


var Nutritions = server.models.NutritionsModel;

var Recipe      = server.models.RecipeModel; 



function attachNutritionsToRecipes(nutritions, recipes, cb){
	var first  = recipes[0];
	var second = recipes[1];

	first.updateAttribute('nutritions', nutritions[0]);
	second.updateAttribute('nutritions', nutritions[1]);
	cb();


	var first  = recipes[0];
	var second = recipes[1];

	first.updateAttribute('nutritions', nutritions[0]);
	second.updateAttribute('nutritions', nutritions[1]);
	cb();
};
