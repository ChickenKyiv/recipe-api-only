'use strict';

const debug   = require('debug');

let table_name = 'Department'
let attributes  = [
  'departmentIds', // #0
];

const get = () => {

	var data = [
		{

		 name: "Fresh vegetables",
		 type: 'food'
		},
		{

		 name: "Condiments / Sauces",
		 type: 'food'
		},
		{

		 name: "Dairy",
		 type: 'food'
		},{

		 name: "Cheese",
		 type: 'food'
		},{

		 name: "Meat",
		 type: 'food'
		},{

		 name: "Seafood",
		 type: 'food'
		},{

		 name: "Beverages",
		 type: 'food'
		},{

		 name: "Baked goods",
		 type: 'food'
		},{

		 name: "Baking",
		 type: 'food'
		},{

		 name: "Snacks",
		 type: 'food'
		},{

		 name: "Themed meals",
		 type: 'food'
		},{

		 name: "Baby stuff",
		 type: 'non-food'
		},{

		 name: "Pets",
		 type: 'non-food'
		},{

		 name: "Fresh fruits",
		 type: 'food'
		},{

		 name: "Refrigerated items",
		 type: 'food'
		},{

		 name: "Frozen",
		 type: 'food'
		},{

		 name: "Various groceries",
		 type: 'food'
		},{

		 name: "Canned foods",
		 type: 'food'
		},{

		 name: "Spices & herbs",
		 type: 'food'
		},{

		 name: "Personal care",
		 type: 'household'
		},{

		 name: "Medicine",
		 type: 'household'
		},{

		 name: "Kitchen",
		 type: 'household'
		},{

		 name: "Other",
		 type: 'household'
		},{

		 name: "Cleaning products",
		 type: 'household'
		},{

		 name: "Office supplies",
		 type: 'household'
		},{

		 name: "Other stuff",
		 type: 'household'
		},{

		 name: "To-do list",
		 type: 'household'
		}
	];

	return data;

};


// @TODO think about it. GS using more advanced method of saving grocery to user array.
// but in order to simplify stuff - we'll remove connection between import and methods from inner models.
//@TODO replace stuff like cb to a simple console or debug log that relation was successfully created

const relate = async (options, results, helper) => {

  let server
  let database
  let raven
  ( {server, database, raven} = options );



  if( !results || !results.departments || !results.groceries ) {
    raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.departments, results.groceries, attributes[0]);

};

module.exports.get        = get;
module.exports.table_name = table_name;
module.exports.relate     = relate;
