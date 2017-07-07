'use strict';

function getUsers(){

	var accounts = [	
		{
		  name: 'john',	
		  email: 'john.doe@ibm.com',
		  password: 'john1',
		  // menus: [],
		},
		{
		  name: 'jane',
		  email: 'jane.doe@ibm.com',
		  password: 'jane1',
		  // menus: [],
		},
		{
		  name: 'admin',
		  email: 'admin@ibm.com',
		  password: 'admin',
		  // menus: [],
		}
  	];

  	return accounts;

};

function createUsers(cb){
	// console.log(users);
	database.automigrate('UserModel', function(err){
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


module.exports.createUsers = createUsers;
module.exports.assignAdmin = assignAdmin;