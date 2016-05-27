/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { IntlProvider, addLocaleData } from 'react-intl';
import routes from './routes.js';
import ga from 'react-ga';
var locales = require('../public/locales.json');

function createElement(Component, props) {
  var locale = window.location.pathname.split("/")[1];
  var ReactIntlLocaleData = window.ReactIntlLocaleData;
  var messages = locales[locale];

  Object.keys(ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(ReactIntlLocaleData[lang]);
  });

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props}/>
    </IntlProvider>
  );
}

function logPageView() {
  ga.pageview(window.location.pathname + window.location.search);
}

ga.initialize(process.env.GA_TRACKING_ID);

render(
  <Router createElement={createElement} onUpdate={logPageView} history={browserHistory}>
    {routes}
  </Router>, document.querySelector("#my-app")
);
