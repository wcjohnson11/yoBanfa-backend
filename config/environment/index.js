// Require dependencies
var path = require('path');
var _ = require('lodash');

// Declare all options
var all = {
  // Setting the environment
  env: process.env.NODE_ENV,

  // root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/banfa',

    options: {
	// Write Concern, all writes to server must be round trip
      db: {
		safe: true
      }
    }
  },

  // Are we going to plant our DB seeds?
  seedDB: true,

  // We'll want to set this as an environmental var****
  secrets: {
    session: 'ybb'
  },

  // List of user roles
  userRoles: ['user', 'admin'],


  // Set facebook env.id's
  facebook: {
	clientID:      process.env.FACEBOOK_ID || 'id',
	clientSecret:  process.env.FACEBOOK_SECRET || 'secret',
	callbackURL:  'http://localhost:9000/auth/facebook/callback'
  },
};


//Export the config object based on the NODE_ENV
module.exports = _.merge(
all);
