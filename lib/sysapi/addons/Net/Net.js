var Addon, net;

net = require('net');

Addon = {
  net: {
    isIP: function(input) {
      return net.isIP(input);
    },
    isIPv4: function(input) {
      return net.isIPv4(input);
    },
    isIPv6: function(input) {
      return net.isIPv6(input);
    }
  }
};

module.exports = Addon;