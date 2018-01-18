var Habitat = require('habitat');
Habitat.load();

var express = require('express'),
    path = require('path'),
    url = require('url'),
    compression = require('compression'),
    helmet = require('helmet'),
    frameguard = helmet.frameguard,
    reactRouted = require('./dist/lib/react-server-route.js'),
    locationParser = require('./dist/lib/location-parser.js'),
    bodyParser = require('body-parser');
    env = new Habitat(),
    routes = require('./routes'),
    app = express();

const CSP_DIRECTIVES = require('./scripts/csp-directives.js');

app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.use(frameguard({
  action: "allow-from",
  domain: "https://pontoon.mozilla.org"
}));

app.use(helmet.csp(CSP_DIRECTIVES));

app.use(helmet.hsts({
  maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
}));


// Redirect to SSL if set
app.use(function(req, resp, next){
  if (!req.secure && env.get('FORCE_SSL')){
    if (req.method === "GET") {
      resp.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    }
    else{
      resp.status(403).send("Please use HTTPS when submitting data to this server.");
    }
  }
  else{
    next();
  }
});

app.post('/api/signup/basket', routes.signup);
app.post('/api/petition/sheets', routes.petitionSheets);
app.post('/api/fcc-comment/sheets', routes.fccCommentSheets);
app.post('/api/call', routes.call);

app.use(reactRouted);
app.use(express.static(__dirname + '/public', {maxAge: 3600000}));

/**
 * We need to make sure that resources are presented to the
 * user in the appropriate locale, so any requests without
 * a locale should first be locale-enriched based on the
 * request headers we receive from the client.
 */
function routeBasedOnLocale(req, res, next) {
  var location = url.parse(req.url).pathname;
  var search = url.parse(req.url).search || "";

  // Get a valid locale from the path and header
  var parsed = locationParser(req.headers["accept-language"], location);
  var parsedLocale = parsed.locale;
  var parsedRedirect = parsed.redirect;

  // See if we should redirect.
  if (parsedRedirect) {
    let newUrl = "/" + parsedLocale + parsedRedirect + search;
    if (newUrl === req.url) {
      console.warn("Received meaningless redirect: new URL is identical to original URL. Skipping to next()");
      next();
    } else {
      res.redirect(301, newUrl);
    }
  } else {
    next();
  }
}

app.use(routeBasedOnLocale);

/**
 * A general purpose last-ditch error handler:
 * just present the user with the error so
 * that they can report it to us.
 */
function errorHandler(err, req, res, next) {
  res.send(err);
}

app.use(errorHandler);

app.listen(env.get('PORT'), function () {
  console.log('Server listening ( http://localhost:%d )', env.get('PORT'));
});
