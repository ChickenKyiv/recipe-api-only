'use strict';


const path      = require('path');
// var validator = require('express-validator');

let app         = require(path.resolve(__dirname, '../server'));
const async     = require('async');
const _         = require('underscore');
var Department  = app.models.Department;
var Grocery     = app.models.Grocery;
let middlewarez = require(path.resolve(__dirname, '../like-middleware-helper'));
const Raven = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();

// :todo make it more lightWeight
// :todo some of fucntionality are duplicated
exports.departmentsList = async (req, res, next) => {

	var groceryId = req.params.groceryId;
		
	var Grocery   = app.models.Grocery;

  var ultimate   = await middlewarez(next);

	let grocery
  let response
  try {      
    var Grocery   = app.models.Grocery;
    // grocery = await Grocery.fetchById(groceryId);
    grocery  = await Grocery.findById(groceryId, Grocery.query1());
    response = Grocery.convertCollectionData(grocery);
     // console.log(response);

  } catch (e) {
    Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e) 
  }


  var renderObject = {
    user        : req.user,
    name: response.name + '`s Departments',     
    departments : response.data,   // :todo on other template we're using `data`, not departments 
    groceryId   : groceryId,
    ultimate: ultimate
  };

  // console.log(renderObject)

      
  res.render('pages/departments/departments-show', renderObject);

};

exports.deleteDepartment = async (req, res, next) => {

  var departmentId = req.params.id;
  var groceryId    = req.params.groceryId;

  var Grocery      = app.models.Grocery;
    
  

    // :todo update things. This is a duplicated code
    Grocery.findById(groceryId, {
      include: {
        relation: 'ingredients',
        scope: {
          where: {
            departmentId: departmentId
          }
        }
      }

    }, function(err, grocery){

      // console.log(grocery);

      var g = grocery.toJSON();

      var toRemove = _.pluck(g.ingredients, 'id');
      toRemove     = _.map(toRemove, item => item.toString());

      // console.log(toRemove);



      var options = {
          groceryId: groceryId,
          secondArray: toRemove
        };
            
      Grocery.removeIngredient(options);

      // Grocery.removeRemoveDepartment(options);

    });

    res.redirect('/view/grocery/' + groceryId);

};

//:todo decide which method is better - grocery version or controller version
exports.getDepartment = async (req, res, next) => {

  var departmentId = req.params.id;
  var groceryId    = req.params.groceryId;

  let department

  let grocery
  let response1
  try {      
     
     grocery  = await Grocery.findById(groceryId, Grocery.query1());
     
     // :todo make response more lightweight
     response1 = Grocery.convertCollectionData(grocery);

     

     // we're getting a first element 
     department = _.where(response1.data, {id: departmentId})[0];


  } catch (e) {
     Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e) 
  }


  // console.log(department);

  var renderObject = {
    user        : req.user,
    departmentId:  departmentId,
      
        
    // description : response.desc,
    groceryId   : groceryId,

    data : department,
  };



  res.render('pages/department', renderObject);



};
// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}
