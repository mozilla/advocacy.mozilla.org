var spawn = require(`cross-spawn`);
var Habitat = require(`habitat`);

Habitat.load();

var env = new Habitat();
var buildCommand = `start:dev`;

if (env.get(`NPM_CONFIG_PRODUCTION`)) {
  buildCommand = `start:prod`;
}

var npm = spawn(`npm`, [`run`, buildCommand], { stdio: `inherit` });

npm.on(`close`, (code) => {
  process.exit(code);
});
