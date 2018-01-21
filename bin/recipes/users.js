'use strict';

const debug   = require('debug');
// model
let User
let Role
let RoleMapping
let database
let table_name = 'user'

let attribute  = 'userId';

const init = ( options ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  let cb     = options[3];

  User        = server.models.user;
  Role        = server.models.Role;
  RoleMapping = server.models.RoleMapping;
  database    = server.datasources.recipeDS;

  // add data to db
  // create(cb, raven);
  let args = {
    model     : User,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);

  //сustom stuff, related to users model only

  assignAdmin(admin_id);
  // assignAdmin(admin_id, Role, RoleMapping);
  // attachMenusToUsers
  // attachRecipesToUsers
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



// function attach(array, recipes, cb){
//      var arrayWithIds = idsOnly(array);
//      recipes.forEach(function(recipe){
//           recipe.updateAttribute(attribute, arrayWithIds);
//
//      });
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


const attachRecipesToUsers = () => {
  // 	recipes.forEach(function(recipe){
  // 		recipe.updateAttribute('userId', users[2].id);

  // 	});
};

const attachMenusToUsers = (users, menus) => {
  helper.attach(users, menus, attribute)
};

//
module.exports.init   = init;
