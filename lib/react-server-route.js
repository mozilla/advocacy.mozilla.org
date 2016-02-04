require("babel-register")();

var React = require('react'),
  ReactDOM = require('react-dom/server');

var index = React.createFactory(require('../pages/encrypt/index.jsx'));
var encryptRoutes = require('../encrypt-main.jsx');

function removeTrailingSlash(path) {
  return path.replace(/\/$/, "");
}

function match(path) {
  return encryptRoutes.routes.find(function(i) {
    return i.path === removeTrailingSlash(path);
  });
}

module.exports = function(req, res) {
  var matchPath = match(req.path);
  if (matchPath) {
    var component = require(matchPath.pathToFile);
    if (process.env.NPM_CONFIG_PRODUCTION !== 'true') {
      delete require.cache[require.resolve(matchPath.pathToFile)];
      component = require(matchPath.pathToFile);
    }
    return res.status(200).send(ReactDOM.renderToString(index({
      markup: ReactDOM.renderToString(React.createFactory(component)())
    })));
  }
  res.redirect(encryptRoutes.notFoundRedirect);
};
