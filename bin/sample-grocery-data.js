'use strict';

module.exports = function getSamplesData (cb){

	var grocery = [
	{
		ing:["6", "7", "8" ],
		departments: [
		{"id": "1",
		 "name": "BAKERY/BREAD",
		  "items": [
		  {
		  	id: "6","name": "black pepper",
		  recipeId: ["1", "2"],
		  type: "simple",
		  units: "1 teaspoon",
		  done: "0",
		  delete: "0"
		}
		  ]
		},{
			id: "2",
			 name: "BAKING",
			  items: [{
			  	"id": "6",
			  name: "black pepper",
			  recipeId: ["1", "2"],
			  type: "simple",
			  units: "1 teaspoon",
			  done: "0","delete": "0"
			}
			]
		}
		], 
		img: "string", 
		desc: "string",
		 slug: "string", 
		 // created_at: "2017-05-20T16:36:50.843Z", 
		 // updated_at: "2017-05-20T16:36:50.843Z"
		}
	];

	return cb(grocery);

};