/**
 * New node file
 */

var mongodb = require('mongodb');


exports.save = function(model){
	    var server = new mongodb.Server("monaco", 27017, {});
	    new mongodb.Db('ApplicationLog', server, {w: 1}).open(function (error, client) {
	      if (error) throw error;
	      var collection = new mongodb.Collection(client, 'Logs');
	      collection.insert(model, {safe:true},
	        function(err, objects) {
				if (err) console.warn(err.message);
				if (err && err.message.indexOf('E11000 ') !== -1) {
	        }
	      });
	    });
	
};