var API, AddonHelper, Fs, Net, Os, bcrypt, restify,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

restify = require('restify');

bcrypt = require('bcrypt');

AddonHelper = require('./AddonHelper');

Fs = require('./addons/Fs/Fs');

Os = require('./addons/Os/Os');

Net = require('./addons/Net/Net');

API = (function(superClass) {
  extend(API, superClass);

  API.include(Fs);

  API.include(Os);

  API.include(Net);

  function API(options) {
    this.server = new restify.createServer(options);
  }

  API.prototype.connect = function(port) {
    return this.server.listen(port, function() {
      return console.log('API listening on port %d', port);
    });
  };

  API.prototype.auth = function(options) {
    var users;
    options = options || {
      enabled: false
    };
    if (options.enabled === true) {
      this.server.use(restify.authorizationParser());
      if (options.method === 'basic' || options.hasOwnProperty('users')) {
        users = options.users;
        return this.server.use(function(req, res, next) {
          var _hash;
          if (req.username === 'anonymous' || !users[req.username]) {
            next(new restify.NotAuthorizedError());
          }
          if (options.bcrypt === true) {
            _hash = req.authorization.basic.password.replace('$2y$', '$2a$');
            return bcrypt.compare(users[req.username].password, _hash, function(err, valid) {
              if (valid === true) {
                return next();
              } else {
                return next(new restify.NotAuthorizedError());
              }
            });
          } else {
            if (req.authorization.basic.password === users[req.username].password) {
              return next();
            } else {
              return next(new restify.NotAuthorizedError());
            }
          }
        });
      }
    }
  };

  API.prototype.cors = function(options) {
    options = options || {
      enabled: false
    };
    if (options.enabled === true) {
      return this.server.use(restify.CORS(options.settings));
    }
  };

  API.prototype.bodyParser = function(options) {
    options = options || {
      enabled: false
    };
    if (options.enabled === true) {
      return this.server.use(restify.bodyParser(options.settings));
    }
  };

  API.prototype.error = restify.errors;

  API.prototype.head = function() {
    var handlers, path;
    path = arguments[0], handlers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return this.server.head(path, handlers);
  };

  API.prototype.get = function() {
    var handlers, path;
    path = arguments[0], handlers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return this.server.get(path, handlers);
  };

  API.prototype.post = function() {
    var handlers, path;
    path = arguments[0], handlers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return this.server.post(path, handlers);
  };

  API.prototype.response = function(req, res, next, x) {
    res.send({
      data: x
    });
    return next();
  };

  return API;

})(AddonHelper);

module.exports = API;