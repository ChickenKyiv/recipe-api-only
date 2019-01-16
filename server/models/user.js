'use strict';

var _ = require('underscore');
var path = require('path');

// var iterator = require(path.join(__dirname + '/../like-middleware-helper'));

module.exports = function(User) {


    User.observe("after save", function embeddedRelations(ctx, next) {
    	var UserGrocery  = User.app.models.userGrocery;
 		var UserFavorite = User.app.models.userFav;   	

    	if ( ctx.isNewInstance ) {   		
    		UserGrocery.create({
    			userId: ctx.instance.id,
    			groceryIds: []
    		});

    		UserFavorite.create({
    			userId: ctx.instance.id,
    			favs: []	
    		});
    	}


    	next();
    });

    // :todo add remote method for this functionality
    // :todo update forEach to underscore, as we use it
    // :todo update for using with proceed
    User.listFavorites = function(userId, cb) {

        // var Ingredient = User.app.models.Ingredient;
        // :todo start to use this method getCurrentUserWithFavorites
      User.findById(userId, {
        include: {
                relation: 'favorites',
                scope: {
                    fields: [ 'name', 'created_at' ],
                }
            }
        }, (err, model) => {

        var data      = model.toJSON();
        var favorites = [];

      // console.log(data.favorites);

      // :todo update this ot underscore
      data.favorites.forEach(function(item, i){
              
                // console.log(item.name);
                // console.log(item.id);
                favorites.push({ id: item.id, name: item.name });

                
            });


            cb(null, favorites);

        });
    };


    User.addGrocery = function(options) {
        options.type  = 'attach';
        options.field = 'groceryIds'
        User.proceed(options);
    };

    User.cloneGrocery = function(options) {
        // options.type  = 'attach';
        // options.field = 'groceryIds'
        // User.proceed(options);
    };

    // _map and toString is equal to model.toJSON
    User.proceed = function(options) {

        var type = options.type;

        User.findById(options.userId, {}, function(err, model){

            if( options.type == 'clear'){

                model.updateAttribute(options.field, []);   

            }


            if( options.type == 'add' || options.type == 'attach' ){

                let arr = _.map(model[options.field], item => item.toString());

                var mergedValues = _.union( options.secondArray, arr  ); // second array is first because of grocery lists

                model.updateAttribute(options.field, mergedValues);

            }       


            if( options.type == 'remove' || options.type == 'detach' ){

                if( !model[options.field] ){ return true; }

                let arr = _.map(model[options.field], item => item.toString());

                arr = arr.filter(item => !options.secondArray.includes(item));
                // !!! Read below about array.includes(...) support !!!

                model.updateAttribute(options.field, arr);


            }

            

        });

    };



    User.getCurrentUserWithFavorites = function(userId, cb) {

        User.findById(userId, {
            include: {
                relation: 'favorites',
                scope: {
                    fields: [ 'id', 'name', 'created_at' ],
                }
            }
        }, cb);


    };


    User.withGroceries  = function(userId, cb) {
        User.findById(userId, {
        include: {
             relation: 'groceries',
             scope: {
                 // where: {
                 //     id: groceryId 
                 // },
                 // include: {
                 //     relation: 'departmentsList',
                 // }
             }
        }
        }, cb);
    };
    // User.withFavourites = function(userId, cb){};  

    User.methodofAllMethods = function(userId, cb) {


        User.findById(userId, {
         include: {
             relation: 'groceries',
             scope: {
                include: {
                    relation: 'ingredients',
                    scope: {
                       include: 'department'
                    }
                }
             }
         }
        }, function(err, user){
            var g = user.toJSON();
            var response = [];

            // iterator(g.groceries);
            // :todo update to single function, without duplicates.
            _.map( g.groceries, function(grocery){

                var uniques = 
                    _.map(
                        _.groupBy(grocery.ingredients, (item) => {
                            // console.log(item);
                          if (item.department)
                            return item.department.id.toString();

                        }), 
                        (grouped) => {

                         if( grouped[0].department )   

                            return { 
                                    id: grouped[0].department.id.toString(),
                                    name: grouped[0].department.name 
                                };

                    });
                

                console.log(uniques);

                response.push({
                    id: grocery.id,
                    name: grocery.name,
                    departments: uniques
                });

                
            });


            User.withAdminAndUltimate(function(err, admin){

                var json     = admin.toJSON();
                var ultimate = json.groceries[0];
                var data = {
                  id: ultimate.id.toString(),
                  name: ultimate.name

                };

       
                cb(null, {
                    clone: data,
                    response: response
                });
        



            });

        });

    }; 





    User.withAdmin = function(cb) {
        User.findOne(User.queryAdmin(), cb);
    };


    User.withAdminAndUltimate = function(cb) {
        User.findOne(User.queryUltimateAdmin(), cb);
    };


    User.queryUltimateAdmin = function() {
        return {
            where: {
                name: 'admin'
            },
            include: {
                 relation: 'groceries',
                 scope: {
                     where: {
                        name: "Ultimate Grocery List"
                     },
                     fields: [ 'id', 'name' ],
                 }
            }
        };
    };


    User.queryAdmin = function() {
        return {
            where: {
                name: 'admin'
            },
            include: {
                 relation: 'groceries'
                 // scope: {
                     
                 // }
            }
        };
    };

};