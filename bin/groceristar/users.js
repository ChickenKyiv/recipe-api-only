'use strict';

const debug   = require('debug');
// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( server, raven, cb ) => {
// function init(server, cb){
// console.log('-----');
// console.log(server);
  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
}

const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

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

    // Allergy.create(get(), (err,re) => console.log(re));
    Allergy.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

function attach(array, recipes, cb){
     var arrayWithIds = idsOnly(array);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};


//
module.exports.init   = init;
module.exports.attach = attach;

var User   = server.models.user;
var Role   = server.models.Role;
var RoleMapping   = server.models.RoleMapping;
var Grocery = server.models.Grocery;

var UserTable = 'user';
// var relation    = 'ingredients';

function getUsers() {
	var accounts = [
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

  	return accounts;

};


function createUsers(cb){
	// console.log(users);
	database.automigrate(UserTable, function(err){
		if (err) return cb(err);

		User.create(getUsers(), cb);
	});
};

function assignAdmin(admin){

	database.automigrate('Role', function(err){
		if (err) return cb(err);

		Role.create({ name:'admin' })
		.then(function(role){

			role.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: admin.id
              }, function(err, principal){
                console.log('Principal', principal);
              });

		})
		.catch(function(err){
            throw err;
          });
	});
};


function attachGroceryToAdmin(admin, grocery){
	// console.log(grocery);
    var options = {
      userId: admin.id,
      secondArray: [ grocery.id ]
    };
    User.addGrocery(options);

};


// function attachRecipeToUsers(users, recipes, cb){

// 	recipes.forEach(function(recipe){
// 		recipe.updateAttribute('userId', users[2].id);

// 	});

// };


function getAdminGroceries ( User ){
	// this is a custom method for user model,
	// which I decided to move from main model definition to this place

	User.withAdmin = function(cb){
        User.findOne({
        	where: {
				username: 'admin'
			},

	        include: {
	             relation: 'groceries',
	             scope: {
	                 // where: {
	                 //     id: groceryId
	                 // },
	                 // include: {
	                 //     relation: 'departmentsList',
	                 // }
	             }
	        }
        }, cb);
    };

	User.getAdminData = function(){


		User.withAdmin(function(err, admin){
			console.log(admin);
		});



	};

};

module.exports.createUsers     = createUsers;
module.exports.assignAdmin     = assignAdmin;
module.exports.attachGroceryToAdmin     = attachGroceryToAdmin;
module.exports.getAdminGroceries = getAdminGroceries;
