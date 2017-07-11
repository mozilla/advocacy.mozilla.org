/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { IntlProvider, addLocaleData } from 'react-intl';
import routes from './routes.js';
import ga from 'react-ga';
import locales from '../public/locales.json';
import assign from 'object-assign';

function createElement(Component, props) {
  var locale = window.location.pathname.split("/")[1];
  var ReactIntlLocaleData = window.ReactIntlLocaleData;
  var messages = assign({}, locales['en-US'], locales[locale]);

  Object.keys(ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(ReactIntlLocaleData[lang]);
  });

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} test={props.location.query.test}/>
    </IntlProvider>
  );
}

function logPageView() {
  ga.pageview(window.location.pathname + window.location.search);
}

ga.initialize(process.env.GA_TRACKING_ID);

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
