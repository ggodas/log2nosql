var dgram = require("dgram");
var xmlParser = require('./xmlParser');
var modelPersistense = require('./mongoDbPersistense');
var config = require('./config');

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
	
	var mensagem = msg.toString('utf8', 0, msg.length);
	console.info(mensagem);
	  var logMessageModel = xmlParser.parseFromlog4jXml(mensagem);
	  console.info(logMessageModel);
	  modelPersistense.save(logMessageModel);
	  
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});


server.bind(config.udp.port);