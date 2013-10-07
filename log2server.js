var dgram = require("dgram");
var xml2js = require('xml2js');
var mongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var xmlParser = require('./xmlParser');

var parser = new xml2js.Parser();

var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
	//console.warn(msg);
	  var logMessageModel = xmlParser.parseFromlog4jXml(msg);
	  console.warn(logMessageModel);
	  insertToDatabase(logMessageModel);
	  
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});


server.bind(43278);


function insertToDatabase(data){

  var mongodb = require('mongodb');
    var server = new mongodb.Server("monaco", 27017, {});
    new mongodb.Db('ApplicationLog', server, {w: 1}).open(function (error, client) {
      if (error) throw error;
      var collection = new mongodb.Collection(client, 'Logs');
      collection.insert(data, {safe:true},
        function(err, objects) {
			if (err) console.warn(err.message);
			if (err && err.message.indexOf('E11000 ') !== -1) {
			  // this _id was already inserted in the database
        }
      });
    });
}
