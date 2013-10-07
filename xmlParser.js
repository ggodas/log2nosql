/**
 * New node file
 */

exports.parseFromlog4jXml = function(data){
	 return parser.parseString(data, function (err, result) {
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

			var formatedModel = {
				logger : event['$'].logger,
				timestamp :	event['$'].timestamp,
				level : event['$'].level,
				thread : event['$'].thread,
				throwable :	event["log4j:throwable"][0],
				message : event["log4j:message"][0],
				properties : propList
			};

			console.dir(formatedModel);
			return formatedModel;
		});
	
};