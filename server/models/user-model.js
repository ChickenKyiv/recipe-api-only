'use strict';

module.exports = function(Usermodel) {

  Usermodel.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  Usermodel.validatesUniquenessOf('email', {message: 'email is not unique'});
  
};
