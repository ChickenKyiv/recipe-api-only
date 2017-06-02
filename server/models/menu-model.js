'use strict';

module.exports = function(Menumodel) {
	//@TODO update this, 'cause we've updated relations
	Menus.validatesPresenceOf('title', 'date', 'desc', 'recipes');


	Menus.observe("after save", function (ctx, next) {

		// console.log( ctx.instance.rec );

       Menus.app.models.Email.send({
	    to: 'arthur.tkachenko.netweight@gmail.com',
	    from: 'noreply@loopback.loop',
	    subject: 'Thank you for adding to menu ',
	    html: '<p>We confirm - menu was saved</p>'
	  }, function (err, mail) {
	    console.log('email sent!');
	  });

		

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

};
