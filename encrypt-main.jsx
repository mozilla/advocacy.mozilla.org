/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Router, Route, browserHistory } from 'react-router';

export default (
  (<Router history={browserHistory}>
    <Route path="/encrypt" component={require(`./pages/encrypt/v2.jsx`)}/>
    <Route path="/encrypt/2" component={require(`./pages/encrypt/default.jsx`)}/>
    <Route path="/encrypt/3" component={require(`./pages/encrypt/v3.jsx`)}/>
    <Route path="/encrypt/signup" component={require(`./pages/encrypt/signup.jsx`)}/>
    <Route path="/encrypt/signup-complete" component={require(`./pages/encrypt/signup-complete.jsx`)}/>
  </Router>)
);
