var applyConfig = require('./properties2json.js');
var defaultConfig = require('../intl-config.js');

applyConfig(defaultConfig);

applyConfig({
  "dest": {
    "dir": "public",
    "file": "buyers-guide-locales.json"
  },
  "src": "buyers-guide-locales"
});
