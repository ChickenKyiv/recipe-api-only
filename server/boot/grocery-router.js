'use strict';

const request        = require('request');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const async          = require('async');
const _              = require('underscore');

module.exports = function(app) {
  var router  = app.loopback.Router();
  var groceryController = require('../controllers/grocery-controller');


 // :todo add relations and display whole information about
 // :todo make it more protected from view
  router.get('/view/grocery/:groceryId',
    ensureLoggedIn('/auth/account'),
    groceryController.viewGrocery);


  // :todo Handle this later. just want to fix issue fast.
  // This is a clone of /view/grocery functionality for reviewing
  // as not logged in user a data from ultimate grocery list
  // for simplifying things i'll just duplicate a lot stuff
  // and make it work as quicker as i can
  router.get('/view/ultimategrocery/',
    groceryController.viewUltimateGrocery);

 router.get('/view/grocery/hidden/:groceryId',
  ensureLoggedIn('/auth/account'),
  function(req, res, next){
    var Grocery   = app.models.Grocery;
    var groceryId = req.params.groceryId;

    // only hidden departments will be diplsayed
    Grocery.fetchById2(groceryId, function(err, response){

      // console.log(response);

      // :todo make all data came from method
      res.render('pages/grocery', {
          name: 'Hidden departments of ' + response.name,
          departments: response.data, // [data>> department >> ingredient]
          groceryId: groceryId,
          messages: {},

      });

    });

  });



  router.get('/auth/attach-grocery-to-user/:groceryId',
    ensureLoggedIn('/auth/account'),
    function(req, res, next) {
    var groceryId = req.params.groceryId;
    var userId    = req.user.id;
    var User      = app.models.user;
    var Grocery   = app.models.Grocery;

    // this is a duplicated function from Grocery :todo think about it, real talk
    var options = {
      userId: userId,
      secondArray: [ groceryId ]
    };
    User.addGrocery(options);
    // User.proceed(options);

    res.redirect('/auth/account');
  });



 router.get('/remove/grocery/:groceryId',
  ensureLoggedIn('/auth/account'),
  groceryController.removeGrocery);




  router.get('/clone/:groceryId', groceryController.cloneGrocery);

  router.post('/cloneform', groceryController.postCloneForm);

  router.get('/afterclone', groceryController.justRedirect);

  router.get('/clone-grocery/:groceryId', groceryController.getCloneForm);



// :todo finish
 router.get('create-new-grocery',
  ensureLoggedIn('/auth/account'),
  groceryController.createNewGrocery);


// :todo finish Not used functionality right now
 router.get('/view/groceries',
  ensureLoggedIn('/auth/account'),
  function(req, res, next){
    var userId    = req.user.id;
    var User      = app.models.user;

    User.methodofAllMethods(userId, function(err, data){
      // console.log(data);
      res.render('pages/grocery-list', {
        title: 'GrocerIES ATTACHED TO THIS USER ' + userId, //:todo update that
        // url: req.url,
        messages: {},
        groceries: data.response,

      });

    });

 });


 // Change Grocery Name functionality

 router.get('/change/grocery/name/:groceryId',
  ensureLoggedIn('/auth/account'),
  groceryController.changeName);


  // Update grocery list name
  router.post('/update/name',
    groceryController.postUpdateName);



  // Shopping part, i.e. TODO list
  router.get('/shopping/:groceryId/:departmentId',
    groceryController.shopping);

  //@todo find out why i add a copy of previous method/controller action  
  // router.get('/shopping2/:groceryId/:departmentId',
  //   groceryController.shopping2);

  app.use(router);

};
