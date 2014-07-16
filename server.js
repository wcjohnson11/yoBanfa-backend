//Main Server File

//Require dependencies
var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

//connect to our mongoDB database, uncomment after filling out config/env
mongoose.connect(config.mongo.uri, config.mongo.options);


//populate DB with sample data
if(config.seedDB) { require('./config/seed'); }


//Initialize and set up server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

//Start server
server.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});



//Expose app

exports = module.exports.app;





