var Addon, fs, path;

fs = require('fs');

path = require('path');

Addon = {
  fs: {
    readFile: function(path, cb) {
      return fs.readFile(path, 'utf8', function(err, data) {
        return cb(err, data);
      });
    }
  }
};

module.exports = Addon;