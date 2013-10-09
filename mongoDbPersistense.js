/**
 * New node file
 */

var mongodb = require('mongodb');
var config = require('./config');


exports.save = function(model){
    var server = new mongodb.Server(config.mongodb.server, config.mongodb.port, {});
    new mongodb.Db(config.mongodb.databaseName, server, {w: 1}).open(function (error, client) {
      if (error) console.error(error);
      var collection = new mongodb.Collection(client, config.mongodb.collectionName);
      collection.insert(
				model, 
				{
					safe:false
				},
				function(err, objects) {
					if (err) console.warn(err.message);
					
					if (err && err.message.indexOf('E11000 ') !== -1) {
					}
				}
	);
    });
};