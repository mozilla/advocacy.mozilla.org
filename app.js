require(`babel-core/register`);

var express = require('express'),
    Habitat = require('habitat'),
    path = require('path'),
    compression = require('compression'),
    helmet = require('helmet'),
    frameguard = helmet.frameguard,
    reactRouted = require('./lib/react-server-route.jsx');

Habitat.load();

var app = express(),
  env = new Habitat(),
  OPTIMIZELY_ID = env.get('OPTIMIZELY_ID'),
  OptimizelyClient = require('optimizely-node-client'),
  optimizely = new OptimizelyClient(env.get('OPTIMIZELY_TOKEN'));

app.set('trust proxy', true);

app.use( '/optimizely-experiments.js', function( req, res ) {
  optimizely.getExperiments(OPTIMIZELY_ID).then(function(experiments) {
    var experimentPromises = [];
    var experimentData = {};
    experimentPromises.push(new Promise(function(resolve) {
      var variationsPromises = [];
      experiments.forEach(function(experiment) {
        experimentData[experiment.id] = {};
        experiment.variation_ids.forEach(function(variationId) {
          variationsPromises.push(optimizely.getVariation({id: variationId}).then(function(variation) {
            if (variation.js_component) {
              experimentData[experiment.id][variation.id] = variation.js_component;
            }
          }));
        });
      });

      Promise.all(variationsPromises).then(resolve);
    }));

    function insertComma(index, arr) {
      if (index < arr.length-1) {
        return ","
      }
      return "";
    }

    Promise.all(experimentPromises).then(function() {
      var jsComponents = "window.optimizelyExperimentData = {\n";
      Object.keys(experimentData).forEach(function(experiment, index, arr) {
        jsComponents += "  \"" + experiment + "\": {\n";
        Object.keys(experimentData[experiment]).forEach(function(variation, index, arr) {
          jsComponents += "    \"" + variation + "\": function() {\n";
          jsComponents += "      " + experimentData[experiment][variation] + "\n";
          jsComponents += "    }" + insertComma(index, arr) + "\n";
        });
        jsComponents += "  }" + insertComma(index, arr) + "\n";
      });
      jsComponents += "};";
      res.status(200).type('application/javascript').send(jsComponents);
    });
  });
});

app.use(compression());
app.use(helmet());
app.use(frameguard({
  action: "allow-from",
  domain: "https://app.optimizely.com"
}));
app.use(helmet.csp({
  directives:{
    scriptSrc: ["'self'","'unsafe-inline'","data:", "https://cdn.optimizely.com", "https://app.optimizely.com", "https://basket.mozilla.org", "https://basket-dev.allizom.org","https://*.shpg.org/", "https://www.google-analytics.com/"],
    connectSrc:["'self'", "5629570640.log.optimizely.com", "https://basket.mozilla.org/", "https://basket-dev.allizom.org"],
    childSrc:["'self'", "https://app.optimizely.com", "https://facebook.com"],
    frameSrc: ["'self'", "https://app.optimizely.com"],
    imgSrc:["'self'","data:", "https://www.google-analytics.com", "https://pontoon.mozilla.org","https://*.shpg.org/",
          "https://cdn.optimizely.com"],
    frameAncestors: ["https://app.optimizely.com"]
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
app.use(function(err, req, res, next) {
  res.send(err);
});

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(env.get('PORT'), function () {
  console.log('Server listening ( http://localhost:%d )', env.get('PORT'));
});
