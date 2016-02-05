import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

export default (
  (<Router history={browserHistory}>
    <Route path="/encrypt" component={require(`./pages/encrypt/default.jsx`)}/>
    <Route path="/encrypt/v2" component={require(`./pages/encrypt/v2.jsx`)}/>
    <Route path="/encrypt/v3" component={require(`./pages/encrypt/v3.jsx`)}/>
  </Router>)
);
