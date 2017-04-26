var hatchet = require("hatchet");
var request = require("request");
var signup = require("./signup.js");

var petitionRoutes = function(transaction, callback) {
  callback = callback || function() {};
  var formData = {
    "entry.825163439": transaction.firstName,
    "entry.129687116": transaction.lastName,
    "entry.329351653": transaction.email,
    "entry.1319525634": 'en-US'
  };

  var promises = [];

  promises.push(new Promise((resolve, reject) => {
    hatchet.send("net-neutrality-petition-signup", formData, function(err) {
      resolve(err);
    });
  }));

  if (transaction.signup) {
    promises.push(new Promise((resolve, reject) => {
      signup(transaction, function(err) {
        resolve(err);
      });
    }));
  }

  Promise.all(promises).then((errors) => {
    var err = errors[0] || errors[1];
    callback(err);
  });
};

module.exports = petitionRoutes;
