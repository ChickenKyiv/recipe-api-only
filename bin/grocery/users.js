'groceryIds'
// @TODO think about it. GS using more advanced method of saving grocery to user array.
// but in order to simplify stuff - we'll remove connection between import and methods from inner models.


//@TODO replace stuff like cb to a simple console or debug log that relation was successfully created
const attachGroceryToUser = (departments, groceries, cb) => {
  attach(departments, groceries, attributes[0], cb);
};


function attachGroceryToAdmin(admin, grocery){
	// console.log(grocery);
    var options = {
      userId: admin.id,
      secondArray: [ grocery.id ]
    };
    User.addGrocery(options);

};

'use strict';

const debug   = require('debug');
// model
let User
let Role
let RoleMapping
let database
let table_name = 'user'

// let attribute  = '';

const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  User        = server.models.user;
  Role        = server.models.Role;
  RoleMapping = server.models.RoleMapping;
  database    = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
  let args = {
    model     : Department,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);


  //сustom stuff, related to users model only

  assignAdmin(admin_id);
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

// const create = (cb, raven) => {
//
//   database.autoupdate(table_name, function(err){
//     if (err) {
//       Raven.captureException(err);
//       return cb(err);
//     }
//
//     User.create(get(), cb);
//   });
//
// };




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

		})
		.catch( (err) => throw err );
	});
};

groceryIds
const attachGroceryToAdmin = () => {
  var options = {
    userId: admin.id,
    secondArray: [ grocery.id ]
  };
  User.addGrocery(options);
};

//
module.exports.init   = init;
