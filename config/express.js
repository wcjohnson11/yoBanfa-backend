// Express NPM & File System Requires
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var passport = require('passport');

// Export the app after setup
module.exports = function(app) {
  var env = app.get('env');

  // Connect middleware
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(morgan);
  app.use(errorHandler());
  //app.set(????)

};
