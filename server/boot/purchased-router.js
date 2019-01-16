'use strict';

var request        = require('request');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const _        = require("underscore");
// var loopback = require('loopback');


module.exports = function(app) {
  var router  = app.loopback.Router();

  // move this to remote methods :todo
  router.post('/togglepurchased', function(req, res, next){
  	var Grocery        = app.models.Grocery;
    var ingredients    = req.body.ingredients;
   	var groceryId      = req.body.groceryId;

    if(req.body.type == 'add'){
      var options = {
        groceryId: groceryId,
        secondArray: ingredients 
      };
      Grocery.addPurchased(options); 
      res.json('success');

    } else {
      var options = {
        groceryId: groceryId,
        secondArray: ingredients 
      };
      Grocery.removePurchased(options);
      res.json('success');

    }

  });


  router.post('/clearpurchased', function(req, res, next){
    var Grocery = app.models.Grocery;

    Grocery.cleanPurchased({});

    res.redirect('/auth/account');

  });



  // used for ajax call from todo list
  // :todo maybe move to shopping controller, for easy keeping all things in one place?
  router.post('/unattach', function(req, res, next){
    var Grocery        = app.models.Grocery;
    var Ingredient     = app.models.Ingredient;

    var ingredients    = req.body.ingredients;
    var groceryId      = req.body.groceryId;

    // console.log(req.body);
    // var ingredients = req.params.ingId;
    // var groceryId   = req.params.groceryId;

    // var options = {
    //   groceryId: groceryId,
    //   secondArray: ingredients 
    // };

    Grocery.removePurchased(req.body);
      
    Grocery.removeIngredient(req.body);

    Ingredient.find({
      where : {
        id : { inq : req.body.ingredients }
      }
    }, function(err, models){

      // console.log(models);
      
      _.map(models, function(model){



        if(model.custom == true){
   
          // model.updateAttribute('departmentId', false);    
          model.destroy();

        }
        

      });

      
      res.json('success');

    });

    // res.json('success');
    // :todo add removing ingredient from whole database

  });



  // :todo I think we don't use this method anymore
  // :todo maybe remove this functionality. it's enabled only for old 
  // fashioned add to purchased indredient by click on button
  // router.get('/remove-from-purchased/:groceryId/:ingId', function(req, res, next){

  // 	var Grocery = app.models.Grocery;

  // 		// console.log( req.user.id );		

  //  	var ingredient = req.params.ingId;
  // 	var groceryId   = req.params.groceryId;

  //   var options = {
  //     groceryId: groceryId,
  //     secondArray: [ingredient] 
  //   };
  //   Grocery.removePurchased(options);

  // });


  app.use(router);
};