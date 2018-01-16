/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { Route, IndexRedirect, Redirect, IndexRoute } from 'react-router';
var locales = Object.keys(require('../public/locales.json'));

function redirect(locale) {
  return function(state, replace) {
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
      replace("/" + locale + `/encrypt/${pageType}/${state.location.query.video}`);
    } else {
      replace({
        pathname: "/" + locale + `/encrypt/${pageType}/1`,
        query: state.location.query
      });
    }
  }
}

function indexDirect(locale) {
  return function(state, replace) {
    if(state.location.query.video){
      replace("/" + locale + `/encrypt/social/${state.location.query.video}`);
    } else {
      replace({
        pathname: "/" + locale + `/encrypt/codemoji/1`,
        query: state.location.query
      });
    }
  }
}

function buildRoutes() {
  var routes = [];
  locales.forEach(function(locale) {
    routes.push(
      <Route key={locale} path={locale}>
        <IndexRoute component={require(`./pages/home.js`)}/>
        <Route path="open-web-fellows">
          <IndexRedirect to="overview"/>
          <Route path="overview" component={require('./pages/open-web-fellows/overview.js')}/>
          <Route path="fellows2017" component={require(`./pages/open-web-fellows/fellows2017.js`)}/>
          <Route path="fellows2016" component={require(`./pages/open-web-fellows/fellows2016.js`)}/>
          <Route path="fellows2015" component={require(`./pages/open-web-fellows/fellows2015.js`)}/>
          <Route path="info" component={require(`./pages/open-web-fellows/info.js`)}/>
          <Redirect from="*" to={"/" + locale + "/open-web-fellows/fellows2016"} />
        </Route>
        <Route path="stay-secure">
          <IndexRoute component={require(`./pages/stay-secure.js`)}/>
          <Route path="thank-you" component={require(`./pages/stay-secure-thank-you.js`)}/>
          <Redirect from="*" to={"/" + locale + "/stay-secure/"} />
        </Route>
        <Route path="encrypt-hard-drive">
          <IndexRoute component={require(`./pages/encrypt-hard-drive/encrypt-hard-drive.js`)}/>
          <Route path="thank-you" component={require(`./pages/encrypt-hard-drive/encrypt-hard-drive-thank-you.js`)}/>
          <Redirect from="*" to={"/" + locale + "/encrypt-hard-drive/"} />
        </Route>
        <Route path="maker-party/activities">
          <Route path="post-crimes" component={require(`./pages/maker-party/activities/post-crimes.js`)}/>
          <Route path="meme-around" component={require(`./pages/maker-party/activities/meme-around.js`)}/>
          <Route path="contribute-to-the-commons" component={require(`./pages/maker-party/activities/contribute-to-the-commons.js`)}/>
          <Route path="combined-maker-party-activities" component={require(`./pages/maker-party/activities/combined-maker-party-activities.js`)}/>
        </Route>
        <Route path="net-neutrality">
          <IndexRoute component={require(`./pages/net-neutrality/call-page.js`)}/>
          <Route path='call-now' component={require(`./pages/net-neutrality/call-now.js`)}/>
          <Route path='share' component={require(`./pages/net-neutrality/share.js`)}/>
          <Route path='petition' component={require(`./pages/net-neutrality/petition.js`)}/>
          <Redirect from="*" to={"/" + locale + "/net-neutrality/"} />
        </Route>
        <Redirect from="net-neutrality-comments" to={"/" + locale + "/net-neutrality/"} />
        <Redirect from="net-neutrality-comments-simple" to={"/" + locale + "/net-neutrality/"} />
        <Route path="safety">
          <IndexRoute component={require(`./pages/safety/safety.js`)}/>
          <Route path=":video" component={require(`./pages/safety/safety.js`)}/>
          <Redirect from="*" to={"/" + locale + "/safety/"} />
        </Route>
        <Route path="encrypt">
          <IndexRoute onEnter={indexDirect(locale)} />
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
          <Redirect from="direct" to={"/" + locale + "/encrypt/direct/1"} />
          <Redirect from="social" to={"/" + locale + "/encrypt/social/1"} />
          <Redirect from="hybrid" to={"/" + locale + "/encrypt/hybrid/1"} />
          <Redirect from="codemoji" to={"/" + locale + "/encrypt/codemoji/2"} />
          <Redirect from="codemoji-b" to={"/" + locale + "/encrypt/codemoji-b/2"} />
          <Route path="2" onEnter={redirect(locale)} />
          <Route path="3" onEnter={redirect(locale)} />
          <Redirect from="*" to={"/" + locale + "/encrypt/"} />
        </Route>
      </Route>
    );
  });

  ["en-US", "es"].forEach(function(locale) {
    routes.push(
      <Route key={locale + "-privacynotincluded"} path={locale}>
        <Route path="privacynotincluded">
          <IndexRoute galleryPosition="bottom" component={require(`./pages/buyers-guide/home.js`)}/>
          <Route path="why-we-made" component={require(`./pages/buyers-guide/why-we-made.js`)}/>
          <Route path="categories" galleryPosition="middle" component={require(`./pages/buyers-guide/home.js`)}/>
          <Route path="category">
            <Route path=":category" component={require(`./pages/buyers-guide/category.js`)}/>
            <Route path=":category/:item" component={require(`./pages/buyers-guide/item.js`)}/>
          </Route>
          <Redirect from="*" to={"/" + locale + "/privacynotincluded/"} />
        </Route>
      </Route>
    );
  });

  return routes;
}
// just need to handle / redirect now
module.exports = (
  <Route path="/">
    {buildRoutes()}
  </Route>
);
