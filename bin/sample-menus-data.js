'use strict';

module.exports = function getSampleData (cb){


	var menus = [

	{ 
		// customerId: "2", 
		// id: "6", 
		// rec: ["1989","1990"], 
		title: "string", 
		// date: "December 17, 2003 03:24:00",
		date: new Date(),
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
		date: new Date(),
		description: "string", 
		recipes: [],
		// recipes: ["1980", "1990"], 

	},
    {
		title:"string1",
		// date:"2003-12-25T11:24:00.000Z",
		date: new Date(),
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
		date: new Date(),
		description:"string2",
		recipes: [],

		// customerId:1,
		// id:5
	}
	];



	return cb(menus);
};