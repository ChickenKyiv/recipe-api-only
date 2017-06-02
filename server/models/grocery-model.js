'use strict';

module.exports = function(Grocery) {
	Grocery.validatesPresenceOf('departments', 'img', 'desc', 'slug');
};
