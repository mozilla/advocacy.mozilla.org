var config = require('../intl-config.js');
var properties = require('properties-parser');
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

function getContentMessages(locale) {
  return new Promise(function(resolve, reject) {
    properties.read(path.join(process.cwd(), config.src, locale, 'messages.properties'), function(message_error, message_properties) {
      if (message_error && message_error.code !== 'ENOENT') {
        return reject(message_error);
      }

      properties.read(path.join(process.cwd(), config.src, locale, 'email.properties'), function(email_error, email_properties) {
        if (email_error && email_error.code !== 'ENOENT') {
          return reject(email_error);
        }

        var merged_properties = {};
        Hoek.merge(merged_properties, message_properties);
        Hoek.merge(merged_properties, email_properties);

        resolve({content: merged_properties || {}, locale: locale});
      });
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
