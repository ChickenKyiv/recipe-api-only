'use strict';

const request        = require('request');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const path           = require('path');
const async          = require('async');
const _              = require('underscore');

const middlewarez = require(path.resolve(__dirname, '../like-middleware-helper'));
// var UserExtended = require(path.resolve(__dirname, '../../bin/import/users'));
// var loopback = require('loopback');
// let server          = require(path.resolve(__dirname, '../../server/server'));



module.exports = function(app) {

  var router  = app.loopback.Router();
  var mainController = require('../controllers/main-controller');



  // :todo this must be moved to departments
  // router.get('/select/:groceryId', function(req, res, next){
  //   var groceryId = req.params.groceryId;
  //   var Grocery   = app.models.Grocery;

  //   Grocery.fetchById(groceryId, function(err, response){
  //     // console.log(response);
  //     // we don't need response.ingredients. But this is keeped from this method.
  //     // we'll need to create our own method for this  tasks. :todo
  //     res.render('pages/select-only-delete-later', {
  //       user: req.user,
  //       url: req.url,
  //       departments: response.data,
  //       groceryId: groceryId
  //     });

  //   });


  // });



  router.get('/', mainController.getHomepage);


  app.use(router);

};
