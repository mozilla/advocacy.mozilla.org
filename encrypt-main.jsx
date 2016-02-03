import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/encrypt">
      <IndexRoute component={require('./pages/encrypt/default.jsx')}/>
      <Route path="/encrypt/v2" component={require('./pages/encrypt/v2.jsx')}/>
      <Route path="/encrypt/v3" component={require('./pages/encrypt/v3.jsx')}/>
    </Route>
  </Router>
), document.querySelector("#my-app"));
