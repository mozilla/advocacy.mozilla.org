/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import ga from 'react-ga';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';

function NotMatch(nextState, replace) {
  replace('/');
}

function logPageView() {
  ga.pageview(window.location.pathname);
}

ga.initialize(process.env.GA_TRACKING_ID);
render((
  <Router onUpdate={logPageView} history={browserHistory}>
    <Route path="/">
      <IndexRoute component={require(`./pages/home.js`)}/>
      <Route path="/stay-secure">
        <IndexRoute component={require(`./pages/stay-secure.js`)}/>
        <Route path="thank-you" component={require(`./pages/stay-secure-thank-you.js`)}/>
        <Redirect from="*" to="/stay-secure/" />
      </Route>
      <Route path="/open-web-fellows" component={require(`./pages/open-web-fellows/overview.js`)}/>
      <Route path="/open-web-fellows/fellows" component={require(`./pages/open-web-fellows/fellows.js`)}/>
      <Route path="/open-web-fellows/info" component={require(`./pages/open-web-fellows/info.js`)}/>
      <Route path="*" onEnter={NotMatch}/>
    </Route>
  </Router>
), document.querySelector(`#my-app`));
