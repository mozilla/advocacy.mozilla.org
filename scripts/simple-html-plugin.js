var async = require('async');
var routeFileContent = require('../lib/react-server-route.js');

function SimpleHtmlPrecompiler(paths) {
  this.paths = paths;
}

SimpleHtmlPrecompiler.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('after-emit', function(compilation, done) {
    async.map(self.paths, routeFileContent, function(error, results) {
      if (error) {
        compilation.errors.push(error);
      }
      done();
    });
  });
};

module.exports = SimpleHtmlPrecompiler;
