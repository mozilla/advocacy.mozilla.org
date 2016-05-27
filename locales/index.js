function getLocales(arr) {
  return arr.map(function(item) {
    return item.replace('./', '').replace('.json', '');
  });
}

var reqF = require('enhanced-require');
var req = reqF(module);
var arr = !req.context ? require.context('./', true, /\.json$/).keys() : req.context('./', true, /\.json$/).keys();

module.exports = getLocales(arr);
