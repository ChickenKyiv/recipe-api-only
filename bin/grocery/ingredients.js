'use strict';

const debug   = require('debug');

let table_name = 'Ingredient'

const get = (departments) => {

    var data     = [
			{
	  		name: "Asparagus",
	      departmentId: departments[0].id
	  	},
	  	{
	      name: "Broccoli",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Carrots",
	      departmentId: departments[0].id
	  	},
	  	{
	      name: "Cauliflower",
	      departmentId: departments[0].id
	  	},
	    {
	      name: "Celery",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Corn",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Cucumbers",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Lettuce / Greens",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Mushrooms",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Onions",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Peppers",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Potatoes",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Spinach",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Squash",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Zucchini",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Tomatoes*",
	      departmentId: departments[0].id
	    },

	    /////


	    {
	      name: "BBQ sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Gravy",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Honey",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Hot sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Jam / Jelly / Preserves",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Ketchup / Mustard",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Pasta sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Relish",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Salad dressin",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Salsa",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Soy sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Steak sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Syrup",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Worcestershire sauce",
	      departmentId: departments[1].id
	    },

	    //////
	    {
	      name: "Butter / Margarine",
	      departmentId: departments[2].id
	    },
	    {
	      name: "Cottage cheese",
	      departmentId: departments[2].id
	    },
	    {
	      name: "Half & half",
	      departmentId: departments[2].id
	    },
	    {
	      name: "Milk",
	      departmentId: departments[2].id
	    },
	    {
	      name: "Sour cream",
	      departmentId: departments[2].id
	    },

	    {
	      name: "Whipped cream",
	      departmentId: departments[2].id
	    },
	    {
	      name: "Yogurt",
	      departmentId: departments[2].id
	    },

	    ////
	    {
	      name: "Bleu cheese",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Cheddar",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Cottage cheese",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Cream cheese",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Feta",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Goat cheese",
	      departmentId: departments[3].id
	    },
	    {
	      name: "Mozzarella",
	      departmentId: departments[3].id
	    },
	    {
	        name: "Parmesan",
	        departmentId: departments[3].id
	    },
	    {
	        name: "Provolone",
	        departmentId: departments[3].id
	    },
	    {
	        name: "Ricotta",
	        departmentId: departments[3].id
	    },
	    {
	        name: "Sandwich slices",
	        departmentId: departments[3].id
	    },
	    {
	        name: "Swiss",
	        departmentId: departments[3].id
	    },

	    ////
	    {
	        name: "Bacon / Sausage",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Beef",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Chicken",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Ground beef / Turkey",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Ham / Pork",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Hot dogs",
	        departmentId: departments[4].id
	    },
	    {
	        name: "Lunchmeat",
	        departmentId: departments[4].id
	    },

	    {
	        name: "Turkey",
	        departmentId: departments[4].id
	    },

	    /////
	    {
	        name: "Catfish",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Crab",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Lobster",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Mussels",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Oysters",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Salmon",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Shrimp",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Tilapia",
	        departmentId: departments[5].id
	    },
	    {
	        name: "Tuna",
	        departmentId: departments[5].id
	    },
	    ///
	    {
	        name: "Beer",
	        departmentId: departments[6].id
	    },
	    {
	        name: "Club soda / Tonic",departmentId: departments[6].id
	    },
	    {
	        name: "Champagne",departmentId: departments[6].id
	    },
	    {
	        name: "Gin",departmentId: departments[6].id
	    },
	    {
	        name: "Juice",departmentId: departments[6].id
	    },
	    {
	        name: "Mixers",departmentId: departments[6].id
	    },
	    {
	        name: "Red wine / White wine",departmentId: departments[6].id
	    },
	    {
	        name: "Rum",departmentId: departments[6].id
	    },
	    {
	        name: "Saké",departmentId: departments[6].id
	    },
	    {
	        name: "Soda pop",departmentId: departments[6].id
	    },
	    {
	        name: "Sports drink",departmentId: departments[6].id
	    },
	    {
	        name: "Whiskey",departmentId: departments[6].id
	    },
	    {
	        name: "Vodka",departmentId: departments[6].id
	    },

	    ///
	    {
	        name: "Bagels / Croissants",departmentId: departments[7].id
	    },
	    {
	        name: "Buns / Rolls",departmentId: departments[7].id
	    },
	    {
	        name: "Cake / Cookies",departmentId: departments[7].id
	    },
	    {
	        name: "Donuts / Pastries",departmentId: departments[7].id
	    },
	    {
	        name: "Fresh bread",departmentId: departments[7].id
	    },
	    {
	        name: "Pie! Pie! Pie!",departmentId: departments[7].id
	    },
	    {
	        name: "Pita bread",departmentId: departments[7].id
	    },
	    {
	        name: "Sliced bread",departmentId: departments[7].id
	    },

	    ////
	    {
	        name:'Baking powder / Soda',departmentId: departments[8].id
	    },
	    {
	        name:'Bread crumbs',departmentId: departments[8].id
	    },
	    {
	        name:'Cake / Brownie mix',departmentId: departments[8].id
	    },
	    {
	        name:'Cake icing / Decorations',departmentId: departments[8].id

	    },
	    {
	        name:'Chocolate chips / Cocoa',departmentId: departments[8].id

	    },
	    {
	        name:'Flour',departmentId: departments[8].id
	    },
	    {
	        name:'Shortening',departmentId: departments[8].id
	    },
	    {
	        name:'Sugar',departmentId: departments[8].id
	    },
	    {
	       name:'Sugar substitute',departmentId: departments[8].id
	    },
	    {
	        name:'Yeast',departmentId: departments[8].id
	    },
	    ///
	    {
	        name:'Candy / Gum',departmentId: departments[9].id
	    },
	    {
	        name:'Cookies',departmentId: departments[9].id
	    },
	    {
	           name:'Crackers',departmentId: departments[9].id
	    },
	    {
	         name:'Dried fruit',departmentId: departments[9].id
	    },

	    {
	         name:'Granola bars / Mix',departmentId: departments[9].id
	    },
	    {
	        name:'Nuts / Seeds',departmentId: departments[9].id
	    },
	    {
	       name: 'Oatmeal',departmentId: departments[9].id
	    },
	    {
	        name:'Popcorn',departmentId: departments[9].id
	    },
	    {
	       name:'Potato / Corn chips',departmentId: departments[9].id
	    },
	    {

	      name:'Pretzels',departmentId: departments[9].id
	    },
	    ////
	    {

	      name:'Burger night',departmentId: departments[10].id
	    },
	    {

	      name:'Chili night',departmentId: departments[10].id
	    },
	    {

	      name:'Pizza night',departmentId: departments[10].id
	    },
	    {

	     name:'Spaghetti night',departmentId: departments[10].id
	    },
	    {

	      name:'Taco night',departmentId: departments[10].id
	    },
	    {
	     name:'Take-out deli food',departmentId: departments[10].id
	    },
	    ////
	    {

	     name:'Baby food',departmentId: departments[11].id
	    },
	    {

	     name:'Diapers',departmentId: departments[11].id
	    },
	    {

	        name:'Formula',departmentId: departments[11].id
	    },
	    {

	      name:'Lotion',departmentId: departments[11].id
	    },
	    {

	      name:'Baby wash',departmentId: departments[11].id
	    },
	    {

	     name:'Wipes',departmentId: departments[11].id
	    },

	    ///
	    {
	       name:'Cat food / Treats',departmentId: departments[12].id
	    },
	    {

	      name:'Cat litter',departmentId: departments[12].id
	    },
	    {

	      name:'Dog food / Treats',departmentId: departments[12].id
	    },
	    {
	     name:'Flea treatment',departmentId: departments[12].id
	    },
	    {

	      name:'Pet shampoo',departmentId: departments[12].id
	    },
	//////
	    {

	     name:'Apples',departmentId: departments[13].id
	    },
	    {

	     name:'Avocados',departmentId: departments[13].id
	    },

	    {
	     name:'Bananas',departmentId: departments[13].id
	    },
	    {

	    name:'Berries',departmentId: departments[13].id
	    },

	    {

	      name:'Cherries',departmentId: departments[13].id
	    },
	    {

	     name:'Grapefruit',departmentId: departments[13].id
	    },
	    {
	     name:'Grapes',departmentId: departments[13].id
	    },
	    {
	      name:'Kiwis',departmentId: departments[13].id
	    },
	    {
	         name:'Lemons / Limes',departmentId: departments[13].id
	    },

	    {
	        name:'Melon',departmentId: departments[13].id
	    },
	    {
	    name:'Nectarines',departmentId: departments[13].id
	    },
	    {
	       name:'Oranges',departmentId: departments[13].id
	    },
	    {

	     name:'Peaches',departmentId: departments[13].id
	    },

	    {
	      name:'Pears',departmentId: departments[13].id
	    },
	    {

	  name:'Plums',departmentId: departments[13].id
	    },
	    ////////
	    {

	      name:'Bagels',departmentId: departments[14].id
	    },
	    {

	     name:'Chip dip',departmentId: departments[14].id
	    },
	    {

	      name:'Eggs',departmentId: departments[14].id
	    },
	    {

	     name:'English muffins',departmentId: departments[14].id
	    },
	    {

	   name:'Fruit juice',departmentId: departments[14].id
	    },
	    {

	  name:'Hummus',departmentId: departments[14].id
	    },
	    {
	        name:'Ready-bake breads',departmentId: departments[14].id
	    },
	    {
	         name:'Tofu',departmentId: departments[14].id
	    },
	    {

	  name:'Tortillas',departmentId: departments[14].id
	    },

	    ///
	    {
	     name:'Breakfasts',departmentId: departments[15].id
	    },
	    {
	      name:'Burritos',departmentId: departments[15].id
	    },
	    {

	  name:'Fish sticks',departmentId: departments[15].id
	    },
	    {
	      name:'Fries / Tater tots',departmentId: departments[15].id
	    },
	    {
	      name:'Ice cream / Sorbet',departmentId: departments[15].id
	    },
	    {
	        name:'Juice concentrate',departmentId: departments[15].id
	    },
	    {
	     name:'Pizza',departmentId: departments[15].id
	    },
	    {
	      name:'Pizza Rolls',departmentId: departments[15].id
	    },{
	      name:'Popsicles',departmentId: departments[15].id
	    },{

	  name:'TV dinners',departmentId: departments[15].id
	    },
	    {

	  name:'Vegetables',departmentId: departments[15].id
	    },
	    //////
	    {
	      name:'Bouillon cubes',departmentId: departments[16].id
	    },{

	      name:'Cereal',departmentId: departments[16].id
	    },{

	     name:'Coffee / Filters',departmentId: departments[16].id
	    },
	    {
	      name:'Instant potatoes',departmentId: departments[16].id
	    },
	    {
	      name:'Lemon / Lime juice',departmentId: departments[16].id
	    },
	    {
	      name:'Mac & cheese',departmentId: departments[16].id
	    },{
	      name:'Olive oil',departmentId: departments[16].id
	    },{

	      name:'Packaged meals',departmentId: departments[16].id
	    },
	    {
	     name:'Pancake / Waffle mix',departmentId: departments[16].id
	    },
	    {
	      name:'Pasta',departmentId: departments[16].id
	    },
	    {
	       name:'Peanut butter',departmentId: departments[16].id
	    },{
	      name:'Pickles',departmentId: departments[16].id
	    },{
	       name:'Rice',departmentId: departments[16].id
	    },
	    {
	       name:'Tea',departmentId: departments[16].id
	    },
	    {
	       name:'Vegetable oil',departmentId: departments[16].id
	    },
	    {

	  name:'Vinegar',departmentId: departments[16].id
	    },
	    /////
	    {

	      name:'Applesauce',departmentId: departments[17].id
	    },{
	      name:'Baked beans',departmentId: departments[17].id
	    },
	    {
	       name:'Broth',departmentId: departments[17].id
	    },
	    {
	       name:'Fruit',departmentId: departments[17].id
	    },
	    {
	        name:'Olives',departmentId: departments[17].id
	    },{
	      name:'Tinned meats',departmentId: departments[17].id
	    },{
	        name:'Tuna / Chicken',departmentId: departments[17].id
	    },
	    {
	      name:'Soup / Chili',departmentId: departments[17].id
	    },
	    {
	      name:'Tomatoes',departmentId: departments[17].id
	    },
	    {

	      name:'Veggies',departmentId: departments[17].id
	    },
	    ////
	    {
	      name:'Basil',departmentId: departments[18].id
	    },{
	      name:'Black pepper',departmentId: departments[18].id
	    },
	    {
	      name:'Cilantro',departmentId: departments[18].id
	    },
	    {

	  name:'Cinnamon',departmentId: departments[18].id
	    },
	    {
	         name:'Garlic',departmentId: departments[18].id
	    },{
	       name:'Ginger',departmentId: departments[18].id
	    },{
	         name:'Mint',departmentId: departments[18].id
	    },
	    {
	         name:'Oregano',departmentId: departments[18].id
	    },
	    {
	         name:'Paprika',departmentId: departments[18].id
	    },
	    {
	       name:'Parsley',departmentId: departments[18].id
	    },{
	      name:'Red pepper',departmentId: departments[18].id
	    },{
	      name:'Salt',departmentId: departments[18].id
	    },
	    {
	    name:'Vanilla extract',departmentId: departments[18].id
	    },
	    //////
	    //////
	    {
	    name:'Antiperspirant / Deodorant',
	    departmentId: departments[19].id
	    },
	    {
	    name:'Bath soap / Hand soap',departmentId: departments[19].id
	    },
	    {
	    name:'Condoms / Other b.c.',departmentId: departments[19].id
	    },
	    {
	    name:'Cosmetics',departmentId: departments[19].id
	    },
	    {
	    name:'Cotton swabs / Balls',departmentId: departments[19].id
	    },
	    {
	    name:'Facial cleanser',departmentId: departments[19].id
	    },
	    {
	    name:'Facial tissue',departmentId: departments[19].id
	    },
	    {
	    name:'Feminine products',departmentId: departments[19].id
	    },
	    {
	    name:'Floss',departmentId: departments[19].id
	    },
	    {
	    name:'Hair gel / Spray',departmentId: departments[19].id
	    },
	    {
	    name:'Lip balm',departmentId: departments[19].id
	    },
	    {
	    name:'Moisturizing lotion',departmentId: departments[19].id
	    },
	    {
	    name:'Mouthwash',departmentId: departments[19].id
	    },
	    {
	    name:'Razors / Shaving cream',departmentId: departments[19].id
	    },
	    {
	    name:'Shampoo / Conditioner',departmentId: departments[19].id
	    },
	    {
	    name:'Sunblock',departmentId: departments[19].id
	    },
	    {
	    name:'Toilet paper',departmentId: departments[19].id
	    },
	    {
	    name:'Toothpaste',departmentId: departments[19].id
	    },
	    {
	    name:'Vitamins / Supplements',departmentId: departments[19].id
	    },
	    ///
	    {
	    name:'Allergy',departmentId: departments[20].id
	    },
	    {
	    name:'Antibiotic',departmentId: departments[20].id
	    },
	    {
	    name:'Antidiarrheal',departmentId: departments[20].id
	    },
	    {
	    name:'Aspirin',departmentId: departments[20].id
	    },
	    {
	    name:'Antacid',departmentId: departments[20].id
	    },
	    {
	    name:'Band-aids / Medical',departmentId: departments[20].id
	    },
	    {
	    name:'Cold / Flu / Sinus',departmentId: departments[20].id
	    },
	    {
	    name:'Pain reliever',departmentId: departments[20].id
	    },
	    {
	    name:'Prescription pick-up',departmentId: departments[20].id
	    },
	    ////
	    {
	    name:'Aluminum foil',departmentId: departments[21].id
	    },
	    {
	    name:'Napkins',departmentId: departments[21].id
	    },
	    {
	    name:'Non-stick spray',departmentId: departments[21].id
	    },
	    {
	   name:'Paper towels',departmentId: departments[21].id
	    },
	    {
	    name:'Plastic wrap',departmentId: departments[21].id
	    },
	    {
	    name:'Sandwich / Freezer bags',departmentId: departments[21].id
	    },
	    {
	    name:'Wax paper',departmentId: departments[21].id
	    },

	    {
	    name:'Air freshener',departmentId: departments[23].id
	    },
	    {
	    name:'Bathroom cleaner',departmentId: departments[23].id
	    },
	    {
	    name:'Bleach / Detergent',departmentId: departments[23].id
	    },
	    {
	    name:'Dish / Dishwasher soap',departmentId: departments[23].id
	    },
	    {
	    name:'Garbage bags',departmentId: departments[23].id
	    },
	    {
	    name:'Glass cleaner',departmentId: departments[23].id
	    },
	    {
	    name:'Mop head / Vacuum bags',departmentId: departments[23].id
	    },
	    {
	    name:'Sponges / Scrubbers',departmentId: departments[23].id
	    },
	    ////
	    {
	    name:'CDRs / DVDRs',departmentId: departments[24].id
	    },
	    {
	    name:'Notepad / Envelopes',departmentId: departments[24].id
	    },
	    {
	    name:'Glue / Tape',departmentId: departments[24].id
	    },
	    {
	    name:'Printer paper',departmentId: departments[24].id
	    },
	    {
	    name:'Pens / Pencils',departmentId: departments[24].id
	    },
	    {
	    name:'Postage stamps',departmentId: departments[24].id
	    },
	    ///

	    ///
	    {
	    name:'Automotive',departmentId: departments[25].id

	    },
	    {
	    name:'Batteries',departmentId: departments[25].id

	    },
	    {
	    name:'Charcoal / Propane',departmentId: departments[25].id
	    },
	    {
	    name:'Flowers / Greeting card',departmentId: departments[25].id
	    },
	    {
	    name:'Insect repellent',departmentId: departments[25].id
	    },
	    {
	    name:'Light bulbs',departmentId: departments[25].id
	    },
	    {
	    name:'Newspaper / Magazine',departmentId: departments[25].id
	    },
	    {
	    name:'Random impulse buy',departmentId: departments[25].id
	    }
	    ///
     ];

  	return data;

};




// nt used cause GS updated their structure
// function attachDepartmentsToIngredients(departments, ingredients){

// 	// 	ingredient.updateAttribute(relation1, arrayWithIds[0]);


//@TODO replace with the latst veersion
//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//
module.exports.get   = get;
module.exports.table_name   = table_name;
