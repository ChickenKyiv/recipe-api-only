'use strict';

var _    = require('underscore');
var path = require('path');

// var iterator = require(path.join(__dirname + '/../like-middleware-helper'));

module.exports = function(User) {

    User.withGroceries  = function(userId, cb) {
        User.findById(userId, {
        include: {
             relation: 'groceries',
             scope: {
                 // where: {
                 //     id: groceryId
                 // },
                 // include: {
                 //     relation: 'departmentsList',
                 // }
             }
        }
        }, cb);
    };


    User.withAdmin = function(cb) {
        User.findOne(User.queryAdmin(), cb);
    };


    User.withAdminAndUltimate = function(cb) {
        User.findOne(User.queryUltimateAdmin(), cb);
    };


    User.queryUltimateAdmin = function() {
        return {
            where: {
                name: 'admin'
            },
            include: {
                 relation: 'groceries',
                 scope: {
                     where: {
                        name: "Ultimate Grocery List"
                     },
                     fields: [ 'id', 'name' ],
                 }
            }
        };
    };


    User.queryAdmin = function() {
        return {
            where: {
                name: 'admin'
            },
            include: {
                 relation: 'groceries'
                 // scope: {

                 // }
            }
        };
    };

};
