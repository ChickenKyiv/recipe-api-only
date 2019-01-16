'use strict';

var request = require('request');

// var loopback = require('loopback');

// const path    = require('path');
// let ingredients     = require(path.resolve(__dirname, '../../bin/old/sample-ingredients2.js'));
// var ingredients = require();
// console.log(ingredients());


module.exports = function(app) {

  var router  = app.loopback.Router();

  // var request = require('request');
  // var Video   = app.models.VideoModel;

//   router.get('/ziga', function(req, res) {
// var arr = [];
//   ingredients().forEach(function(element) {
//     // console.log(element['term']);
//     arr.push(element['term'])
//   });
//   var i,j,temparray,chunk = 100;
// for (i=0,j=arr.length; i<j; i+=chunk) {
//     temparray = arr.slice(i,i+chunk);
//     // do whatever
// }
// console.log(arr.length)
// console.log(arr.slice(0,100));
// console.log(arr.slice(101,200));
// console.log(arr.slice(201,300));
// console.log(arr.slice(301,400));
// console.log(arr.slice(401,500));
// console.log(arr.slice(501,600));
// console.log(arr.slice(601,700));
// console.log(arr.slice(701,800));
// console.log(arr.slice(801,900));
// console.log(arr.slice(901,1000));
// console.log(arr.slice(1001,1100));
//
// console.log(arr.slice(1101,1200));
// console.log(arr.slice(1201,1300));
// console.log(arr.slice(1301,1400));
// console.log(arr.slice(1401,1500));
// console.log(arr.slice(1501,1600));
// console.log(arr.slice(1601,1700));
// console.log(arr.slice(1701,1800));

    // res.render('index', {
    //   loginFailed: false
    // });
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
