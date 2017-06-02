'use strict';

module.exports = function(Department) {
	Department.validatesPresenceOf('name', 'items');
};
