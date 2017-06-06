'use strict';

module.exports = function(DepartmentModel) {
	DepartmentModel.validatesPresenceOf('name', 'items');

	DepartmentModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});


    DepartmentModel.addGrocery = function (groceries) {
		var GroceryModel =  DepartmentModel.app.models.GroceryModel;    	

      DepartmentModel.find({})
      .then(function(departments){

		groceries.forEach(function(grocery){
		 	grocery.updateAttribute('department', departments);
		})


      })
		.catch(function(err){
			throw err;
		});


  };


};
