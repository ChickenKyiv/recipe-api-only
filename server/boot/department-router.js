'use strict';

var request        = require('request');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var _ = require('underscore');

module.exports = function(app) {

	var router  = app.loopback.Router();
	var departmentController = require('../controllers/department-controller');
	
	//:todo decide which method is better - grocery version or controller version
	router.get('/department/:id/:groceryId', 
		ensureLoggedIn('/auth/account'),
	 departmentController.getDepartment);


	router.get('/departments/show/:groceryId',
		ensureLoggedIn('/auth/account'),
	 departmentController.departmentsList);


	// :todo make it work 
	router.get('/hide/department/:id/:groceryId', function(req, res, next) {
		var departmentId = req.params.id;
		var groceryId = req.params.groceryId;
		
		var Grocery   = app.models.Grocery;
		
		var options = {
	      // type: 'hide',
	      // field: 'hideThisIds',
	      groceryId: groceryId,
	      secondArray: [ departmentId ]
	    };
		

		Grocery.addDepartment(options);

	});



	router.get('/show/department/:id/:groceryId', function(req, res, next) {
      var departmentId = req.params.id;
	  var groceryId = req.params.groceryId;

	  var Grocery   = app.models.Grocery;
		
	  var options = {
	      // type: 'show',
	      // field: 'hideThisIds',
	    groceryId: groceryId,
	    secondArray: [ departmentId ]
	  };
		
	    
	  Grocery.removeDepartment(options);

	});


  // :todo test this
  // Not working i think
	router.get('/show/all/:groceryId', function(req, res, next) {
		var groceryId = req.params.groceryId;
		var Grocery   = app.models.Grocery;	
		var options = {
	      groceryId: groceryId
	    };
			    
		Grocery.showAllDepartments(options);

	});


	// :todo make it work  or delete?
    // 	1) we got all information from grocery and check 
    // 	2) is this departmentId isset at hide array 
    //  3) depending on result we've add or remove it from it
// :todo this function is suck.

	router.get('/visibility/department/:id/:groceryId', function(req, res, next) {		
	  var departmentId = req.params.id;
	  var groceryId = req.params.groceryId;
	  var Department   = app.models.Department;
	  var Grocery      = app.models.Grocery;

	  Grocery.findById(groceryId, {

		}, function(err, grocery) {

			var g = grocery.toJSON();

			if( !grocery.hideThisIds ){ console.log('empy'); }
			
			let arr = _.map(grocery.hideThisIds, item => item.toString());

			var flag = _.contains(arr, departmentId);

			

			if( !flag ){
				//add to hide
				var options = {
			      groceryId: groceryId,
			      secondArray: [departmentId]
			    };

				Grocery.addDepartment(options);

			} else {
				//remove from hide
				var options = {
			      groceryId: groceryId,
			      secondArray: [departmentId]
			    };
					    
				Grocery.removeDepartment(options);

			}




		});

	  res.redirect('/view/grocery/' + groceryId);

	});




	router.get('/remove/department/:id/:groceryId', departmentController.deleteDepartment);


	

	app.use(router);

}; 
 	