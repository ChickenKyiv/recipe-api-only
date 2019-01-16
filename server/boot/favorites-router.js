'use strict';

var request        = require('request');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {

	var router  = app.loopback.Router();
	
  router.get('/favorites', ensureLoggedIn('/auth/account'), function(req, res, next) {

    var User = app.models.user;
    User.listFavorites(req.user.id, function(error, response){
      // console.log(response);

      res.render('pages/favorites', {
        data: ( response.length > 0 ) ? response : false, // :todo change names, punk!
        // url: req.url,
        messages: {}
      });

    })

  });


  router.post('/delete/favorites/', 
    ensureLoggedIn('/auth/account'), function(req, res, next) {

    
    var ingredients = req.body.ingredients;
    var userId = req.user.id;
    var User   = app.models.user;


    // this is a duplicated function from Grocery :todo think about it, real talk   
    var options = {
      type  : 'remove',
      field : 'favs',
      userId: userId,
      secondArray: ingredients 
    };

    // console.log(options);
    User.proceed(options);

    res.redirect('/favorites');

    // User.getCurrentUserWithFavorites(req.user.id, function(err, model) {

    //   var data = model.toJSON();
    //   console.log(data.favorites);

    //   if( !data.favorites ){ return true; } //:todo test this

    //   let forDeletion = [ req.favoriteId ];

    //   let arr = data.favorites;

    //   arr = arr.filter(item => !forDeletion.includes(item))
    //   // !!! Read below about array.includes(...) support !!!

    //   console.log(arr);

    //   model.updateAttribute('favs', arr);
    //   console.log(model);

    // })

  });

  //:todo fix delete or finish this
  // router.post('/add/fav', function(req, res, next) {

  //   console.log(req.body);
  //   console.log(req.params);

  // });

  router.get('/add/fav2/:ingredientId', 
    ensureLoggedIn('/auth/account'), 
    function(req, res, next) {

    var ingredientId = req.params.ingredientId;
    var userId       = req.user.id;

    // console.log( ingredientId );
    // console.log( userId );

    var User = app.models.user;

    var Ingredient = app.models.Ingredient;

    Ingredient.findById(ingredientId, {}, function(err, model){

      // console.log(model);
      if( model ){

        var options = {
          type  : 'add',
          field : 'favs',
          userId: userId,
          secondArray: [model.id] 
        };
        // this is a duplicated function from Grocery :todo think about it, real talk
        User.proceed(options);


      }
       res.redirect('/auth/account');

    });

    

    

   


  });

  router.get('/add/fav2/clear', function(req, res, next) {
    var userId = req.user.id;

    // console.log( ingredientId );
    // console.log( userId );
    var User   = app.models.user;

    // this is a duplicated function from Grocery :todo think about it, real talk   
    var options = {
      type  : 'clear',
      field : 'favs',
      userId: userId,
    };
    User.proceed(options);

    res.redirect('/auth/account');

  });


	app.use(router);

};  