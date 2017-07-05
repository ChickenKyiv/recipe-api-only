'use strict';


module.exports = function(server) {
  
  var router = server.loopback.Router();
  var userController = require('../controllers/user-controller');
  
  /* routers */
  router.get('/login',    userController.getLogin);
  router.post('/login',   userController.postLogin);
  router.get('/verified', userController.verified);

  

  // router.get('/example/:id', mainController.getExample);    

  


};