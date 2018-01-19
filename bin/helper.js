const Raven   = require('raven');
// @TODO move id to config file. or we use it in a lot of places.
Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

const idsOnly = (array) => {
  if ( !array ) return; //@TODO add raven exception later??
  var result = Object.keys(array).map(function(e) {
      return array[e].id;
  });

  return result;
};

// raven is for exception catcher

// cb for callbacks of this method. maybe we need to have it, cause we use some data in import file.
// But maybe it can be limited...

// database is important for creating new
// model is a model name, that we use fo passing data
// @TODO and checking is model exist and create a variables from array by easiest way. i saw similar sutff at jQuery libraries.
const create = (options) => {

  let Model      = options['model'];
  let table_name = options['table_name'];
  let database   = options['database'];
  let data       = options['data'];
  // let Raven      = options['Raven'];

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }

    // Allergy.create(get(), cb);
    if( !data ) {
      Model.create(get(), cb);
    }
    // check if it works as it must 
    Model.create(get(data), cb);

  });

};

const get = ( path ) => {

}

module exports {
  idsOnly : idsOnly,
  create  : create
}
