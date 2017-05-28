'use strict';

module.exports = function(Usermodel) {

  Usermodel.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  Usermodel.validatesUniquenessOf('email', {message: 'email is not unique'});

  Usermodel.observe("before save", function updateTimestamp(ctx, next) {
    	// console.log( ctx.instance );

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 
    	// else {
    		// ctx.data.updated_at = new Date();	
    	// }
    	// @TODO updated_at at update not working for now
    	

    	
    	// console.log('---updated---');
    	// console.log( ctx.instance );
    	// @TODO add check if this update - we don't need to fill created_at field

    	next();
  });

  Usermodel.observe('update', function(ctx, next){
  	ctx.instance.updated_at = new Date();
  	next();
  });

};
