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
