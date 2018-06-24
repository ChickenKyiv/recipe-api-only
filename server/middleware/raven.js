const Raven = require("raven");
Raven.config(`https://${process.env.LOOPBACK_APP_SENTRY_KEY}@sentry.io/${process.env.LOOPBACK_APP_SENTRY_APP}`).install();

 module.exports = function () {
     return function raven(err, req, res, next) {
        if(err) {
            console.log(`Raven reached: ${err}`);
            Raven.captureException(err);
        }
        next();
     }
 }