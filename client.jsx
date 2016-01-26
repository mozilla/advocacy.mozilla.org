import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={require('./pages/home.jsx')}/>
    <Route path="/open-web-fellows/fellows" component={require('./pages/open-web-fellows/fellows.jsx')}/>
    <Route path="/open-web-fellows/" component={require('./pages/open-web-fellows/overview.jsx')}/>
    <Route path="/open-web-fellows/info" component={require('./pages/open-web-fellows/info.jsx')}/>
  </Router>
), document.querySelector("#my-app"));
