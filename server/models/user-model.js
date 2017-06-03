'use strict';

module.exports = function(Usermodel) {

  Usermodel.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  
  Usermodel.validatesUniquenessOf('email', {message: 'email is not unique'});
// Usermodel.validatesNumericalityOf('start', {int: true});

  Usermodel.observe("before save", function updateTimestamp(ctx, next) {
 
    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 
    	
    	next();
  });

  Usermodel.observe('update', function(ctx, next){
  	ctx.instance.updated_at = new Date();
  	next();
  });

  Usermodel.log = function(userId, options) {
    
    // IMPORTANT: forward the options arg
    return Usermodel.findById(userId, null, options)
              .then(function(data){
                const token = options && options.accessToken;
                const userId = token && token.userId;
                const user = userId ? 'user#' + userId : '<anonymous>';     

                console.log('(%s) %s', user, msg.text);
                // console.log(options);
                // console.log(options.accessToken);
              });

  };

  Usermodel.remoteMethod('log', {
    accepts: [{
      arg: 'userId',
      type: 'string',
      required: true
    },
    {
      arg: 'options',
      type: 'object',
      http: 'optionsFromRequest'
    }],
    http: {
      path: '/log/:userId',
      verb: 'post'
    }
  });

  // method list attached menus
  // attachMenusToUserObject
  Usermodel.attach = function(cb){
    Usermodel.fin
  };

  Usermodel.getMenuId = function(userId, cb){
    return Usermodel.findOne(userId, { fields:'menu' }, cb);
  }
  Usermodel.remoteMethod('getMenuId', {
    description: '',
    accepts: {
      arg: 'userId',
      type: 'string'
    },
    returns: {
      arg: 'arrayIds',
      type: 'array'
    },
    http: {
      path: '/get/menus/id',
      verb: 'get'
    }
  });

  Usermodel.listMenu = function(userId, cb){

    Usermodel.getMenuId(userId, function(err, menusArray){
      Menumodel.find({where:{id:menusArray}},function(err, menus){
        console.log( menus ) ;
        // cb(menus)
      });
    });

    // VideoModel.find({}, cb);
  };

  Usermodel.remoteMethod('listMenu', {
    description: '',
    accepts: {
      arg: 'userId',
      type: 'string'
    },
    returns: {
      arg: 'menus', type: 'array'
    },
    http: {
      path: '/list-menu', verb: 'get'
    }
  });

  // VideoModel.listVideosByUser = function(userId, cb){
  //   var UserModel = VideoModel.app.models.UserModel;

  //   UserModel.exists(userId, function(err, user){
  //     if(err){ cb(err); }

  //     VideoModel.find({
  //       where: {
  //         userId: userId
  //       },
  //       fields: [
  //         'title', 'url', 'desc',
  //         'start', 'end', 'step'
  //       ]       
        
  //     }, cb);
  //   });

  // };

  // VideoModel.remoteMethod('listVideosByUser', {
  //   accepts: {
  //     arg: 'id',
  //     type: 'string'
  //   },
  //   returns: {
  //     arg: 'videos',
  //     type: 'array'
  //   },
  //   http: {
  //     path: '/view-videos',
  //     verb: 'get'
  //   }
  // });


};
