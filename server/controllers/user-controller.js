'use strict';


var path     = require('path');

let server  = require(path.resolve(__dirname, '../server'));

var User    = server.models.UserModel;



exports.verified = function(req, res, next){

	res.render('account/verified');

};

exports.getLogin = function(req, res, next){

	var credentials = {
		email: 'admin@ibm.com',
		password: 'admin'
	};

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

exports.getLogout = function(req, res, next){

	if (!req.accessToken) return res.sendStatus(401);

    User.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
};

exports.postResetPassword = function(req, res, next){

    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);

      res.render('account/response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });

};

exports.getResetPassword = function(req, res, next){

	if (!req.accessToken) return res.sendStatus(401);

    res.render('account/password-reset', {
      redirectUrl: '/api/users/reset-password?access_token='+
        req.accessToken.id
    });
  
};