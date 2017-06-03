'use strict';

module.exports = function(Departmentmodel) {
	Departmentmodel.validatesPresenceOf('name', 'items');

	Departmentmodel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});
};
