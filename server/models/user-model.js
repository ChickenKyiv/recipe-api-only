'use strict';

module.exports = function(Usermodel) {

  Usermodel.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  
  Usermodel.validatesUniquenessOf('email', {message: 'email is not unique'});


    Usermodel.observe("before save", function updateTimestamp(ctx, next) {
 
    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 
    	
    	next();
  });

  Usermodel.observe('update', function(ctx, next){
  	ctx.instance.updated_at = new Date();
  	next();
  });
  
};
