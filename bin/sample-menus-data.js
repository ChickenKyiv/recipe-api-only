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
		// customerId: "2", 
		// id: "6", 
		// rec: ["1989","1990"], 
		title: "string", 
		// date: "December 17, 2003 03:24:00",
		// date: new Date(),
		date: prev_month,
		description: "string", 
		recipes: [],
		// recipes: ["1989","1990"],


	},
	{ 
		// customerId: "1", 
		// id: "10",
		// rec: ["1980", "1990"], 
		title: "string", 
		// date: "December 19, 2003 03:24:00", 
		// date: new Date(),
		date: prev_month2,
		description: "string", 
		recipes: [],
		// recipes: ["1980", "1990"], 

	},
    {
		title:"string1",
		// date:"2003-12-25T11:24:00.000Z",
		// date: new Date(),
		date: prev_month2,
		description:"string1",
		recipes: [],

		// customerId:2,
		// id:3
	},
    {
		title:"string2",
		// date:"2003-12-29T11:24:00.000Z",
		date: new Date(),
		description:"string2",
		recipes: [],

		// customerId:1,
		// id:4
	},
    {
		title:"string2",
		// date:"2003-12-30T11:24:00.000Z",
		// date: new Date(),
		date: prev_month3,
		description:"string2",
		recipes: [],

		// customerId:1,
		// id:5
	}
	];



	return menus;
};