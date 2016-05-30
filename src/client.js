/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import ga from 'react-ga';

function logPageView() {
  ga.pageview(window.location.pathname + window.location.search);
}

ga.initialize(process.env.GA_TRACKING_ID);

render(
  <Router onUpdate={logPageView} history={browserHistory}>
    {routes}
  </Router>, document.querySelector("#my-app")
);
