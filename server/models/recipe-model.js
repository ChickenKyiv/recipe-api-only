'use strict';

module.exports = function(Recipemodel) {

	Recipemodel.validatesPresenceOf(
		'img', 'url', 'title', 'ingredients', 
		'directions', 'prep_time', 'total_time',
		'recipe_yield'
		);
  
    Recipemodel.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 



    	next();
  });

};