'use strict';

var request = require('request');

// var loopback = require('loopback');




module.exports = function(app) {

  var router  = app.loopback.Router();
  // var request = require('request');
  // var Video   = app.models.VideoModel;
  
  // router.get('/index', function(req, res) {
  //   res.render('index', {
  //     loginFailed: false
  //   });
  // });


  // router.get('/postvideo', function(req, res) {

  //   // console.log(req.accessToken);
  //   // console.log(req.accessToken.userId);

  //   res.render('postvideo', {
  //     userModelId: req.accessToken.userId,
  //     accessToken: req.accessToken.id
  //   });
  // });

  // router.post('/postvideo', function(req, res){

  //   // console.log( req.body );


  //   var video = new Video(req.body);
  //   video.isValid(function(valid){
  //     if (valid) {
  //       video.save();
  //       // res.render({user: user});
  //     } else { 
  //       console.log(video.errors);
  //       // res.flash('error', 'User is not valid'), console.log(user.errors), res.redirect('/users');
  //     }
  //   }); 




  // });




  // router.get('/videos', function(req, res) {

  //   console.log(req.accessToken);
  //   console.log(req.accessToken.userId);
  //   // console.log( req.accessToken );

    



  //   res.render('videos', {

  //   });   
  // });


  router.post('/profile', function(req, res) {
    var email    = req.body.email;
    var password = req.body.password;
    // console.log(email, password);


    app.models.UserModel.login({
      email: email,
      password: password
    }, 'user', function(err, token){

      if( err ){
        res.render('index', {
          email: email,
          password: password,
          loginFailed: true
        });  
      }

      token = token.toJSON();

      // console.log( token );

      app.models.VideoModel.listVideosByUser(token.user.id, function(err, videos){

        if(err) throw err;
        // console.log( videos );


        res.render('profile', {
          username: token.user.username,
          userId: token.user.id,
          accessToken: token.id,
          videoArray: videos
        });

      });





    });





  });

  // router.get('/logout', function(req, res, next) {

  //   if( !req.accessToken ) { return res.sendStatus(401); } // unauthorized 

  //   app.models.UserModel.logout(req.accessToken.id, function(err){
  //     if (err) return next(err);
      
  //     res.redirect('/index'); //redirect on successful logout     
  //   });

  // });

  app.use(router);

};