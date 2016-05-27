/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Router, browserHistory, Route, IndexRedirect, Redirect, IndexRoute } from 'react-router';
import encryptVideos from './data/encryptVideos';

function redirect(state, replace) {
  var pageType;
  switch(state.location.pathname.slice(-1)){
    case '2':
      pageType = 'direct';
      break;
    case '3':
      pageType = 'hybrid';
      break;
    default:
      pageType = 'social';
  }
  if (state.location.query.video) {
    replace(`/encrypt/${pageType}/${state.location.query.video}`);
  } else {
    replace({
      pathname: `/encrypt/${pageType}/${encryptVideos.length}`,
      query: state.location.query
    });
  }
}

function indexDirect(state, replace) {
  if(state.location.query.video){
    replace(`/encrypt/social/${state.location.query.video}`);
  } else {
    replace({
      pathname: `/encrypt/social/${encryptVideos.length}`,
      query: state.location.query
    });
  }
}

module.exports = (
  <Router history={browserHistory}>
    <Route path="/encrypt">
      <IndexRoute onEnter={indexDirect} />
      <Route path="signup" component={require(`./pages/encrypt/signup.js`)}/>
      <Route path="signupa" component={require(`./pages/encrypt/signup-a.js`)}/>
      <Route path="signupb" component={require(`./pages/encrypt/signup-b.js`)}/>
      <Route path="signupc" component={require(`./pages/encrypt/signup-c.js`)}/>
      <Route path="blanka" component={require(`./pages/encrypt/signup-blank.js`)}/>
      <Route path="signup-complete" component={require(`./pages/encrypt/signup-complete.js`)}/>
      <Route path="hybrida" component={require(`./pages/encrypt/hybrid-2-a.js`)}/>
      <Route path="hybridb" component={require(`./pages/encrypt/hybrid-2-b.js`)}/>
      <Route path="hybridc" component={require(`./pages/encrypt/hybrid-2-c.js`)}/>
      <Route path=":type/:video" component={require('./pages/encrypt/pageType.js')}/>
      <Redirect from="direct" to={`/encrypt/direct/${encryptVideos.length}`} />
      <Redirect from="social" to={`/encrypt/social/${encryptVideos.length}`} />
      <Redirect from="hybrid" to={`/encrypt/hybrid/${encryptVideos.length}`} />
      <Route path="2" onEnter={redirect} />
      <Route path="3" onEnter={redirect} />
      <Redirect from="*" to="/encrypt/" />
    </Route>
  </Router>
  );
