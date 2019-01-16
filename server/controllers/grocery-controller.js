'use strict';


const path    = require('path');

let app       = require(path.resolve(__dirname, '../server'));

const async   = require('async');
const _       = require('underscore');

let middlewarez = require(path.resolve(__dirname, '../like-middleware-helper'));
// :todo check copy and above function. I think they return a same values
let copy_middlewarez = require(path.resolve(__dirname, '../ultimate-middleware'));
// :todo bad name, change it
let dropdown_departments = require(path.resolve(__dirname, '../grocery-middleware'));

const Grocery = app.models.Grocery;
const User    = app.models.user;

const Raven = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();



exports.changeName = async (req, res, next) => {

    // var Grocery   = app.models.Grocery;
    var groceryId = req.params.groceryId;

    let grocery
    try {

      grocery = await Grocery.findById(groceryId);
    } catch (e) {
       Raven.captureException(e);
        //this will eventually be handled by your error handling middleware
        next(e)
    }

    var renderObject = {
      user        : req.user,
      name: 'Change Grocery list name: ' + grocery.name,

      // departments : response.data,
      // description : d.desc,
      groceryId   : grocery.id
    };
    // console.log(grocery)

    res.render('pages/change-grocery-list-name', renderObject);

};

// :todo duplicated stuff
exports.postUpdateName = (req, res, next) => {
	var groceryId = req.body.groceryId;
  var name      = req.body.name;
  var Grocery   = app.models.Grocery;

  Grocery.findById(groceryId, {}, function(err, model){
    model.updateAttribute('name', name);
    res.redirect('/auth/account');
  });
};

exports.cloneGrocery = async (req, res, next) => {
    var userId    = req.user.id;
    var groceryId = req.params.groceryId;

    let grocery
    try {
      grocery = await Grocery.findById(groceryId, Grocery.queryNotHidden());

    } catch (e) {
       Raven.captureException(e);
      //this will eventually be handled by your error handling middleware
      next(e)
    }

    let cloned
    try {
      var newObject = Grocery.getObjectForClone(grocery);
      cloned = await Grocery.create(newObject);

    } catch (e) {
       Raven.captureException(e);
      //this will eventually be handled by your error handling middleware
      next(e)
    }

    var options = {
      type  : 'attach',
      field : 'groceryIds',
      userId: userId,
      secondArray: [ cloned.id ]
    };
    User.proceed(options);

    res.redirect('/afterclone');
};

//:todo #182
exports.getCloneForm = async (req, res, next) => {
  var groceryId = req.body.groceryId;
  var ultimate  = await middlewarez(next);

  var renderObject = {
    user: req.user,
    title: "Clone Ultimate template and have your own list",

    groceryId : groceryId,
    ultimate  : ultimate
  };

  // console.log(renderObject)


  res.render('pages/grocery/clone-form-page', renderObject);
};

exports.postCloneForm = async (req, res, next) => {

  var groceryId = req.body.groceryId;
  var userId    = req.body.userId;
  var name      = req.body.name;
  var Grocery   = app.models.Grocery;

  // Grocery.findById(groceryId, {}, function(err, model){
  //   model.updateAttribute('name', name);
  //   // res.redirect('/auth/account');
  // });
    let grocery
    try {
      grocery = await Grocery.findById(groceryId, Grocery.queryNotHidden());

    } catch (e) {
       Raven.captureException(e);
        //this will eventually be handled by your error handling middleware
        next(e)
    }

    let cloned
    try {
      var newObject = Grocery.getObjectForClone(grocery);
      // console.log(newObject);
      newObject.name = name;
      cloned = await Grocery.create(newObject);
      // console.log(cloned);
      // console.log(userId)
    } catch (e) {
       Raven.captureException(e);
        //this will eventually be handled by your error handling middleware
        next(e)
    }

    var options = {
      type  : 'attach',
      field : 'groceryIds',
      userId: userId,
      secondArray: [ cloned.id ]
    };
    User.proceed(options);

    res.redirect('/afterclone');


  // res.redirect('/afterclone');
};

exports.justRedirect = (req, res, next) => {
  res.redirect('/auth/account');
};

exports.createNewGrocery = (req, res, next) => {
    // console.log( req.user.id );
    var Grocery = app.models.Grocery;
    var data = {
      title: data.title,
      desc:  data.desc,
      slug:  '',
      img :  '',
      // departmentIds: [], // not sure if we need this
      // hideThisIds:   [],
    }
    Grocery.createnew(req.user.id, data, function(){});
    // res.redirect('/');
};


