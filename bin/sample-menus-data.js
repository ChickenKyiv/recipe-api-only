'use strict';

module.exports = function getSampleData (cb){

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
		recipes: [],
		notes: "This is notes6",
		
		groceryId: ""

	},
	{ 

		 
		title: "string", 
		
		date: prev_month2,
		description: "string", 
		recipes: [],
		notes: "This is notes5",
		 
		groceryId: ""
	},
    {
		title:"string1",
		
		date: prev_month2,
		description:"string1",
		recipes: [],
		notes: "This is notes4",
		
		groceryId: ""
	},
    {
		title:"string2",
		
		date: new Date(),
		description:"string2",
		recipes: [],
		notes: "This is notes3",
		
		groceryId: ""
	},
    {
		title:"string2",
		
		date: prev_month3,
		description:"string2",
		recipes: [],
		notes: "This is notes2",
		
		groceryId: ""
	}
	];



	return menus;
};