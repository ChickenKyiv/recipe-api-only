'use strict';

module.exports = function(Ingredients) {
    //@TODO add to done & delete default false
	Ingredients.validatesPresenceOf('name', 'recipe_id', 'type', 'done', 'delete');
};
