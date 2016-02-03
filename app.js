var express = require('express'),
  Habitat = require('habitat'),
  path = require('path'),
  compression = require('compression');

Habitat.load();

var app = express(),
  env = new Habitat();

app.use(compression());
app.use(express.static(__dirname + '/public', {maxAge: 3600000}));
app.use(function(err, req, res, next) {
  res.send(err);
});

app.get('/encrypt/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/encrypt/index.html'));
});

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(env.get('PORT'), function () {
  console.log('Server listening ( http://localhost:%d )', env.get('PORT'));
});
