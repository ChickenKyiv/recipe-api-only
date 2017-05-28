'use strict';

// var async      = require('async');

module.exports = function(app) {

  var User        = app.models.UserModel;
  var Role        = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  var Recipe      = app.models.recipes; // @TODO update recipe model name
  var Ingredient  = app.models.ingredients; // @TODO update ingredients model name

  var Menu        = app.models.menus;  // @TODO update recipe model name



 //  var accounts = [
	// {
	//   name: 'john',	
	//   email: 'john.doe@ibm.com',
	//   password: 'john',
	//   created_at: new Date(),
	//   updated_at: new Date(),
	// },
	// {
	//   name: 'jane',
	//   email: 'jane.doe@ibm.com',
	//   password: 'jane',
	//   created_at: new Date(),
	//   updated_at: new Date(),
	// },
	// {
	//   name: 'admin',
	//   email: 'admin@ibm.com',
	//   password: 'admin',
	//   created_at: new Date(),
	//   updated_at: new Date(),

	// }
 //  ];

	// accounts.forEach(function(element) {
	//     // console.log(element);

	//     User.findOrCreate({
	//       where: {
	//         name: element.name,
	//         email: element.email,
	//       }
	//     }, element,
	//     function (err, user) {
	//       if (err) throw err;
	//       // console.log("+ " + log.id);
	//       // callback();

	//       if (user.name == 'admin'){
 //      		// create the admin role

 //      			// console.log(user);

 //      			// commented due to laziness moving this code to automigrate.
	// 		    // Role.create({
	// 		    //   name: 'admin'
	// 		    // }, function(err, role) {
	// 		    //   if (err) throw err;

	// 		    //   console.log('Created role:', role);

	// 		    //   //make admin an admin role
	// 		    //   role.principals.create({
	// 		    //     principalType: RoleMapping.USER,
	// 		    //     principalId: user.id 
	// 		    //   }, function(err, principal) {
	// 		    //     if (err) throw err;

	// 		    //     console.log('Created principal:', principal);
	// 		    //   });
	// 		    // });

	//       }


	//     });

	// });

	// importUsers(app, User, Role, RoleMapping);

	saveMenu (app, Menu, Recipe);

	// saveRecipe(app, Recipe);
	// saveIngredients(app, Ingredient);

	// saveMenu(app, Menu);
};




function importUsers(app, User, Role, RoleMapping){

  // var User        = app.models.UserModel;
  // var Role        = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;

  var accounts = [
	{
	  name: 'john',	
	  email: 'john.doe@ibm.com',
	  password: 'john1',
	  // created_at: new Date(),
	  // updated_at: new Date(),
	},
	{
	  name: 'jane',
	  email: 'jane.doe@ibm.com',
	  password: 'jane1',
	  // created_at: new Date(),
	  // updated_at: new Date(),
	},
	{
	  name: 'admin',
	  email: 'admin@ibm.com',
	  password: 'admin',
	  // created_at: new Date(),
	  // updated_at: new Date(),

	}
  ];

	accounts.forEach(function(element) {
	    // console.log(element);

	    User.findOrCreate({
	      where: {
	        name: element.name,
	        email: element.email,
	      }
	    }, element,
	    function (err, user) {
	      if (err) throw err;
	      // console.log("+ " + log.id);
	      // callback();

	      if (user.name == 'admin'){
      		// create the admin role

      			console.log(user);

      			// commented due to laziness moving this code to automigrate.
			    // Role.create({
			    //   name: 'admin'
			    // }, function(err, role) {
			    //   if (err) throw err;

			    //   console.log('Created role:', role);

			    //   //make admin an admin role
			    //   role.principals.create({
			    //     principalType: RoleMapping.USER,
			    //     principalId: user.id 
			    //   }, function(err, principal) {
			    //     if (err) throw err;

			    //     console.log('Created principal:', principal);
			    //   });
			    // });

	      }


	    });

	});
}


