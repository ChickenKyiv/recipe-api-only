'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

// frontend related part
// var bodyParser = require('body-parser');
// var path = require('path');

var app = module.exports = loopback();

// frontend related part
// app.middleware('initial', bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'ejs'); // LoopBack comes with EJS out-of-box
// app.set('view engine', 'pug');
// app.set('json spaces', 2); // format json responses for easier viewing

// must be set to serve views properly when starting the app via `lb run` from
// the project root
// app.set('views', path.resolve(__dirname, 'views'));

// in client/public we store static files right now.
// var staticDir = path.join(__dirname + '/../client/public');
// app.use(express.static(staticDir));

// use loopback.token middleware on all routes
// setup gear for authentication using cookie (access_token)
// Note: requires cookie-parser (defined in middleware.json)
// app.use(loopback.token({  
//   model: app.models.accessToken,
//   currentUserLiteral: 'me',
// }));


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

//In order to create scripts load in custom way - use this:
// bootOptions = { "appRootDir": __dirname, 
//                 "bootScripts" : [ "/full/path/to/boot/script/first.js", "//full/path/to/boot/script/second.js", ... ]
// };
// boot(app, bootOptions);

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
