'use strict';

module.exports = function(Ingredientmodel) {
    //@TODO add to done & delete default false
	Ingredientmodel.validatesPresenceOf(
		'name', 'recipe_id', 'type', 'done', 'delete'
	);

    Ingredientmodel.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 



    	next();
    });

    Ingredientmodel.observe('update', function(ctx, next){
        ctx.instance.updated_at = new Date();
        next();
    });


  // method list attached ingredients by departments

  // method list attached ingredients with unit convertion and additions
	
};
