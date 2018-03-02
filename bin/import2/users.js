function attachGroceryToAdmin(admin, grocery){
	// console.log(grocery);
    var options = {
      userId: admin.id,
      secondArray: [ grocery.id ]
    };
    User.addGrocery(options);

};




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

module.exports.attachGroceryToAdmin     = attachGroceryToAdmin;
module.exports.getAdminGroceries = getAdminGroceries;
