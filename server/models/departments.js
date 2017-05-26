'use strict';

module.exports = function(Departments) {
	Departments.validatesPresenceOf('name', 'items');
};
