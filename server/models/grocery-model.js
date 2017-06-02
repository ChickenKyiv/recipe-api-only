'use strict';

module.exports = function(Grocerymodel) {
	Grocery.validatesPresenceOf('departments', 'img', 'desc', 'slug');
};
