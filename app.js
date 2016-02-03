var express = require('express'),
  helmet = require('helmet'),
  Habitat = require('habitat'),
  path = require('path'),
  compression = require('compression'),
  ReactRouting = require('./lib/react-server-route.js');

Habitat.load();

var app = express(),
  env = new Habitat();

app.set('trust proxy', true);

app.use(compression());
app.use(helmet());
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

app.use(express.static(__dirname + '/public', {maxAge: 3600000}));
app.use(function(err, req, res, next) {
  res.send(err);
});

app.get('/encrypt*', function(request, response) {
  ReactRouting(request, response);
});

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(env.get('PORT'), function() {
  console.log('Server listening ( http://localhost:%d )', env.get('PORT'));
});
