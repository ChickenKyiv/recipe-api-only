'use strict';

function getMenus(){

	var x = new Date();
	  x.setDate(1);
	  // x.setMonth(x.getMonth()-1);

	var prev_month  = x.getMonth()-1;
	var prev_month2 = x.getMonth()-2;  
	var prev_month3 = x.getMonth()-3;  

	var menus = [

	{ 
		 
		title: "string", 
		
		date: prev_month,
		description: "string", 
		// recipes: [],
		notes: "This is notes6",
		
		// groceryId: ""

	},
	{ 

		 
		title: "string", 
		
		date: prev_month2,
		description: "string", 
		// recipes: [],
		notes: "This is notes5",
		 
		// groceryId: ""
	},
    {
		title:"string1",
		
		date: prev_month2,
		description:"string1",
		// recipes: [],
		notes: "This is notes4",
		
		// groceryId: ""
	},
    {
		title:"string2",
		
		date: new Date(),
		description:"string2",
		// recipes: [],
		notes: "This is notes3",
		
		// groceryId: ""
	},
    {
		title:"string2",
		
		date: prev_month3,
		description:"string2",
		// recipes: [],
		notes: "This is notes2",
		
		// groceryId: ""
	}
	];



	return menus;
};

function createMenus(cb){
	database.autoupdate('MenuModel', function(err){
		if (err) return cb(err);

		Menu.create(getMenus(), cb);
	
	});
};

function attachMenusToUsers(users, menus){

	menus.forEach(function(menu){
		menu.updateAttribute('userId', users[2].id);
		
	});
	
};

function attachRecipesToMenu(recipes, menus){
	var arrayWithIds = idsOnly(recipes);
	menus.forEach(function(menu){
		menu.updateAttribute('recipes', arrayWithIds);
		
	});
};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;    

};

module.exports.createMenus = createMenus;
module.exports.attachMenusToUsers = attachMenusToUsers;
module.exports.attachRecipesToMenu = attachRecipesToMenu;