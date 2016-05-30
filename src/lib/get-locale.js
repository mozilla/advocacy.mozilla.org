var Parser = require("accept-language-parser");
var bestLang = require("bestlang");
var langmap = require("langmap");
var locales = require('../../public/locales.json');

module.exports = function(acceptLang, locale) {
  var langHeader = [];
  var langArray = [];
  if (locale && langmap[locale] && locales[locale]) {
    return locale;
  }
  langHeader = Parser.parse(acceptLang);
  langArray = langHeader.map(l => l.code + (l.region ? "-" + l.region : ""));
  locale = bestLang(langArray, Object.keys(locales), 'en-US');
  return locale;
};
