'use strict';

module.exports = function(Grocerymodel) {
	Grocerymodel.validatesPresenceOf(
		'departments', 'img', 'desc', 'slug'
	);

	Grocerymodel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});
};
