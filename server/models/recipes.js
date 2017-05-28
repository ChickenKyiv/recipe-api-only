'use strict';

module.exports = function(recipes) {

	recipes.validatesPresenceOf(
		'name', 'img', 'url', 'title', 'ingredients', 
		'directions', 'prep_time', 'total_time', 'recipe_yield'
		);


    recipes.observe("before save", function (ctx, next) {
    	console.log( ctx.instance );
    	ctx.instance.created_at = new Date();
    	ctx.instance.updated_at = new Date();
    	console.log('---updated---');
    	console.log( ctx.instance );
    	// @TODO add check if this update - we don't need to fill created_at field

    	next();
  });


};