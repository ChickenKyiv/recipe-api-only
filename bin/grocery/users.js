'use strict';

const debug   = require('debug');
// model
let User
let Role
let RoleMapping
let database
let table_name = 'user'

let attributes  = [
    'groceryIds'
];

const init = ( options ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  let cb     = options[3];

  User        = server.models.user;
  Role        = server.models.Role;
  RoleMapping = server.models.RoleMapping;
  database    = server.datasources.recipeDS;


  let args = {
    model     : User,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);


  //сustom stuff, related to users model only

  // assignAdmin(admin_id);
  // helper.attach()
  // assignAdmin(admin_id, Role, RoleMapping);

}

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


function assignAdmin(admin_id){

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

		}).catch(function(err){ throw err; });
	});
  debug('admin was created');
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
module.exports.init   = init;
