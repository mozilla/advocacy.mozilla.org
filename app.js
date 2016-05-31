var express = require('express'),
    Habitat = require('habitat'),
    path = require('path'),
    compression = require('compression'),
    helmet = require('helmet'),
    frameguard = helmet.frameguard,
    reactRouted = require('./dist/lib/react-server-route.js'),
    getLocale = require('./dist/lib/get-locale.js');

Habitat.load();

var app = express(),
  env = new Habitat();

app.set('trust proxy', true);

app.use(compression());
app.use(helmet());
app.use(frameguard({
  action: "allow-from",
  domain: "https://app.optimizely.com"
}));
app.use(helmet.csp({
  directives:{
    scriptSrc: ["'self'","'unsafe-inline'","data:", "https://cdn.optimizely.com", "https://app.optimizely.com", "https://basket.mozilla.org", "https://basket-dev.allizom.org","https://*.shpg.org/", "https://www.google-analytics.com/", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
    connectSrc:["'self'", "206878104.log.optimizely.com", "https://basket.mozilla.org/", "https://basket-dev.allizom.org", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
    childSrc:["'self'", "https://app.optimizely.com", "https://facebook.com", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
    frameSrc: ["'self'", "https://app.optimizely.com", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
    imgSrc:["'self'","data:", "https://www.google-analytics.com", "https://pontoon.mozilla.org","https://*.shpg.org/",
          "https://cdn.optimizely.com", 'https://pontoon.mozilla.org', 'https://mozilla-pontoon-staging.herokuapp.com'],
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

app.use(reactRouted);
app.use(express.static(__dirname + '/public', {maxAge: 3600000}));
app.use(function(req, res, next) {
  var firstPath = req.url.split("/")[1];
  var search = req.search || "";
  // Get a valid locale from the path and header
  var locale = getLocale(req.headers["accept-language"], firstPath);
  // Compare the best valid locale to the path,
  // if they don't match, redirect.
  if (firstPath !== locale) {
    res.redirect(301, "/" + locale + req.url + search);
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
