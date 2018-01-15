

function attachMenusToUsers(users, menus){

	// menus.forEach(function(menu){
	// 	menu.updateAttribute('userId', users[2].id);

	// });

	users.forEach(function(user){
		user.updateAttribute('userId', menus);

	});




};


function attachRecipesToMenu(recipes, menus){
	var arrayWithIds = idsOnly(recipes);
	menus.forEach(function(menu){
		menu.updateAttribute('recipes', arrayWithIds);

	});
};


module.exports.createMenus = createMenus;
module.exports.attachMenusToUsers = attachMenusToUsers;
module.exports.attachRecipesToMenu = attachRecipesToMenu;
