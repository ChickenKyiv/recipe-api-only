'use strict';

var path        = require('path');
let server      = require(path.resolve(__dirname, '../../server/server'));
var database    = server.datasources.groceryDS;

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