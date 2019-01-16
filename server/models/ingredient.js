'use strict';

module.exports = function(Ingredient) {
    
    //:todo add to done & delete default false
	Ingredient.validatesPresenceOf(
		'name',
        // 'type', 
        // 'done', 'delete'

        // 'term',
        // 'description',
        // 'searchValue',
        'departmentId'
        
	);

    Ingredient.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();

          
    	} 


    	next();
    });

    Ingredient.observe('update', function(ctx, next){
        ctx.instance.updated_at = new Date();
        next();
    });


    Ingredient.methodC = function(ingredientId, cb){

        var Deparments = Ingredient.app.models.Deparments;

        Deparments.find({
            include: {
              relation: 'ingredients',
              scope: {
                fields: [ 'name', 'id' ],
                where: { id:ingredientId }
              }
            }
        }).then(function(result){

        });



    };




    Ingredient.proceed = function(options){
        var type = options.type;

        Ingredient.findById(options.id, function(err, model){

            if( type == 'delete' ){

                // here we need to check, if this ingredient are included at MotherIngredients/

            }

        });
    };

};