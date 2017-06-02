'use strict';

module.exports = function(Grocerymodel) {
	Grocerymodel.validatesPresenceOf(
		'departments', 'img', 'desc', 'slug'
	);
};
