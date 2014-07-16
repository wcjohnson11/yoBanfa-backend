// Main App Routes
module.exports = function(app) {

  //routes live here
  app.use('/api/cards', require('./api/cards/index.js'));
  app.use('/api/games', require('./api/games/game.routes.js'));
  app.use('/api/users', require('./api/users/user.routes.js'));

  //Can't forget auth
  app.use('/auth', require('./auth'));

  //All other routes should redirect to /
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/');
    });
};