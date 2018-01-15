'use strict';

const debug   = require('debug');
// model
let User
let Role
let RoleMapping
let database
let table_name = 'User'

// let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  User        = server.models.User;
  Role        = server.models.Role;
  RoleMapping = server.models.RoleMapping;
  database    = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);

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

const create = (cb, raven) => {

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }

    User.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

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


//
module.exports.init   = init;
module.exports.assignAdmin = assignAdmin;
module.exports.attach = attach;
