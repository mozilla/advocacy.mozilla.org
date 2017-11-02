var express = require('express'),
    Habitat = require('habitat'),
    path = require('path'),
    url = require('url'),
    compression = require('compression'),
    helmet = require('helmet'),
    frameguard = helmet.frameguard,
    reactRouted = require('./dist/lib/react-server-route.js'),
    locationParser = require('./dist/lib/location-parser.js');

var bodyParser = require('body-parser');

Habitat.load();

var app = express(),
  env = new Habitat();

var routes = require('./routes');

app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.use(frameguard({
  action: "allow-from",
  domain: "https://pontoon.mozilla.org"
}));

app.use(helmet.csp({
  directives:{
    scriptSrc: ["'self'","'unsafe-inline'","'unsafe-eval'","data:", "https://cdn.optimizely.com", "http://localhost:8080", "https://mozilla-foundation-talk.herokuapp.com/embed.js", "https://app.optimizely.com", "https://basket.mozilla.org", "https://basket-dev.allizom.org","https://*.shpg.org/", "https://www.google-analytics.com/", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com', 'https://www.youtube.com', 'https://s.ytimg.com'],
    connectSrc:["'self'", "206878104.log.optimizely.com", "https://basket.mozilla.org/", "https://basket-dev.allizom.org", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
    childSrc:["'self'", "https://app.optimizely.com", "https://facebook.com", "https://mozilla-foundation-talk.herokuapp.com/embed/stream", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com', 'https://www.youtube.com'],
    imgSrc:["'self'","data:", "https://www.google-analytics.com", "https://pontoon.mozilla.org","https://*.shpg.org/", "https://img.youtube.com/",
          "https://cdn.optimizely.com", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com', 'data:'],
    frameAncestors: ["https://app.optimizely.com", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com']
  }
}));

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

app.use(reactRouted);
app.use(express.static(__dirname + '/public', {maxAge: 3600000}));
app.use(function(req, res, next) {
  var location = url.parse(req.url).pathname;
  var search = url.parse(req.url).search || "";
  // Get a valid locale from the path and header
  var parsed = locationParser(req.headers["accept-language"], location);
  var parsedLocale = parsed.locale;
  var parsedRedirect = parsed.redirect;
  // See if we should redirect.
  if (parsedRedirect) {
    res.redirect(301, "/" + parsedLocale + parsedRedirect + search);
  } else {
    next();
  }
});
app.use(function(err, req, res, next) {
  res.send(err);
});

app.listen(env.get('PORT'), function () {
  console.log('Server listening ( http://localhost:%d )', env.get('PORT'));
});
