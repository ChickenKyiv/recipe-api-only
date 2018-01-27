'use strict';

const debug   = require('debug');

let table_name = 'user'

let attributes  = [
    'groceryIds'
];


const get = () => {

    var data     = [
      {
        name: 'john',
        email: 'john.doe@ibm.com',
        password: 'john1',
      },
      {
        name: 'jane',
        email: 'jane.doe@ibm.com',
        password: 'jane1',
      },
      {
        name: 'admin',
        email: 'admin@ibm.com',
        password: 'admin',
      }
     ];

  	return data;

};


function assignAdmin(options, admin_id){
  let server
  let database
  let raven

  ( {server, database, raven} = options );

  // User        = server.models.user;
  let Role        = server.models.Role;
  let RoleMapping = server.models.RoleMapping;
  // database    = server.datasources.recipeDS;

	database.automigrate('Role', function(err){
		if (err) return cb(err);

		Role.create({ name:'admin' })
		.then(function(role){

			role.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: admin_id
              }, function(err, principal){
                console.log('Principal', principal);
              });

		}).catch(function(err){
      raven.captureException("admin was not assigned");
      throw err;
    });
	});
  debug('admin was created');
};


const attachRecipesToUsers = () => {
  // 	recipes.forEach(function(recipe){
  // 		recipe.updateAttribute('userId', users[2].id);

  // 	});
};

const attachMenusToUsers = (users, menus) => {
  helper.attach(users, menus, attributes[0])
};




// @TODO think about it. GS using more advanced method of saving grocery to user array.
// but in order to simplify stuff - we'll remove connection between import and methods from inner models.

//@TODO replace stuff like cb to a simple console or debug log that relation was successfully created
const attachGroceryToUser = (departments, groceries) => {
  helper.attach(departments, groceries, attributes[0]);
};

// groceryIds
const attachGroceryToAdmin = () => {
  // helper.attach()
  // var options = {
  //   userId: admin.id,
  //   secondArray: [ grocery.id ]
  // };
  // User.addGrocery(options);
};

//
// module.exports.init   = init;
// module.exports.assignAdmin = assignAdmin;




module.exports.get   = get;
module.exports.table_name   = table_name;
// module.exports.assignAdmin   = assignAdmin;
