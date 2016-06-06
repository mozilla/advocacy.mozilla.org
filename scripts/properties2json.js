var config = require('../intl-config.js');
var propertiesParser = require('properties-parser');
var path = require('path');
var FS = require("q-io/fs");
var Habitat = require('habitat');
var Hoek = require('hoek');

Habitat.load();
var env = new Habitat();

var supportedLocales = env.get('SUPPORTED_LOCALES') || "*";

function getListLocales() {
  return new Promise(function(resolve, reject) {
    if (supportedLocales === "*") {
      FS.listDirectoryTree(path.join(process.cwd(), config.src)).then(function(dirTree) {
        var list = [];
        dirTree.forEach(function(i) {
          var that = i.split(config.src + '/');
          if (that[1]) {
            list.push(that[1]);
          }
        });
        return resolve(list);
      }).catch(function(e) {
        console.log(e);
        reject(e);
      });
    } else {
      resolve(supportedLocales);
    }
  });
}

function writeFile(entries) {
  var dictionary = entries.reduce(function(prevEntry, entry) {
    prevEntry[entry.locale] = entry.content;
    return prevEntry;
  }, {});
  var publicPath = path.join(process.cwd(), config.dest);
  var localesPath = path.join(publicPath, 'locales.json');
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

function getContentMessages(locale) {
  return new Promise(function(resolve, reject) {
    FS.listTree(path.join(process.cwd(), config.src, locale), function(filePath, stat) {
      return path.extname(filePath) === ".properties";
    }).then(function(files) {
      Promise.all(files.map(readPropertiesFile)).then(function(properties) {
        var merged_properties = {};
        properties.forEach(function(messages) {
          Hoek.merge(merged_properties, messages);
        });
        resolve({content: merged_properties, locale: locale});
      });
    }).catch(function(e) {
      console.log(e);
      reject(e);
    });
  });
}

function processMessageFiles(locales) {
  return Promise.all(locales.map(getContentMessages));
}

getListLocales().then(processMessageFiles)
.then(writeFile).catch(function(err) {
  console.error(err);
});