function Recipes1() {

	var recipe1 = 
		{ 
			
			  title: "Crock Pot Roast12",
			  ingredients: 
			  [{
			  	quantity: "1",
			  name: " beef roast",
			  type: "Meat"
			},
			  {
			  	quantity: "1 package",
			  name: "brown gravy mix",
			  type: "Baking"
			},
			  {
			  	quantity: "1 package",
			  name: "dried Italian salad dressing mix",
			  type: "Condiments"
			},
			  {
			  	quantity: "1 package",
			  name: "dry ranch dressing mix",
			  type: "Condiments"
			},
			  {
			  	quantity: "1/2 cup",
			  name: "water",
			  type: "Drinks"
			}
			],
			  directions: [
			 "Place beef roast in crock pot.",
			  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
			  "Pour the water around the roast.",
			  "Cook on low for 7-9 hours."
			  ],  
			  prep_time    :"30min",
			  total_time   :"3h",
			  recipe_yield :"8",
			   img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg","url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
			   // created_at:"December 17, 2003 03:24:00",
			   // updated_at:"December 17, 2003 03:24:00"
			};

return recipe1;

};


function Recipes2() {

		var recipe2 = 		
		{ 
			
			  title: "Crock Pot Roast1",
			  img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
			  ingredients: 
			  [
			  {
			  	quantity: "1",
			  name: " beef roast"
			},
			  {
			  	quantity: "1 package",
			  name: "brown gravy mix"
			},
			  {
			  	quantity: "1 package",
			  name: "dried Italian salad dressing mix"
			},
			  {
			  	quantity: "1 package",
			  name: "dry ranch dressing mix"
			},
			  {
			  	quantity: "1/2 cup",
			  name: "water"
			}
			  ],
			  directions: 
			  [
			  "Place beef roast in crock pot.",
			  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
			  "Pour the water around the roast.",
			  "Cook on low for 7-9 hours."
			  ],
			  prep_time    :"PT30M",
			  total_time   :"PT3H",
			  recipe_yield :"8",
			  // created_at:"December 17, 2003 03:24:00",
			  // updated_at:"December 17, 2003 03:24:00"
	};
	

return recipe2;

};

function saveRecipe(app, Recipe){
	var values = [ Recipes1(), Recipes2()];


	values.forEach(function(element) {
	    // console.log(element);

	    Recipe.findOrCreate({
	      where: {
	        name: element.name,
	        // customerId: element.customerId,
	      }
	    }, element,
	    function (err, model) {
	      if (err) throw err;
	  });
	});
};



function Ingredients1(){

	var ingredients = [
	{ 
	
		name: "black pepper",
		recipe_id: ["1", "2"],
		type: "simple",
		units: "1 teaspoon",
		done: "0",
		delete: "0", 
		// created_at: "2017-05-20T16:36:50.843Z", 
		// updated_at: "2017-05-20T16:36:50.843Z",
		recipesId: '5928d6ddcef3be0530f8bdff'
	},
	{ 
  	
      name: "extra-virgin olive oil",
      recipe_id: ["1", "2", "3", "4"],
     type: "complex",
      units: "17 tablespoons + 0.25 cup",
      done: "0","delete": "0", 
     // created_at: "2017-05-20T16:36:50.843Z", 
      // updated_at: "2017-05-20T16:36:50.843Z",
      // recipesId: '5928d6ddcef3be0530f8bdff'
  	},
  	{ 
      
      name: "kosher salt",
      recipe_id: ["5", "6", "7", "8"],
      type: "simple",
      units: "1 teaspoon",
      done: "0",
      delete: "0", 
      // created_at: "2017-05-20T16:36:50.843Z", 
      // updated_at: "2017-05-20T16:36:50.843Z",
      recipesId: '5928d6ddcef3be0530f8be00'
  	},
  	{ 
      
      name: "kosher salt and freshly ground black",
      recipe_id: ["1", "2", "3", "4"],
      type: "simple",
      units: "5 teaspoons",
      done: "0","delete": "0", 
      // created_at: "2017-05-20T16:36:50.843Z", 
      // updated_at: "2017-05-20T16:36:50.843Z",
      recipesId: '5928d6ddcef3be0530f8bdff',
  	}
	];

  return ingredients;
    
 };

function saveIngredients(app, Ingredient){
	var values = Ingredients();

	values.forEach(function(element) {
	    // console.log(element);

	    Ingredient.findOrCreate({
	      where: {
	        name: element.name,
	        // customerId: element.customerId,
	      }
	    }, element,
	    function (err, model) {
	      if (err) throw err;
	  });
	});
}

