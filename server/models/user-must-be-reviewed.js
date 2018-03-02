'use strict';

module.exports = function(user) {

  

  user.log = function(userId, options) {
    
    // IMPORTANT: forward the options arg
    return UserModel.findById(userId, null, options)
              .then(function(data){
                const token = options && options.accessToken;
                const userId = token && token.userId;
                const user = userId ? 'user#' + userId : '<anonymous>';     

                console.log('(%s) %s', user, msg.text);
                // console.log(options);
                // console.log(options.accessToken);
              });

  };

  user.remoteMethod('log', {
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
  // user.attach = function(cb){
  //   Usermodel.find({},function(){});
  // };

  user.getMenuId = function(userId, cb){
    return user.findOne(userId, { fields:'menus' }, cb);
  };

  user.remoteMethod('getMenuId', {
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

  user.listMenu = function(userId, cb){
    var Menu = user.app.models.Menu;
    user.getMenuId(userId, function(err, menusArray){
      Menu.find({where:{id:menusArray}},function(err, menus){
        console.log( menus ) ;
        // cb(menus)
      });
    });

   
  };

  user.remoteMethod('listMenu', {
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

  // @TODO finish and test how this method works
  user.updateSubscription = function(userId, subscription){

    user.findById(userId)
      .then(function(userInstance){

        userInstance.subscription(subscription);
        if(true){

          user.app.models.email.send({
            to     : userInstance.email,
            from   : userInstance.email, // @TODO i think this is not a good way to todo
            subject: 'Subscription was updated',
            html   :html
          }, function(err){
            if (err) return console.log('> user subscription was not updated');
            console.log('> updated subscription for ', userInstance.name);
          });  

        }

      });

  };

  // UserModel.validatesPresenceOf('username');
  // UserModel.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});

  // @TODO finish this 
  // var re = /^(([^<>()[\]\\.,;:\s@\"]-(\.[^<>()[\]\\.,;:\s@\"]-)*)|(\".-\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]-\.)-[a-zA-Z]{2,}))$/;

  // UserModel.validatesFormatOf('email', {with: re, message: 'Must provide a valid email'});
  // if (!(UserModel.settings.realmRequired || UserModel.settings.realmDelimiter)) {
  //   UserModel.validatesUniquenessOf('email', {message: 'Email already exists'});
  //   UserModel.validatesUniquenessOf('username', {message: 'User already exists'});
  // }



  user.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  
  user.validatesUniquenessOf('email', {message: 'email is not unique'});
// Usermodel.validatesNumericalityOf('start', {int: true});

  user.afterRemote("create", function(ctx, userInstance, next){

    console.log('> user.afterRemote triggered');

    var emailOptions = {

      type    : 'email',
      to      : userInstance.email,
      from    : 'noreply@github.com',
      subject : 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/account/verify.pug'),
      redirect: '/verified',
      user: user
    };

    userInstance.verify(options, function(err, response, next){

      if (err) {
        user.deleteById(userInstance.id);
        return next(err);
      }

      ctx.res.render('account/response', {        
        title  : 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
        'before loggin in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });


    });
next();

  });

  user.afterRemote("prototype.verify", function(ctx, userInstance, next){

    ctx.res.render('account/response',{
      title: 'A Link to reverify your identity has been sent '+
        'to your email successfully',
      content: 'Please check your email and click on the verification link '+
        'before loggin in',
      redirectTo: '/', 
      redirectToLinkText: 'Log in'
    });
    next();

  });

  user.on('resetPasswordRequest', function(info){

    var url  = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' + 
      info.accessToken.id+'">here</a> to reset your password';

    user.app.models.EmailModel.send({
      to     : info.email,
      from   : info.email,
      subject: 'Password reset',
      html   :html
    }, function(err){
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });  

  });

  user.afterRemote('changePassword', function(ctx, userInstance, next){
    context.res.render('account/response', {
      title      : 'Password changed successfully',
      content    : 'Please login again with new password',
      redirectTo : '/',
      redirectToLinkText: 'Log in'
    });
    next();
  });

  user.afterRemote('setPassword', function(ctx, userInstance, next){
    ctx.res.render('account/response', {
      title      : 'Password reset success',
      content    : 'Your password has been reset successfully',
      redirectTo : '/',
      redirectToLinkText: 'Log in'
    });
    next();
  });

  user.observe("before save", function updateTimestamp(ctx, next) {
 
      if( ctx.isNewInstance ){
        ctx.instance.created_at = new Date();
        ctx.instance.updated_at = new Date();
      } 
      
      next();
  });

  user.observe('update', function(ctx, next){
    ctx.instance.updated_at = new Date();
    next();
  });





};
