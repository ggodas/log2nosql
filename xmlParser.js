/**
 * New node file
 */

var xml2js = require('xml2js');


var parser = new xml2js.Parser();

exports.parseFromlog4jXml = function(data){
	var formatedModel = undefined;
	 parser.parseString(data, function (err, result) {
			var event = result["log4j:event"];
			var properties = result["log4j:event"]['log4j:properties'][0]['log4j:data'];

			var propList = new Array();

			for(var count in properties){
					var prop = {
						name : properties[count]['$'].name,
						value : properties[count]['$'].value
					};
					propList[count] = prop;
			}

			formatedModel = {
				logger : event['$'].logger,
				timestamp :	event['$'].timestamp,
				level : event['$'].level,
				thread : event['$'].thread,
				//throwable :	 event["log4j:throwable"].length > 0 ? event["log4j:throwable"][0] : '',
				message : event["log4j:message"][0],
				properties : propList
			};
		});
	 return formatedModel;
	
};