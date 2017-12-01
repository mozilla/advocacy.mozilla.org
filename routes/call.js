"use strict";

var fetch = require('node-fetch');
var FormData = require('form-data');
var parseNumber = require('libphonenumber-js').parse;

const CALL_POWER_URL = process.env.CALL_POWER_URL;

module.exports = function handleCallRequest(request, reply) {
  var callInformation = request.payload;
  let number = callInformation.number;

  // Make sure the user didn't remove a country code.
  if (number.indexOf('+') === -1) {
    return reply({
      'call_placed': false,
      error: 'Phone number is missing a country code'
    }).code(409);
  }

  // Also make sure the number does not contain illegal characters.
  if ((/[^0-9+ ,\(\)\.\-]/).test(number)) {
    return reply({
      'call_placed': false,
      error: 'Phone number contains illegal characters.'
    }).code(409);
  }

  // It does not: strip out inert characters and continue.
  number = number.replace(/[^0-9+]/g,'');
  const locale = callInformation.locale || '';
  const parsed = parseNumber(number);

  // Verify that the number we've been given is a proper number
  // for whatever country the country code said it was for.
  if (!parsed.phone) {
    return reply({
      'call_placed': false,
      error: 'Phone number does not match the format required based on country code.'
    }).code(409);
  }

  // If we get here, we know the phone number is legit.
  // Extract the country for this number and the cleaned
  // number, and process with invoking a campaign calll.
  const cid = 1;

  var form = new FormData();
  form.append('userPhone', number);
  form.append('userCountry', parsed.country);
  form.append('campaignId', cid);

  fetch(CALL_POWER_URL, { method: 'POST', body: form })
  .then(res => res.json())
  .then(json => {
    if (json.error) {
      throw new Error(JSON.stringify(json));
    }
    reply({ 'call_placed': true }).code(200);
  })
  .catch(error => {
    var error = error.message;
    var status = 500;
    try {
      var data = JSON.parse(error);
      error = data.error;
      status = data.status;
    } catch (e) { /* error message was not JSON data */ }
    console.error(`error for ${number}/${locale}/cid:${cid}(${parsed.country}):`, error);
    reply({ 'call_placed': false, error: error }).code(status);
  });
};
