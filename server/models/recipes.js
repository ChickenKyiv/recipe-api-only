'use strict';

module.exports = function(recipes) {

	recipes.validatesPresenceOf(
		'img', 'url', 'title', 'ingredients', 
		'directions', 'prep_time', 'total_time', 'recipe_yield'
		);


    recipes.observe("before save", function updateTimestamp(ctx, next) {
    	// console.log( ctx.instance );
    	// console.log( ctx.isNewInstance ); 
    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} else {
    		ctx.data.updated_at = new Date();	
    	}

    	// if( ctx.isNewInstance ){
    	// 	ctx.instance.created_at = new Date();
    	// 	ctx.instance.updated_at = new Date();
    	// } else {
    	// 	ctx.data.updated_at = new Date();	
    	// }
    	

    	
    	// console.log('---updated---');
    	// console.log( ctx.instance );
    	

    	next();
  });


};