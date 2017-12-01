"use strict";

var fetch = require('node-fetch');
var FormData = require('form-data');
var parseNumber = require('libphonenumber-js').parse;

const CALL_POWER_URL = process.env.CALL_POWER_URL;
const COPYRIGHT_CAMPAIGN_ID = process.env.COPYRIGHT_CAMPAIGN_ID;

module.exports = function handleCallRequest(req, res) {
  var callInformation = req.body;
  let number = callInformation.number;
  let zip = callInformation.zip;

  // Also make sure the number does not contain illegal characters.
  if ((/[^0-9+ ,\(\)\.\-]/).test(number)) {
    return res.status(409).send({
      'call_placed': false,
      error: 'Phone number contains illegal characters.',
      status: 409
    });
  }

  // It does not: strip out inert characters and continue.
  number = number.replace(/[^0-9]/g,'');

  // Ensure we a country code, 1 way or another ;).
  if (number.length === 10) {
    number = "1" + number;
  }

  number = "+" + number;

  const locale = callInformation.locale || '';
  const parsed = parseNumber(number);

  // Verify that the number we've been given is a proper number
  // for whatever country the country code said it was for.
  if (!parsed.phone) {
    return res.status(409).send({
      'call_placed': false,
      error: 'Phone number does not match the format required based on country code.',
      status: 409
    });
  }

  var form = new FormData();
  form.append('userPhone', number);
  form.append('zip', zip);
  form.append('userCountry', parsed.country);
  form.append('campaignId', COPYRIGHT_CAMPAIGN_ID);

  fetch(CALL_POWER_URL, { method: 'POST', body: form })
  .then(res => res.json())
  .then(json => {
    if (json.error) {
      throw new Error(JSON.stringify(json));
    }
    res.status(200).send({ 'call_placed': true, status: 200 });
  })
  .catch(error => {
    var error = error.message;
    var status = 500;
    try {
      var data = JSON.parse(error);
      error = data.error;
      status = data.status;
    } catch (e) { /* error message was not JSON data */ }
    console.error(`error for ${number}/${locale}/cid:${COPYRIGHT_CAMPAIGN_ID}(${parsed.country}):`, error);
    res.status(status).send({ 'call_placed': false, error: error, status });
  });
};