function Menu1(){

	var menus = [

	{ 

		title: "string", 
		date: "December 17, 2003 03:24:00",
		desc: "string", 
		recipes: [
			// Recipes1()
		],

		// created_at:"December 17, 2003 03:24:00",
		// updated_at:"December 17, 2003 03:24:00"
	},
    { 
      
      title: "string", 
      date: "December 17, 2003 03:24:00", 
      desc: "string", 
      recipes: [
      	// Recipes1(), Recipes2()
      ],

      // created_at:"December 19, 2003 03:24:00",
      // updated_at:"December 19, 2003 03:24:00"
  	},
    {
      title:"string1",
      date:"2003-12-17T11:24:00.000Z",
      desc:"string1",
      recipes: [
      	// Recipes1(),Recipes1(),Recipes2()
      ],

      // created_at:"2003-12-17T11:24:00.000Z",
      // updated_at:"2003-12-17T11:24:00.000Z",
 
  	},
    {
      title:"string2",
      date:"2017-05-17T11:24:00.000Z",
      desc:"string2",
      recipes: [
      	// Recipes1(), Recipes2(), Recipes2()
      ],

      // created_at:"2017-05-17T11:24:00.000Z",
      // updated_at:"2017-05-17T11:24:00.000Z",
   
  	},
    {
      title:"string3",
      date:"2017-05-28T11:24:00.000Z",
      desc:"string3",
      recipes: [
      	// Recipes2()
      ],

      // created_at:"2017-05-25T11:24:00.000Z",
      // updated_at:"2017-05-25T11:24:00.000Z",
  
  	}
	];

	// console.log( menus );
	return menus;       
    
};

// For this moment we don't care about making this database structure working well
// main aim is make it works, somehow. And as it will work fine for this case, it will evolve later.
function saveMenu(app, Menu, Recipe){

	var menus = Menu1();

	// console.log( menus );
	// console.log( Recipe );

	// Menu.updateAttributes({recipes: [ recipe ]}, function(err, menu){
				  //   		if (err) throw err;
  				// })


	menus.forEach(function(element) {

		Menu.findOrCreate({
	      where: {
	        title: element.title,
	        date: element.date
	        // email: element.email,
	      }
	    }, element,
	    function (err, menu) {
	      if (err) throw err;
	      // console.log("+ " + log.id);
	      // callback();

	      	// console.log(menu);
	      	saveRecipe(app, Recipe);



	      	var recipe1 = Recipes1();
	      	// var recipe2 = Recipes2();
	      	
	      	// [ recipe1, recipe2 ].forEach(function(element) {

	      	// });

	      	Recipe.findOrCreate({
	      		where:{
	      			name : recipe1.name
	      		}
	      	}, recipe1,
	      	function(err, recipe){
	      		// console.log(recipe);
	      		// console.log(recipe.id);


	      		// menu.recipes.push( recipe );
	      		
	      		menu.updateAttributes({recipes: [ recipe ]}, function(err, menu){
				    		if (err) throw err;
  				});

	     //  		Menu.updateAttributes({recipes: [ recipe ]}, function(err, menu){
				  //   		if (err) throw err;
  				// })

	      	// 	Menu.updateAttribute('recipes', [ recipe ], function(err, menu){
				    // if (err) throw err;
	      	// 	})


	      		// console.log(menu);

	      		if ( menu.title == 'string3' ) {// assume this as hardcode
	      			var recipe2 = Recipes2();
	      			Recipe.findOrCreate({where:{name:recipe2.name}},recipe2, function(element){

	      				// menu.recipes.push( element, element );
	      				var arr = menu.recipes;
	      				arr.push( element, element );

	      				menu.updateAttributes({recipes: arr}, function(err, menu){
				    		if (err) throw err;
	      				})

	      			});

	      			// menu.recipes.push( Recipes2(), Recipes2() );

	      		}	

	      		

	      	});

		});
	});

};


function Grocery1(){
	var grocery = [
	{
		ing:["6", "7", "8" ],
		departments: [
		{"id": "1",
		 "name": "BAKERY/BREAD",
		  "items": [
		  {
		  	id: "6","name": "black pepper",
		  recipeId: ["1", "2"],
		  type: "simple",
		  units: "1 teaspoon",
		  done: "0",
		  delete: "0"
		}
		  ]
		},{
			id: "2",
			 name: "BAKING",
			  items: [{
			  	"id": "6",
			  name: "black pepper",
			  recipeId: ["1", "2"],
			  type: "simple",
			  units: "1 teaspoon",
			  done: "0","delete": "0"
			}
			]
		}
		], 
		img: "string", 
		desc: "string",
		 slug: "string", 
		 created_at: "2017-05-20T16:36:50.843Z", 
		 updated_at: "2017-05-20T16:36:50.843Z"
		}
	];
	
};
