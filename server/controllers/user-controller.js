'use strict';


var path     = require('path');

let server  = require(path.resolve(__dirname, '../server'));


var User    = server.models.UserModel;





exports.verified = function(req, res, next){

	res.render('account/verified');

};
exports.getLogin = function(req, res, next){

	var credentials = [
		email: 'admin@ibm.com',
		password: 'admin'
	];

	res.render('account/login', {
		email: credentials.email,
		password: credentials.password
	});

};

exports.postLogin = function(req, res, next){
	User.login({
		email: req.body.email,
		password: req.body.password
	}, 'UserModel', function(err, token){
		if (err) {

	        if(err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERIFIED'){

	          res.render('account/reponseToTriggerEmail', {
	            title: 'Login failed',
	            content: err,
	            redirectToEmail: '/api/users/'+ err.details.userId + '/verify',
	            redirectTo: '/',
	            redirectToLinkText: 'Click here',
	            userId: err.details.userId
	          });

	        } else {

	          res.render('account/response', {
	            title: 'Login failed. Wrong username or password',
	            content: err,
	            redirectTo: '/',
	            redirectToLinkText: 'Please login again',
	          });
	        }
	        return;
		}

		 res.render('home', {
	        email: req.body.email,
	        accessToken: token.id,
	        redirectUrl: '/api/users/change-password?access_token=' + token.id
	      });
	});
};