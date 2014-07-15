//Require dependencies
var http = require('http');
var express = require('express');

//Set the port the server will live on
var port = process.env.port || 8080;
//connect to our mongoDB database, uncomment after filling out config/db
//mongoose.connect(db.url)


//Initialize
var app = express();

//config files
var db = require('./config/db');





