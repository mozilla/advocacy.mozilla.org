/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

module.exports = function(Root){
  return (
	<Route path="/encrypt" component={Root}>
	    <IndexRoute title="A TITLE" component={require(`./pages/encrypt/v2.jsx`)}/>
	  	<Route path="direct/:video" component={require(`./pages/encrypt/default.jsx`)}/>
	  	<Route path="social/:video" component={require(`./pages/encrypt/v2.jsx`)}/>
	  	<Route path="hybrid/:video" component={require(`./pages/encrypt/v3.jsx`)}/>
	    <Route path="signup" component={require(`./pages/encrypt/signup.jsx`)}/>
	    <Route path="signup-complete" component={require(`./pages/encrypt/signup-complete.jsx`)}/>
	</Route>
  );
};
