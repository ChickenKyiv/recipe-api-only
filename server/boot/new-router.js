'use strict';

var request        = require('request');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
// var loopback = require('loopback');


module.exports = function(app) {
  var router  = app.loopback.Router();
  
  app.use(router);
};