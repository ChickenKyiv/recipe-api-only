'use strict';

module.exports = function(Menus) {
	Menus.validatesPresenceOf('title', 'date', 'desc', 'recipes');
};
