var hatchet = require('hatchet');
var basketUrl = process.env.BASKET_URL;

var signupRoutes = function(url, transaction, callback) {
  var payload = {
    format: 'html',
    lang: 'en-US',
    newsletters: 'mozilla-foundation',
    trigger_welcome: 'N',
    source_url: url,
    email: transaction.email,
    country: 'US',
    first_name: transaction.firstName
  };

  if (transaction.lastName) {
    payload.last_name = transaction.lastName;
  }

  hatchet.send("send_post_request", {
    url: basketUrl,
    json: true,
    form: payload
  }, (hatchet_error, response) => {
    callback(hatchet_error, payload);
  });
};

module.exports = signupRoutes;
