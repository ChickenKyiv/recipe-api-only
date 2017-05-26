'use strict';

module.exports = function(Groceries) {
	Groceries.validatesPresenceOf('departments', 'img', 'desc', 'slug');
};
