'use strict';

const debug   = require('debug');
// model
let Department
let database
let table_name = 'Department'

//let attribute  = 'departmentIds';
// let relation = 'nutritions';

const init = ( options ) => {
server, raven, cb
  // console.log('-----');
  console.log(options[0]);
//   server,
// 	helper,
// 	Raven
// }

  let server = options[0];
  let helper = options[1];
  let Raven =  options[2];

  Department  = server.models.Department;
  database    = server.datasources.recipeDS;

  const arguments = {
    model     : Department,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  // create(cb, raven);
  helper.create(arguments);
  // let Model      = options['model'];
  // let table_name = options['table_name'];
  // let database   = options['database'];
  // let data       = options['data'];
}

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

// const create = (cb, raven) => {
//
//   database.autoupdate(table_name, function(err){
//     if (err) {
//       Raven.captureException(err);
//       return cb(err);
//     }
//
//
//     Department.create(get(), cb);
//   });
//
// };




// function attach(array, recipes, cb){
//      var arrayWithIds = idsOnly(array);
//      recipes.forEach(function(recipe){
//           recipe.updateAttribute(attribute, arrayWithIds);
//
//      });
// };


//
module.exports.init   = init;
module.exports.attach = attach;

//module.exports.createDepartments = createDepartments;
