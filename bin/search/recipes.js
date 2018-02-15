let table_name = 'Recipe'
let raven

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

  // at this place we'll split recipes into 2 arrays in order to attach different attributes to different recipes.
  // we assume that was imported recipes from recipes/recipes-extended.js and we have 4 recipes in our array
  // it's a bad way to import things, but who care?
  // and as nutritions not included to search, we didn't split them.
  // @TODO create a random function that will be stored at helper.js and it'll attach random ids from array to relations array
  let recipes_one = [
    recipes[0], recipes[1]
  ];
  let recipes_two = [
    recipes[2], recipes[3]
  ];

  let allergies_one = [
    results.allergies[0],
    results.allergies[1],
    results.allergies[2],
    results.allergies[3],
  ];
  let allergies_two = [
    results.allergies[4],
    results.allergies[5],
    results.allergies[6],
    results.allergies[7],
  ];

  let courses_one = [
    results.courses[0],
    results.courses[1],
    results.courses[2],
    results.courses[3],
    results.courses[4],
  ];
  let courses_two = [
    results.courses[5],
    results.courses[6],
    results.courses[7],
    results.courses[8],
    results.courses[9],
  ];

  let cuisines_one = [
    results.cuisines[0],
    results.cuisines[1],
    results.cuisines[2],
    results.cuisines[3],
  ];
  let cuisines_two = [
    results.cuisines[4],
    results.cuisines[5],
    results.cuisines[6],
    results.cuisines[7],
  ];

  let diets_one = [
    results.diets[0],
    results.diets[1],
    results.diets[2],
  ];
  let diets_two = [
    results.diets[3],
    results.diets[4],
    results.diets[5],
  ];

  let holidays_one = [
    results.holidays[0],
    results.holidays[1],
    results.holidays[2],
  ];
  let holidays_two = [
    results.holidays[3],
    results.holidays[4],
    results.holidays[5],
  ];


  helper.attach( allergies_one,  recipes_one, attributes[0]);
  helper.attach( allergies_two,  recipes_two, attributes[0]);
  helper.attach( courses_one,    recipes_one, attributes[1]);
  helper.attach( courses_two,    recipes_two, attributes[1]);
  helper.attach( cuisines_one,   recipes_one, attributes[2]);
  helper.attach( cuisines_two,   recipes_two, attributes[2]);
  helper.attach( diets_one,      recipes_one, attributes[3]);
  helper.attach( diets_two,      recipes_two, attributes[3]);
  helper.attach( holidays_one,   recipes_one, attributes[4]);
  helper.attach( holidays_two,   recipes_two, attributes[4]);



  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  // helper.attach( results.allergies,  recipes, attributes[0]);
  // helper.attach( results.courses,    recipes, attributes[1]);
  // helper.attach( results.cuisines,   recipes, attributes[2]);
  // helper.attach( results.diets,      recipes, attributes[3]);
  // helper.attach( results.holidays,   recipes, attributes[4]);
  // helper.attach( results.nutritions, recipes, attributes[5]);



};