exports.removeGrocery = (req, res, next) => {

  var groceryId = req.params.groceryId;
  var userId    = req.user.id;

  var Grocery   = app.models.Grocery;
  var User   = app.models.user;

  // this is a duplicated function from Grocery :todo think about it, real talk
  var options = {
    type  : 'detach',
    field : 'groceryIds',
    userId: userId,
    secondArray: [ groceryId ]
  };
  User.proceed(options);

  Grocery.destroyById(groceryId, function(err){});
  res.redirect('/auth/account');

};

exports.viewGrocery = async (req, res, next) => {

  var groceryId  = req.params.groceryId;

  var ultimate   = await middlewarez(next);

  var response   = {};



  let grocery
  try {
     var Grocery   = app.models.Grocery;

     // :todo this is not an awesome method. we're getting to much data by this query
     grocery  = await Grocery.findById(groceryId, Grocery.query1());

     // :todo this is not a best way to catch only departments name(main goal)
     // we can create another method, where we wouldn't have arraysfor ingredients and other stuff
     response = Grocery.convertCollectionData(grocery);


  } catch (e) {
     Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }

  var renderObject = {
    user: req.user,
    name: response.name,

    groceryId: groceryId,

    messages: {},

    departments: response.data, // [data>> department >> ingredient]

    title: "Grocery list " + response.name,

    ultimate: ultimate,

    isGrocery: req.originalUrl.includes('/view/grocery/'),



  };

  res.render('pages/grocery/view-grocery-new', renderObject);

};


exports.viewUltimateGrocery = async (req, res, next) => {
  // var groceryId     = req.params.groceryId;
  var Grocery       = app.models.Grocery;
  var ultimate    = await copy_middlewarez(next);
  // console.log(ultimateId);

  // we'll need to update this method, because we're has a different set of urls, related to delete of ingredients from shopplist
  // but we'll deal with it later.........
  var response = await dropdown_departments(ultimate.id, next);

  var renderObject = {
    user: req.user,
    name: response.name,

    groceryId: ultimate.id,

    messages: {},

    departments: response.data, // [data>> department >> ingredient]

    // title: "Grocery list " + response.name,

    ultimate: ultimate,

    // isGrocery: req.originalUrl.includes('/view/ultimategrocery/'),
   // isMobile: (md.mobile()) ? true : false

  };
  // // this is a duplicated template
  // res.render('pages/grocery/view-ultimate-grocery', renderObject);

  res.json( renderObject )

};



exports.shopping = async (req, res, next) => {
  var groceryId    = req.params.groceryId;
  var departmentId = req.params.departmentId;

  // var ultimate    = await copy_middlewarez(next);
  // This part is work for creating dropdown list only
  var fullGroceryUrl = req.protocol + '://' + req.get('host') + '/view/grocery/' + groceryId;

  var response = await dropdown_departments(groceryId, next);


  // :todo check my notes here, and then we'll be able to delete it
//---------------------------
  // This part is work for creating dropdown list only
  // var response     = {};
  // let grocery
  // try {
  //    var Grocery   = app.models.Grocery;

  //    // :todo this is not an awesome method. we're getting to much data by this query
  //    // :todo we're using more efficient method, but it must be tested better
  //    grocery  = await Grocery.findById(groceryId, Grocery.queryDepartmentsOnly());
  //    // console.log(grocery);
  //    // :todo this is not a best way to catch only departments name(main goal)
  //    // we can create another method, where we wouldn't have arraysfor ingredients and other stuff
  //    response = Grocery.convertCollectionDataEfficient(grocery);
  //    // console.log(response.data);
  //    console.log(response);
  // } catch (e) {
  //    Raven.captureException(e);
  //   //this will eventually be handled by your error handling middleware
  //   next(e)
  // }

//--------------------


  // I think this is can be improved
  // this is a duplicated code
  let grocery2
  let ingredients
  try {
     var Grocery   = app.models.Grocery;

     grocery2  = await Grocery.findById(groceryId,
                    Grocery.queryOneDepartment(departmentId)
                  );
     ingredients = Grocery.convertDepartmentItems(grocery2);

  } catch (e) {
     Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }


  // This is another bad functionality, written for this method.
  let ultimate = await middlewarez(next);


  var all = ingredients.length
  var count_not_purchased = _.where(ingredients, {completed: false}).length;
  var display_destroy_all_button = all - count_not_purchased;



  let renderObject = {
    user        : req.user,
    url         : req.url,
    groceryId   : groceryId,
    departmentId: departmentId,
    name        : response.name,
    departments : response.data,

    list        : ingredients,

    isUltimate  : (ultimate.id == groceryId) ? 1 : 0,

    back: req.originalUrl.includes('/shopping/') ? fullGroceryUrl : req.get('Referrer'), // :todo very long long long line, we need to make this better.

    activeTodoCount: count_not_purchased,

    text: '',
    have_completed_items: display_destroy_all_button,


  };

  res.render('pages/shopping/shopping-list-mobile', renderObject);



};


// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}
