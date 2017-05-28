'use strict';

module.exports = function(recipes) {

	recipes.validatesPresenceOf(
		'img', 'url', 'title', 'ingredients', 
		'directions', 'prep_time', 'total_time',
		'recipe_yield'
		);
  
    recipes.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 



    	next();
  });

};