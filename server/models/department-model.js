'use strict';

module.exports = function(Departmentmodel) {
	Departmentmodel.validatesPresenceOf('name', 'items');
};
