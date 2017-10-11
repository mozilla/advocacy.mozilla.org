var defaultConfig = require('../intl-config.js');
var propertiesParser = require('properties-parser');
var path = require('path');
var FS = require("q-io/fs");
var Habitat = require('habitat');
var Hoek = require('hoek');

Habitat.load();
var env = new Habitat();

var supportedLocales = env.get('SUPPORTED_LOCALES') || "*";

function getDirectoryLocales(src) {
  return FS.listDirectoryTree(path.join(process.cwd(), src)).then(function(dirTree) {
    var list = [];
    dirTree.forEach(function(i) {
      var that = i.split(src + '/');
      if (that[1]) {
        list.push(that[1]);
      }
    });
    return list;
  });
}

function getStaticLocales() {
  return new Promise(function(resolve, reject) {
    resolve(supportedLocales);
  });
}

function getListLocales(src) {
  if (supportedLocales === "*") {
    return getDirectoryLocales(src);
  } else {
    return getStaticLocales();
  }
}

function buildDictionary(entries) {
  var dictionary = entries.reduce(function(prevEntry, entry) {
    prevEntry[entry.locale] = entry.content;
    return prevEntry;
  }, {});
  return dictionary;
}

function writeFile(dictionary, dir, file) {
  var publicPath = path.join(process.cwd(), dir);
  var localesPath = path.join(publicPath, file);
  FS.makeTree(publicPath).then(function() {
    FS.write(localesPath, JSON.stringify(dictionary, null, 2))
    .then(function() {
      console.log('Done writing: ' + localesPath);
    }).catch(function(e) {
      console.log(e);
    });
  }).catch(function(e) {
    console.log(e);
  });
}

function readPropertiesFile(filePath) {
  return new Promise(function(resolve, reject) {
    propertiesParser.read(filePath, function(message_error, message_properties) {
      if (message_error && message_error.code !== 'ENOENT') {
        return reject(message_error);
      }
      resolve(message_properties);
    });
  });
}

function getContentMessages(src) {
  return function(locale) {
    return FS.listTree(path.join(process.cwd(), src, locale), function(filePath, stat) {
      return path.extname(filePath) === ".properties";
    }).then(function(files) {
      return Promise.all(files.map(readPropertiesFile)).then(function(properties) {
        var merged_properties = {};
        properties.forEach(function(messages) {
          Hoek.merge(merged_properties, messages);
        });
        return {content: merged_properties, locale: locale};
      });
    });
  };
}

function applyConfig(config) {
  getListLocales(config.src).then(function(locales) {
    return Promise.all(locales.map(getContentMessages(config.src)));
  }).then(function(entries) {
    writeFile(buildDictionary(entries), config.dest.dir, config.dest.file);
  }).catch(function(err) {
    console.error(err);
  });
}

applyConfig(defaultConfig);
applyConfig({
  "dest": {
    "dir": "public",
    "file": "buyers-guide-locales.json"
  },
  "src": "buyers-guide-locales"
});
