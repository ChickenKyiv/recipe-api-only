//
module.exports.init   = init;
module.exports.attach = attach;

var User   = server.models.user;
var Role   = server.models.Role;
var RoleMapping   = server.models.RoleMapping;
var Grocery = server.models.Grocery;

var UserTable = 'user';
// var relation    = 'ingredients';




function attachGroceryToAdmin(admin, grocery){
	// console.log(grocery);
    var options = {
      userId: admin.id,
      secondArray: [ grocery.id ]
    };
    User.addGrocery(options);

};

module.exports.createUsers     = createUsers;
module.exports.assignAdmin     = assignAdmin;
