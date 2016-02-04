require("babel-register")();

var React = require('react'),
  ReactDOM = require('react-dom/server');

var index = React.createFactory(require('../pages/encrypt/index.jsx'));
var encryptRoutes = require('../encrypt-main.jsx');

function removeTrailingSlash(path) {
  return path.replace(/\/$/, "");
}

function match(path, routes) {
  return encryptRoutes.routes.find(function(i) {
    return i.path === removeTrailingSlash(path);
  });
}

module.exports = function(req, res) {
  var moduleDetectRegEx = new RegExp('.jsx');
  var matchPath = match(req.path);
  var component;
  if (matchPath) {
    component = require(matchPath.pathToFile);

    if (process.env.NPM_CONFIG_PRODUCTION !== 'true') {console.log('here');
      // Remove all files from the module cache that are in the view folder.
      Object.keys(require.cache).forEach(function(module) {
        if (moduleDetectRegEx.test(require.cache[module].filename)) {
          console.log('Clear cache file for: ', require.cache[module].filename);
          delete require.cache[module];
        }
      });
    }
    return res.status(200).send(ReactDOM.renderToString(index({
      markup: ReactDOM.renderToString(React.createFactory(component)())
    })));
  }
  res.redirect(encryptRoutes.notFoundRedirect);
};
