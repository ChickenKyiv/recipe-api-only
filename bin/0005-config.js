/// sample, related to recipe api server.

var db_name = 'recipeDS';

var lbTables = [
  'user',
	'Ingredient',
	'Grocery', 'Department',
];


// var lbTables = [
// 	'User', 'AccessToken', 'ACL', 'RoleMapping',
// 	'Role',
//
// 	// custom tables
// 	'user', 'Menu',
//
// 	'Recipe'
//
//
// ];

module.exports = {
  RAVEN_KEY: 'https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540',
  db_name: db_name,
  lbTables: lbTables
};
