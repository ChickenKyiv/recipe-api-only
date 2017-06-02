'use strict';

module.exports = function(Ingredientmodel) {
    //@TODO add to done & delete default false
	Ingredientmodel.validatesPresenceOf(
		'name', 'recipe_id', 'type', 'done', 'delete'
	);
};
