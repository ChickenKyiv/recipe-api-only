'use strict';

const _ = require('underscore');
const async          = require('async');


module.exports = function(Grocery) {

	Grocery.validatesPresenceOf(
		// 'departments',
		'img', 'desc', 'slug'
	);

	Grocery.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
        next();
	});

	Grocery.observe("before save", function updateTimestamp(ctx, next) {

		if( ctx.isNewInstance ){
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		}



		next();
	});

	// when we call this method - we know that this grocery is attached to user,
	// so it's not so important to check relations between this grocery and user

	Grocery.fetchById = function(groceryId, cb){

		Grocery.findById(groceryId, {
			include: {
				relation: 'ingredients',
				scope: {

					// fields: [ 'id', 'name', 'department' ],
					include: {
						relation: 'department',
						scope: {
							// fields: [ 'id', 'name' ],
							// fields: [ 'name' ],
							// where: {
							// 	departmentId: id
							// }
						}
					}

				}
			}

		}, function(err, grocery){


			var g       = grocery.toJSON();
			let arr     = _.map(grocery.hideThisIds, item => item.toString());

            var uniques = _.map(_.groupBy(g.ingredients, function(item){
            	// console.log(item);
              return item.department.id.toString();
            }), function(grouped){

            	var departmentId = grouped[0].departmentId.toString();
            	var flag = _.contains(arr, departmentId);


        		 var ja = _.map(grouped, function(item){
        		 	return [
            		 	item.id,
            		 	item.name,
            		 	'/del/ing/' + item.id + '/' + g.id
        		 	] // :todo change this to an object
        		 });



            	if ( !flag ) {

            		return { id: grouped[0].department.id.toString(),
                        name: grouped[0].department.name,
                        type: grouped[0].department.type,
                        ingredients: ja,
                    };

            	}

            	return { id: grouped[0].department.id.toString(),
                        name: grouped[0].department.name,
                        type: grouped[0].department.type,
                        ingredients: [],
                    };


            });

            var response = {
                id: g.id,
                name: g.name,
                data: uniques
            };

            // resolve(cb(response));
            // return response;
            // сb(response);
			cb(null, response);

		});



	};

	//:todo we should think about updating this method. it's duplicated and sucks
	Grocery.convertCollectionData = function(grocery){

		var g       = grocery.toJSON();
		let arr     = _.map(grocery.hideThisIds, item => item.toString());

        var uniques = _.map(_.groupBy(g.ingredients, function(item){
        	// console.log(item);
          return item.department.id.toString();
        }), function(grouped){

        	var departmentId = grouped[0].departmentId.toString();
        	var flag = _.contains(arr, departmentId);


    		 var ja = _.map(grouped, function(item){

    		 	return [
        		 	item.id.toString(), //item.id, - we have this value before
        		 	item.name,
        		 	'/del/ing/' + item.id + '/' + g.id
    		 	] // :todo change this to an object
    		 });



        	if ( !flag ) {

        		return { id: grouped[0].department.id.toString(),
                    name: grouped[0].department.name,
                    type: grouped[0].department.type,
                    ingredients: ja,
                };

        	}

        	return { id: grouped[0].department.id.toString(),
                    name: grouped[0].department.name,
                    type: grouped[0].department.type,
                    ingredients: [],
                };


        });

        var response = {
            id: g.id,
            name: g.name,
            data: uniques
        };
        return response;

	};


	Grocery.convertCollectionDataEfficient = function(grocery){

		var g       = grocery.toJSON();
		let arr     = _.map(grocery.hideThisIds, item => item.toString());

        var uniques = _.map(_.groupBy(g.ingredients, function(item){
        	// console.log(item);
          return item.department.id.toString();
        }), function(grouped){

        	var departmentId = grouped[0].departmentId.toString();
        	var flag = _.contains(arr, departmentId);





        	// :todo we don't need this ingredients at this particular case.
        	// we only have a statement for checking array length. and I'm lazy to change that
    		 var ja = _.map(grouped, function(item){

    		 	return [
        		 	item.id.toString(), //item.id, - we have this value before
        		 	// item.name,
        		 	// '/del/ing/' + item.id + '/' + g.id
    		 	] // :todo change this to an object
    		 });


        	return {
        			id: grouped[0].department.id.toString(),
                    name: grouped[0].department.name,
                    type: grouped[0].department.type,
                    ingredients: ( !flag ) ? ja : [],
                };


        });

        var response = {
            id: g.id,
            name: g.name,
            data: uniques
        };
        return response;

	};




	// hidden Only
	// :todo update this, using withDepartments method
	Grocery.fetchById2 = function(groceryId, cb){

		Grocery.findById(groceryId, {
			include: {
				relation: 'ingredients',
				scope: {

					// fields: [ 'id', 'name', 'department' ],
					include: {
						relation: 'department',
						scope: {
							// fields: [ 'id', 'name' ],
							// fields: [ 'name' ],
							// where: {
							// 	departmentId: id
							// }
						}
					}

				}
			}

		}, function(err, grocery){
			var g = grocery.toJSON();

			let arr = _.map(grocery.hideThisIds, item => item.toString());

            var uniques = _.map(_.groupBy(g.ingredients, function(item){
            	// console.log(item);
              return item.department.id.toString();
            }), function(grouped){

            	var departmentId = grouped[0].departmentId.toString();
            	var flag = _.contains(arr, departmentId);


        		 var ja = _.map(grouped, function(item){
        		 	return [
            		 	item.id,
            		 	item.name,
            		 	'/del/ing/' + item.id + '/' + g.id
        		 	] // :todo change this to an object
        		 });



            	if ( !flag ) {

            		return false;

            	}

            	return { id: grouped[0].department.id.toString(),
                        name: grouped[0].department.name,
                        type: grouped[0].department.type,
                        ingredients: ja,
                    };


            });



            var response = {
                id: g.id,
                name: g.name,
                data: _.compact(uniques)
            };



			cb(null, response);

		});



	};

	// :todo remove this. right now i just keep this method for some reasons
	Grocery.fetchById3 = function(groceryId, departmentId, cb){

		Grocery.findById(groceryId, Grocery.query1(), function(err, grocery){

			var g       = grocery.toJSON();
			let arr     = _.map(grocery.hideThisIds, item => item.toString());

			// change this names later, please :todo
			let purchasedArray    = _.map(grocery.purchasedIds, item => item.toString());
			// console.log(arr2);

            var uniques = _.map(_.groupBy(g.ingredients, function(item){
            	// console.log(item);
              return item.department.id.toString();
            }), function(grouped){


            	var currentDepartmentId = grouped[0].departmentId.toString();
            	var flag = _.contains(arr, currentDepartmentId);

            	// console.log( _.indexOf(list, grouped[0]) );

            	// console.log(typeof currentDepartmentId);
            	// console.log(typeof departmentId);
            	// console.log(currentDepartmentId == departmentId);

            	if( currentDepartmentId !== departmentId ) { return ;}

            		var ja = _.map(grouped, function(item){

        		 	// console.log( _.indexOf(grouped, item) )
        		 	// Grocery.customIngredientsArray('todo', item, g.id);

	        		 	return {
							id: item.id,
							name: item.name,
							completed: _.contains(purchasedArray, item.id.toString()),
							departmentId: currentDepartmentId,
							order: _.indexOf(grouped, item)

						}
        		 	});


            		if ( !flag ) {

	            		return { id: grouped[0].department.id.toString(),
	                        name: grouped[0].department.name,
	                        type: grouped[0].department.type,
	                        ingredients: ja,
	                    };

            		}
            	return {};
            	// return { id: grouped[0].department.id.toString(),
             //            name: grouped[0].department.name,
             //            type: grouped[0].department.type,
             //            ingredients: [],
             //        };


            	// }

            	// else {
            	// 	ja = [];
            	// }



        		 // console.log(departmentId);
        		 // console.log(ja);




            });

            // console.log( uniques );
            // console.log( _.compact(uniques) );
            uniques = _.compact(uniques);
            var response = {
                id: g.id,
                name: g.name,
                data: uniques[0]
            };

            // console.log( response );

			cb(null, response);

		});



	};

	// This function will return ingredients
	Grocery.convertDepartmentItems = (grocery) => {

		var g       = grocery.toJSON();
		let arr     = _.map(grocery.hideThisIds, item => item.toString());

		// change this names later, please :todo
		let purchasedArray    = _.map(grocery.purchasedIds, item => item.toString());


        var uniques = _.map(_.groupBy(g.ingredients, function(item){
        	// console.log(item);
          return item.department.id.toString();
        }), function(grouped){


        	var currentDepartmentId = grouped[0].departmentId.toString();

        	var flag = _.contains(arr, currentDepartmentId);

    		var ja = _.map(grouped, function(item){


		 	// Grocery.customIngredientsArray('todo', item, g.id);
		 		// console.log(item);
    		 	return {
					id: item.id,
					name: item.name,
					completed: _.contains(purchasedArray, item.id.toString()),
					departmentId: currentDepartmentId,
					order: _.indexOf(grouped, item),
					custom: item.custom

				}
		 	});


        		// if ( !flag ) {

    		return { id: currentDepartmentId,
                name: grouped[0].department.name,
                type: grouped[0].department.type,
                ingredients: ja,
            };

        		// }
        	// return {};

        	// return { id: grouped[0].department.id.toString(),
         //            name: grouped[0].department.name,
         //            type: grouped[0].department.type,
         //            ingredients: [],
         //        };






        });


        return uniques[0].ingredients;


	};

	// :todo maybe we can get rid of this, because we're just moving same data between fuctions
	Grocery.getObjectForClone = function(grocery){

		var object = {
			name: grocery.name,
			desc: grocery.desc,
			slug: grocery.slug,
			img : grocery.img,
			hideThisIds  : grocery.hideThisIds,
			ingredientIds: grocery.ingredientIds,
			created_at   : new Date(),
			updated_at   : new Date(),
		};

		return object;
	};


	//:todo add remote method for enable API calls for this method
	// Grocery.cloner


	// 	data must have this structure:
	// {
	// 	title: data.title,
	// 	desc:  data.desc,
	// 	slug:  data.slug,
	// 	img :  data.img,
	// 	departmentIds: data.departmentIds,
	// 	hideThisIds:   data.hideThisIds,
	// }

	Grocery.createnew = function(userId, data, cb){

		Grocery.create(data, function(err, model){

			//console.log(model)
			// :todo check relations with other sub models

			// console.log( model.id );
			// Grocery.attachToUser(model.id, userId, function(data){

			// });

		});

	};

	// This query connect grocery, ingredients and departments
	Grocery.query1 = function(){
		return {
			include: {
				relation: 'ingredients',
				scope: {
					include: {
						relation: 'department',
						// scope: {

						// }
					}

				}
			}

		};
	};

	// this query connect grocery and purchased ingredients
	Grocery.query2 = function(groceryId){
		return {
			include: {
				relation: 'purchased',
				scope: {
					fields: [ 'id', 'name' ],
					// include: {
					// 	relation: 'ingredients',
					// 	scope: {
					// 		fields: [ 'name' ],
					// 		// where: {
					// 		// 	departmentId: id
					// 		// }
					// 	}
					// }

				}
			},
			where: { id:groceryId }

		};
	};

	Grocery.queryOneDepartment = function(departmentId){
		return {
			include: {
				relation: 'ingredients',
				scope: {

					fields: [ 'id', 'name', 'departmentId', 'custom' ],
					where: {
						departmentId: departmentId
					},
					include: {
						relation: 'department',

					}

				}
			}

		}
	};

	Grocery.queryDepartmentsOnly = function(){
		return {
			include: {
				relation: 'ingredients',
				scope: {
					fields: [ 'departmentId' ],
					include: {
						relation: 'department',
						// scope: {

						// }
					}

				}
			}

		};
	};

	Grocery.withDepartments = function(groceryId, cb){
		Grocery.findById(groceryId, {
			include: {
				relation: 'ingredients',
				scope: {
					include: {
						relation: 'department',
						// scope: {

						// }
					}

				}
			}

		}, cb);
	};


	Grocery.queryNotHidden = function(){
		return {
			include: ['ingredients', 'departmentsToHide']
		}
	};



	// :todo think about adding count(to departments).

	// So if ingredients in dep = 0 - don't show it









	Grocery.withPurchased = function(groceryId, cb){
		Grocery.findOne(Grocery.query2(groceryId), cb);
	};


	Grocery.addPurchased = function(options){
		options.type  = 'add';
		options.field = 'purchasedIds'
		Grocery.proceed(options);

	};
	Grocery.removePurchased = function(options){
		options.type  = 'remove';
		options.field = 'purchasedIds'
		Grocery.proceed(options);

	};
	Grocery.cleanPurchased = function(options){
		options.type  = 'clear';
		options.field = 'purchasedIds'
		Grocery.proceed(options);
	};

	Grocery.addDepartment = function(options){
		options.type  = 'hide';
		options.field = 'hideThisIds'
		Grocery.proceed(options);
	};
	Grocery.removeDepartment = function(options){
		options.type  = 'show';
		options.field = 'hideThisIds'
		Grocery.proceed(options);
	};
	Grocery.showAllDepartments = function(options){
		options.type  = 'all';
		options.field = 'hideThisIds'
		Grocery.proceed(options);
	};
	// Grocery.removeRemoveDepartment = function(options){
	// 	// options.type  = 'destroy';
	// 	// options.field = 'ingredientIds';
	// 	Grocery.removeIngredient(options);
	// };

	Grocery.addIngredient = function(options){
		options.type  = 'add-ing';
		options.field = 'ingredientIds';
		Grocery.proceed(options);
	};

	Grocery.removeIngredient = function(options){
		options.type  = 'remove-ing';
		options.field = 'ingredientIds';
		Grocery.proceed(options);
	};

	// Grocery.addItem = function(options){
	// 	options.type  = 'add-item';
	// 	options.field = 'itemsIds';
	// 	Grocery.proceed(options);
	// };

	// Grocery.removeItem = function(options){
	// 	options.type  = 'remove-item';
	// 	options.field = 'itemsIds';
	// 	Grocery.proceed(options);
	// };
	Grocery.proceed = function(options){

		var type = options.type;

		Grocery.findById(options.groceryId, {}, function(err, model){

			// console.log(model);
			if( options.type == 'clear' || options.type ==  'all'){

				model.updateAttribute(options.field, []);

			}


			if( options.type == 'add' || options.type == 'hide' || options.type == 'add-ing' ){

                let arr = _.map(model[options.field], item => item.toString());

                var mergedValues = _.union( arr, options.secondArray );

                model.updateAttribute(options.field, mergedValues);

			}


			if( options.type == 'remove' || options.type == 'show' || options.type == 'remove-ing' ){


                if( !model[options.field] ){ return true; }

                let arr = _.map(model[options.field], item => item.toString());

                arr = arr.filter(item => !options.secondArray.includes(item));
                // !!! Read below about array.includes(...) support !!!

                model.updateAttribute(options.field, arr);

			}

			// console.log(model.hideThisIds);
			// console.log(model);


		});

	}

	// change to params and remove second and third attribute
	Grocery.customIngredientsArray = function(type, ingredient, groceryId){

		if (type == 'todo'){
			return {
				id: ingredient.id,
				title: ingredient.name, // change title to name
				completed: false,
				delete: '/del/ing/' + ingredient.id + '/' + groceryId
			};
			// [
   //          		 	ingredient.id,
   //          		 	ingredient.name,
   //          		 	'/del/ing/' + ingredient.id + '/' + groceryId
   //      		 	] // :todo change this to an object
		}

	};


	Grocery.notUsedButCoolWay = function(groceryId){

	    Grocery.fetchById(groceryId, function(err, response){

      console.log(response.data);
      // _.pluck(response.data, function(item){
      //   console.log(item);
      // });

      // :todo remove ingredients from this list.
      // but this will cause issue in select field
      var departments = _.map(response.data, function(obj) {
        // maybe it'll be better to just from an object by hands
        return _.pick(obj, 'id', 'name', 'type', 'ingredients');
      });

      var currentDepartmentCollection = _.where(response.data, {id:departmentId});
      currentDepartmentCollection = currentDepartmentCollection[0];

      //console.log(currentDepartmentCollection);

      // console.log( _.where(response.data, {id:departmentId}) );

      // res.render('pages/shopping/shopping-list', {
      //   user        : req.user,
      //   url         : req.url,
      //   groceryId   : groceryId,
      //   departmentId: departmentId,
      //   name        : currentDepartmentCollection.name,
      //   departments: departments

      // });

    });

	};


};
