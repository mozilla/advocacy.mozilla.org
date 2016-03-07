/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
var PageType = require('./pages/encrypt/social.jsx');

//ToDo: redirect video-less type to videodata.length?

module.exports = function(Root){
		//I can't figure out why Indexroute won't work, so IndexRedirect will have to do for now
		// <IndexRoute path="/" component={require('./pages/encrypt/pageType.jsx')}/>
  return (
	<Route path="/encrypt" component={Root}>
	    <IndexRedirect to="/encrypt/social/2" />
	    <Route path="signup" component={require(`./pages/encrypt/signup.jsx`)}/>
	    <Route path="signup-complete" component={require(`./pages/encrypt/signup-complete.jsx`)}/>
	  	<Route path=":type/:video" component={require('./pages/encrypt/pageType.jsx')}/>
	  	<Redirect from="direct" to="/encrypt/direct/2" />
	  	<Redirect from="social" to="/encrypt/social/2" />
	  	<Redirect from="2" to="/encrypt/direct/2" />
	  	<Redirect from="3" to="/encrypt/hybrid/2" />
	</Route>
  );
};
