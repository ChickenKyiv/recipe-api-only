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


// @TODO this is a duplicate
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


const attachGroceryToUsers = (users, menus) => {
  helper.attach(users, menus, attributes[0])
};





// groceryIds
const attachGroceryToAdmin = (users, groceries) => {
  helper.attach(users, groceries, attributes[0])
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
