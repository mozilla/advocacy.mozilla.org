/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Router, browserHistory, Route, IndexRedirect, Redirect } from 'react-router';

function redirect(state, replace) {
  if (state.location.query.video === '1') {
    replace('/encrypt/direct/1');
  }
}

module.exports = (
	<Router history={browserHistory}>
		<Route path="/encrypt">
			<IndexRedirect to="/encrypt/social/2" />
			<Route path="signup" component={require(`./pages/encrypt/signup.jsx`)}/>
			<Route path="signup-complete" component={require(`./pages/encrypt/signup-complete.jsx`)}/>
			<Route path=":type/:video" component={require('./pages/encrypt/pageType.jsx')}/>
			<Redirect from="direct" to="/encrypt/direct/2" />
			<Redirect from="social" to="/encrypt/social/2" />
			<Route path="2" onEnter={redirect} />
			<Redirect from="3" to="/encrypt/hybrid/2" />
			<Redirect from="*" to="/encrypt/" />
		</Route>
	</Router>
	);
