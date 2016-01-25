var spawn = require('cross-spawn');
var Habitat = require('habitat');

Habitat.load();

var env = new Habitat();
var buildCommand = "build:dev";

if ( env.get("OPTIMIZE") ) {
  buildCommand = 'build:production';
}

var npm = spawn('npm', ['run', buildCommand], {
  stdio: 'inherit'
});

npm.on('close', function(code) {
  process.exit(code);
});
