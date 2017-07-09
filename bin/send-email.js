// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-example-app-logic
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// var dsConfig = require('../server/datasources.json');
var app = require('../server/server.js');

// if (process.env.CI) {
//   console.log('skipping sending email from CI');
// }

var yourEmailAddress = 'arthur.tkachenko.netweight@gmail.com';
// var yourEmailAddress = dsConfig.emailDs.transports[0].auth.user;

app.models.email.send({
  to: yourEmailAddress,  // your email address
  // to: null,  // your email address
  from: 'no-reply@github.com', // your email address
  // from: null, // your email address
  subject: 'The email subject',
  text: '<strong>HTML</strong> tags are not converted'
  //html: '<strong>HTML</strong> tags are converted'
}, function(err) {
  if (err) throw err;
  console.log('> email sent successfully');
});

// loopback.email.send({
//     to: "to@to.com",
//     from: "fron@from.com",
//     subject: "subject",
//     text: "text message",
//     html: "html <b>message</b>",
//     attachments : [
//     	path.resolve('../client/images/an-image.jpg')
// 	],
//     var : {
//         myVar1 : 'a custom value'
//     },
//     headers : {
//         "X-My-Header" : "My Custom header"
//     }
// })
// .then(function(response){})
// .catch(function(err){});