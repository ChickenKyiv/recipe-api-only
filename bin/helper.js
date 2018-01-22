const Raven   = require('raven');
const debug   = require('debug');
// @TODO move id to config file. or we use it in a lot of places.
Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let rows;

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
const create = (options, cb) => {

  let Model      = options['model'];
  let table_name = options['table_name'];
  let database   = options['database'];
  let data       = options['data'];
  // rows           = options['rows'];

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }

    Model.create(options['rows'], cb);

  });

  // debug('model created!'); // @TODO

};

// const get = ( ) => {
//   return rows;
// }

// @TODO use this version, it's very many huge fresh
// array_ids - where we get data from
// collection - where we put our data
// attribute - key at collection
const attach = (array_ids, collection, attribute) => {
    console.log(array_ids);
     var arrayWithIds = idsOnly(array_ids);
     console.log(arrayWithIds);
     // if attribute is string then use it. if attribute is array with count 1 - use it
     // if attribute have more elements - we need to pick stuff.
     collection.forEach(function(item){
          item.updateAttribute(attribute, arrayWithIds);
     });

     console.log(collection);
     console.log(attribute);
     debug('attach attached!'); // @TODO
};


module.exports = {
  idsOnly : idsOnly,
  create  : create,
  attach  : attach,
  // get     : get
};
