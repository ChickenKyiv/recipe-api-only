'use strict';

const debug = require('debug');
const async = require('async');

// let Model
// let database
let table_name = 'Recipe'
let raven

// @TODO not clear, how we can know which attribute to use?
let attributes = [
  'nutritions', // #0
  'cuisines',   // #1
  'diets',      // #2
  'holidays',   // #3
  'courses',    // #4
  'allergies'   // #5
];


const get = () => {

    var data     = [



                {
                    "id": "2",
                    //"name": "Montreal Style Poutine",
                    "imageURL": "http://img.sndimg.com/food/image/upload/h_479,w_639,c_fit/v1/img/recipes/51/78/46/BKN9rVETnqVjW3zddIJ1_0S9A4664.jpg",
                    "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",

                    "title"   : "Baked Chicken Chimichangas, Borracho Beans",
                    "ingredients": [
                        {

                            "unit_type" : "simple",
                            "quantity"  : "3",
                            "unit_name" : "medium russet potatoes, sliced into sticks",

                            "category"  : {
                                "id" : "2",
                                "name"   : "Baking",
                            }


                        },
                        {

                            "unit_type" : "simple",
                            "quantity"  : "2",
                            "unit_name" : "tablespoons vegetable oil, divided",

                            "category"  : {
                                "id" : "2",
                                "name"   : "Baking",
                            }


                        },
                        {

                            "unit_type" : "simple",
                            "quantity"  : "1",
                            "unit_name" : "salt & freshly ground black pepper, to taste",

                            "category"  : {
                                "id" : "2",
                                "name"   : "Baking",
                            }


                        },
                        {

                            "unit_type" : "simple",
                            "quantity"  : "2 chopped",
                            "unit_name" : "scallions",

                            "category"  : {
                                "id" : "1",
                                "name"   : "Meat",
                            }


                        },
                        {

                            "unit_type" : "simple",
                            "quantity"  : "1",
                            "unit_name" : "ounces cheese curds or 6 ounces fresh mozzarella cheese, diced",

                            "category"  : {
                                "id" : "4",
                                "name"   : "Drinks",
                            }


                        }
                    ],
                    "steps": [
                        "",
                        "",
                        "",
                        ""
                    ],
                    "meta": [{
                        "prepTime"    :"PT30M",
                        "totalTime"   :"PT3H",
                        "recipeYield" :"8",
                        "description" : "",
                        "notes"       : ""
                    }]
                }

                {

  "name": "Perfect Apple Pie",
  "author": "Gin Blanco",
  "image": "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
  "description": "A classic apple pie takes a shortcut with easy Pillsbury® unroll-fill refrigerated pie crust.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "276",
    "bestRating": "5",
    "worstRating": "1"
  },
  "prepTime": "PT30M",
  "totalTime": "PT3H",
  "recipeYield": "8",
  "nutrition": {
    "@type": "NutritionInformation",
    "servingSize": "1 medium slice",
    "calories": "230 calories",
    "fatContent": "1 g",
    "carbohydrateContent": "43 g",
    "cholesterolContent": "0 mg",
    "fiberContent": "1 g",
    "proteinContent": "1 g",
    "saturatedFatContent": "2 ½ g",
    "servingSize": "1 Serving",
    "sodiumContent": "200 mg",
    "sugarContent": "27 g",
    "transFatContent": "0 g"
  },
  "recipeIngredient": [
    "1 box Pillsbury™ refrigerated pie crusts, softened as directed on box",
    "6 cups thinly sliced, peeled apples (6 medium)",
    "3/4 cup sugar",
    "2 tablespoons all-purpose flour",
    "3/4 teaspoon ground cinnamon",
    "1/4 teaspoon salt",
    "1/8 teaspoon ground nutmeg",
    "1 tablespoon lemon juice"
  ],
  "recipeInstructions": [
    "1 Heat oven to 425°F. Place 1 pie crust in ungreased 9-inch glass pie plate. Press firmly against side and bottom.",
    "2 In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal; flute. Cut slits or shapes in several places in top crust.",
    "3 Bake 40 to 45 minutes or until apples are tender and crust is golden brown. Cover edge of crust with 2- to 3-inch wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving."
   ]
}

{
    "title": "Basic Fruit Salad",
    "yields" : {
        "servings": "6"
    },
    "ingredients": [
        {
          "name" : "apple",
          "amounts" : {
              "amount" : "1",
              "unit"   : "each",
              "quantity": 0.333333333333333,
              "displayQuantity": "1/3",
              "metricQuantity": 59,
              "metricDisplayQuantity": "59",
              "metricUnit": "ml",
          }
        },
        {
          "name" : "banana",
          "amounts" : {
              "amount" : "1",
              "unit"   : "each",
              "quantity": 0.333333333333333,
              "displayQuantity": "1/3",
              "metricQuantity": 59,
              "metricDisplayQuantity": "59",
              "metricUnit": "ml",
          }
        },
        {
          "name" : "orange",
          "amounts" : {
              "amount" : "1",
              "unit"   : "each",
              "quantity": 0.333333333333333,
              "displayQuantity": "1/3",
              "metricQuantity": 59,
              "metricDisplayQuantity": "59",
              "metricUnit": "ml",
          }
        },
        {
          "name" : "grapes",
          "amounts" : {
              "amount" : "10",
              "unit"   : "cup",
              "quantity": 0.333333333333333,
              "displayQuantity": "1/3",
              "metricQuantity": 59,
              "metricDisplayQuantity": "59",
              "metricUnit": "ml",
          }
        },
    ],
    "steps": [

        {
          "step"  : "Cut the apple into cubes",
          "notes" : [
              "Use whole apples",
              "Pears may be substituted, but produce a different flavor and mouthfeel"
          ]
        },
        {
          "step"  : "Cut the banana into slices",
          "notes" : [
              "",
              ""
          ]
        },
        {
          "step"  : "Peel the orange, and divide into segments",
          "notes" : [
              "",
              ""
          ]
        },
        {
          "step"  : "Combine all ingredients in a bowl",
          "notes" : [
              "",
              ""
          ]
        },
        {
          "step"  : "Mix to combine",
          "notes" : [
              "",
              ""
          ]
        },

    ],
    "notes" : [
        "This is a friendly recipe; giving, rather than throwing, is recommended.1",
        "This is a friendly recipe; giving, rather than throwing, is recommended.2",
        "This is a friendly recipe; giving, rather than throwing, is recommended.3"
    ]

}



'use strict';

module.exports = {

    "id"   : "1989",
    "name" : "Crock Pot Roast",
    "ingredients": [
      {
        "quantity": "1",
        "name": " beef roast",
        "department": "Meat"
      },
      {
        "quantity": "1 package",
        "name": "brown gravy mix",
        "department": "Baking"
      },
      {
        "quantity": "1 package",
        "name": "dried Italian salad dressing mix",
        "department": "Condiments"
      },
      {
        "quantity": "1 package",
        "name": "dry ranch dressing mix",
        "department": "Condiments"
      },
      {
        "quantity": "1/2 cup",
        "name": "water",
        "department": "Drinks"
      }
    ],
    "directions": [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours."
    ],

    "prepTime"    :"30min",
    "totalTime"   :"3h",
    "recipeYield" :"8",

    "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
};





      {

        title: "Crock Pot Roast12",
        directions: [
         "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"30min",
        total_time   :"3h",
        recipe_yield :"8",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        "url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",

      },
      {

        title: "Crock Pot Roast1",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
        directions: [
          "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",

      }
     ];

  	return data;

};




const relate = async (options, results, helper) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  //@TODO apply this changes to all import model files
  let server
  let database
  let raven
  ( {server, database, raven} = options );


  let recipes
  try {

    let Recipe = server.models[table_name];
    recipes    = await Recipe.find({});


  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like


  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays
      || !results.nutritions) {
        raven.captureException("cannot attach additional data to recipes");
  }

  // //@TODO create a method with foreach for each attribute in order to attach data to recipe
  // helper.attach( results.allergies,  recipes, attributes[0]);
  // helper.attach( results.courses,    recipes, attributes[1]);
  // helper.attach( results.cuisines,   recipes, attributes[2]);
  // helper.attach( results.diets,      recipes, attributes[3]);
  // helper.attach( results.holidays,   recipes, attributes[4]);
  // helper.attach( results.nutritions, recipes, attributes[5]);



};


module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;
