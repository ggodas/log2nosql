/**
 * New node file
 */

var config = {};

config.mongodb = {};
config.mongodb.server = '127.0.0.1'; //mongoserver
config.mongodb.port = 27017; //mongoserverport
config.mongodb.databaseName = 'ApplicationLog';
config.mongodb.collectionName = 'Logs';

config.udp = {};
config.udp.port = 43278;


module.exports = config;