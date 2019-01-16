'use strict';


const path      = require('path');
// var validator = require('express-validator');

let app    = require(path.resolve(__dirname, '../server'));


let middlewarez = require(path.resolve(__dirname, '../like-middleware-helper'));

const Raven = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();




exports.getHomepage = async (req, res, next) => {

      var ultimateGL = {};

      var ultimateGL2 = await middlewarez(next);

      let admin
      try {

        var User = app.models.user;
        // var groceryId = req.params.groceryId;  

        // this is a duplicated code. :todo
        admin    = await User.findOne(User.queryUltimateAdmin());

        var json     = admin.toJSON();
        var ultimate = json.groceries[0];
        ultimateGL = {
          id: ultimate.id,
          name: ultimate.name
        };

        // console.log(data);

        res.render('pages/static/landing', {
          user: req.user,
          url : req.url,
          
          title: "Online Grocery Lists", //:todo

          ultimate: ultimateGL
          
        });

        
      } catch (e) {
         Raven.captureException(e);
        //this will eventually be handled by your error handling middleware
        next(e) 
      }

	

};
