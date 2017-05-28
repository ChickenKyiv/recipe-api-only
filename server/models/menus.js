'use strict';

module.exports = function(Menus) {
	//@TODO update this, 'cause we've updated relations
	Menus.validatesPresenceOf('title', 'date', 'desc');


	Menus.observe("after save", function (ctx, next) {

		// console.log( ctx.instance.rec );

   //     Menus.app.models.Email.send({
	  //   to: 'arthur.tkachenko.netweight@gmail.com',
	  //   from: 'noreply@loopback.loop',
	  //   subject: 'Thank you for adding to menu ',
	  //   html: '<p>We confirm - menu was saved</p>'
	  // }, function (err, mail) {
	  //   console.log('email sent!');
	  // });

		

		//not working, right now. Above we're using similar, but easy way to test notifications
		// Menus.app.models.recipes.findById(ctx.instance.rec, function (err, recipe) {

		//   Menus.app.models.Email.send({
		//     to: 'arthur.tkachenko.netweight@gmail.com',
		//     from: 'noreply@loopback.loop',
		//     subject: 'Thank you for adding to menu your recipe ' + recipe.name,
		//     html: '<p>We confirm your recipe with name <strong>' + recipe.name + '</strong> was saved</p>'
		//   }, function (err, mail) {
		//     console.log('email sent!');
		//   });

		// });

		next();
	});



	Menus.observe("before save", function updateTimestamp(ctx, next) {
    	// console.log( ctx.instance );

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} else {
    		ctx.data.updated_at = new Date();	
    	}
    	// @TODO updated_at at update not working for now

    	// console.log('---updated---');
    	// console.log( ctx.instance );
    	// @TODO add check if this update - we don't need to fill created_at field

    	next();
  });

};
