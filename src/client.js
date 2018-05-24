/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { IntlProvider, addLocaleData } from 'react-intl';
import routes from './routes.js';
import ga from 'react-ga';
import assign from 'object-assign';
import getMessages from './lib/get-messages.js';

function createElement(Component, props) {
  var locale = window.location.pathname.split("/")[1];
  var ReactIntlLocaleData = window.ReactIntlLocaleData;
  var messages = getMessages(assign, locale, window.location.pathname);

  Object.keys(ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(ReactIntlLocaleData[lang]);
  });

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} test={props.location.query.test} subscribed={props.location.query.subscribed}/>
    </IntlProvider>
  );
}

function logPageView() {
  ga.pageview(window.location.pathname + window.location.search);
}

var _dntStatus = navigator.doNotTrack || navigator.msDoNotTrack;
var fxMatch = navigator.userAgent.match(/Firefox\/(\d+)/);
var ie10Match = navigator.userAgent.match(/MSIE 10/i);
var w8Match = navigator.appVersion.match(/Windows NT 6.2/);

if (fxMatch && Number(fxMatch[1]) < 32) {
  _dntStatus = `Unspecified`;
} else if (ie10Match && w8Match) {
  _dntStatus = `Unspecified`;
} else {
  _dntStatus = { '0': `Disabled`, '1': `Enabled` }[_dntStatus] || `Unspecified`;
}

if (_dntStatus !== `Enabled`){
  ga.initialize(process.env.GA_TRACKING_ID);
}

//Polyfill Intl before starting app for browsers that don't support it *cough*Safari*cough*
if (!window.Intl) {
  require.ensure(['intl'], (require) => {
    window.Intl = require('intl');
    runApp();
  }, "IntlBundle");
} else {
  runApp();
}

function runApp() {
  render(
    <Router createElement={createElement} onUpdate={logPageView} history={browserHistory}>
      {routes}
    </Router>, document.querySelector("#my-app")
  );
}
