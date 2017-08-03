'use strict';
var path       = require('path');
let server     = require(path.resolve(__dirname, '../../server/server'));
var Nutritions = server.models.Nutritions;
var relation   = 'nutritions';

function getNutritions(){
   
    var nutritions = [
        {
			"calories"  : 450,
			"fat_calories" : 430,
			"total_fat" : 48,
			"sat_fat"   : 6,
			"trans_fat" : 0,
			"cholesterol" : 30,
			"sodium"    : 780,
			"total_carb" : 3,
			"fibers"   : 0,
			"sugars"   : 3,
			"proteins" : 3,
			"vitamins" : {
				"a" : 1.22,
				"c" : 4.22
			},
			"calcium" : 7.22,
			"iron" : 11.22
				// };
        },
        {
  			"calories"  : 673,
			"fat_calories" : 213,
			"total_fat" : 23.7,
			"sat_fat"   : 5.9,
			"trans_fat" : 0,
			"cholesterol" : 168,
			"sodium"    : 780,
			"total_carb" : 80.9,
			"fibers"   : 0,
			"sugars"   : 3,
			"proteins" : 38.3,
			"vitamins" : {
				"a" : 1.099,
				"c" : 4.0,
				"b6": 1
			},
			"calcium" : 404,
			"iron" : 7
        }
     ];
    
  	return nutritions;

};

function createNutritions(cb){
	database.autoupdate('Nutritions', function(err){
		if (err) return cb(err);

		Nutritions.create(getNutritions(), cb);
	});
};

function attachNutritionsToRecipes(nutritions, recipes){
	var first  = recipes[0];
	var second = recipes[1];

	first.updateAttribute('nutritions', nutritions[0]);
	second.updateAttribute('nutritions', nutritions[1]);
	cb();


	var first  = recipes[0];
	var second = recipes[1];

	first.updateAttribute('nutritions', nutritions[0]);
	second.updateAttribute('nutritions', nutritions[1]);
	
};


module.exports.createNutritions = createNutritions;
module.exports.attachNutritionsToRecipes = attachNutritionsToRecipes;