import React  from 'react';
import ReactDOM, { renderToString } from 'react-dom/server';
import { IntlProvider } from 'react-intl';
import { match, RouterContext } from 'react-router';
import url from 'url';

var getMessages = require('./get-messages.js');
var locationParser = require('./location-parser.js');

module.exports = function(req, res, next) {
  // Using a server response we don't have an "index.html", so instead of
  // generating a <Page>...</Page> like we do over in App.js, we actually
  // use a component that wraps a <Page/> with a full HTML document:
  var HTML = require(`../pages/encrypt/index.js`);
  var routes = require('../routes.js');

  var ActivitiesHTML = require(`../pages/maker-party/activities/index.js`);

  var location = url.parse(req.url).pathname;
  var search = url.parse(req.url).search || "";
  var locale = "";

  var metaTitle = "Mozilla’s Policy & Advocacy Program - Home";
  var metaSiteName = "Mozilla Advocacy";
  var metaUrl = "http://advocacy.mozilla.org/";
  var metaDesc = "We are building a global movement to protect the free and open Web.";
  var metaImage = "common/assets/logo-og.png";
  var twitterImage = "";
  var twitterDesc = "";
  var desc = "We Are Building a Global Movement to Protect the Free and Open Web Mozilla supports the heroes of the Web — the developers, advocates and ...";
  var title = "Mozilla Advocacy";

  if (location.indexOf('/encrypt/') !== -1) {
    metaTitle = "Encryption matters";
    metaSiteName = "Mozilla Advocacy - Encryption";
    if (location.indexOf('/encrypt/codemoji/') !== -1 || location.indexOf('/encrypt/codemoji-b/') !== -1) {
      metaDesc = "I care about protecting #encryption and you should too. To learn more about how it works and why it’s worth protecting, check out this great website from @Mozilla.t";
      twitterDesc = "Check out this great website from @Mozilla — it explains why #encryption is so important: advocacy.mozilla.org/encrypt";
      metaUrl = "https://advocacy.mozilla.org/encrypt/codemoji/";
      metaImage = "https://advocacy.mozilla.org/assets/img/share/video3-facebook.png";
      twitterImage = "https://advocacy.mozilla.org/assets/img/share/video3-twitter.png";
    } else {
      metaDesc = "Encryption needs you! Sign Mozilla's pledge to stand up for encryption and a more secure Web at advocacy.mozilla.org/encrypt";
      metaUrl = "https://advocacy.mozilla.org/encrypt/";
      metaImage = "https://advocacy.mozilla.org/assets/img/share/Encryption-facebook-b5-06.png";
      twitterImage = "https://advocacy.mozilla.org/assets/img/share/Encryption-twitter-b5-06.png";
    }
    desc = "Your online privacy depends on encryption. Learn more about how encryption works, why it's essential to a strong Web, and why it's worth protecting.";
    title = "Learn about encryption - Mozilla Advocacy";
  }

  if (location.indexOf('/encrypt-hard-drive/') !== -1) {
    metaTitle = "Encrypt Your Hard Drive";
    metaSiteName = "Learn about encryption - Mozilla Advocacy";
    metaUrl = "https://advocacy.mozilla.org/encrypt-hard-drive/";
    metaDesc = "Keep all that personal data safer: Take a few minutes encrypt your hard drive. The web will thank you. @Mozilla has a step-by-step guide to help.";
    metaImage = "https://advocacy.mozilla.org/assets/filevault_illustration.jpg";
    twitterImage = "https://advocacy.mozilla.org/assets/filevault_illustration.jpg";
    desc = "We Are Building a Global Movement to Protect the Free and Open Web Mozilla supports the heroes of the Web — the developers, advocates and ...";
    title = "Encrypt Your Hard Drive";
  }

  if (location.indexOf('/stay-secure/') !== -1) {
    metaTitle = "Update Your Software";
    metaSiteName = "Learn about encryption - Mozilla Advocacy";
    metaUrl = "https://advocacy.mozilla.org/stay-secure/";
    metaDesc = "Keep all that personal data safer: Take a few minutes and update the software on all your devices -- including phones, tablets, and computers. The web will thank you. Update today with @Mozilla’s help.";
    metaImage = "https://advocacy.mozilla.org/assets/01_SoftwareUpdateImage-Facebook.png";
    twitterImage = "https://advocacy.mozilla.org/assets/02_SoftwareUpdateImage-Twitter.png";
    desc = "We Are Building a Global Movement to Protect the Free and Open Web Mozilla supports the heroes of the Web — the developers, advocates and ...";
    title = "Update Your Software";
  }

  var htmlClassName = "";
  if (location.indexOf('/net-neutrality') !== -1) {
    htmlClassName = "net-neutrality-html";
    metaTitle = "Will they hand the internet over to the big cable companies? Not if we do something about it.";
    metaSiteName = "Join me in protecting net neutrality";
    metaUrl = "https://advocacy.mozilla.org/en-US/net-neutrality/";
    metaDesc = "The FCC’s received more than 22 million comments on whether to water down existing Net Neutrality rules and wants to vote on it in a month. One month to read all 22 million comments? That’s crazy. Tell the FCC to slow it down.";
    metaImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/net-neutrality/save-the-internet.jpg";
    twitterImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/net-neutrality/save-the-internet.jpg";
    desc = "The FCC’s received more than 22 million comments on whether to water down existing Net Neutrality rules and wants to vote on it in a month. One month to read all 22 million comments? That’s crazy. Tell the FCC to slow it down.";
    title = "Will they hand the internet over to the big cable companies? Not if we do something about it.";
  }
  var shareProgress = "";
  if (location.indexOf('/safety') !== -1) {
    htmlClassName = "safety-html";
    metaTitle = "Safety Tips";
    metaSiteName = "Safety Tips";
    metaUrl = "https://advocacy.mozilla.org/en-US/safety/";
    metaDesc = "Staying safe online has never been so simple. Check out these simple privacy tips from Mozilla";
    metaImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/safety/share-progress.png";
    twitterImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/safety/share-progress.png";
    desc = "Staying safe online has never been so simple. Check out these simple privacy tips from Mozilla";
    title = "Safety Tips";
    shareProgress = "safetyTips";
  }

  if (location.indexOf('/open-web-fellows') !== -1) {
    metaTitle = "Ford-Mozilla Open Web Fellows";
    metaSiteName = "Ford-Mozilla Open Web Fellows";
    metaUrl = "https://advocacy.mozilla.org/open-web-fellows/";
    metaDesc = "Current and alumni fellows working at the intersection of tech, policy, advocacy, and the open web.";
    metaImage = "https://advocacy.mozilla.org/assets/2016-hero@2x.jpg";
    twitterImage = "https://advocacy.mozilla.org/assets/fellows.jpg";
    desc = "Current and alumni fellows working at the intersection of tech, policy, advocacy, and the open web.";
    title = "Ford-Mozilla Open Web Fellows";
  }

  // This is essentially a callback lookup. If the requested URL is a known
  // URL based on the routing map as defined in routes.js, then this will
  // lead to render properties that can be used to generate page components.
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    // obviously, we need an error handler.
    if (error) {
      res.status(500).send(error.message);
      return;
    }

    // React router lets you specify redirects. If we had any, we literally
    // just tell our server that we need to look up a different URL.
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + search);
    }
    // This is the most interesting part: we have content that React can render.
    else if (renderProps) {
      locale = locationParser(req.headers["accept-language"], location).locale;
      var messages = getMessages(Object.assign, locale, location);
      if (location === "/") {
        res.redirect(302, location + locale + search);
        return;
      }
      function createElement(Component, props) {
        var messages = getMessages(Object.assign, locale, location);
        // make sure you pass all the props in!
        return (
          <IntlProvider locale={locale} messages={messages}>
            <Component {...props} />
          </IntlProvider>
        );
      }
      // renderToString() generates React-properties-enriched HTML that a
      // React app can be loaded into. There's also renderToStaticMarkup(),
      // but that generates HTML without any React properties, so that _would_
      // get wiped if the HTML contains a <script> element that tries to load
      // the bundle for hooking into the DOM.
      let reactHTML = ReactDOM.renderToString(<RouterContext createElement={createElement} {...renderProps}/>);

      var buyersGuide = false;
      if (location.indexOf('/privacynotincluded') !== -1) {
        htmlClassName = "buyers-guide-html";
        buyersGuide = true;

        metaTitle = messages["privacy_not_included"];
        metaSiteName = messages["privacy_not_included"];
        metaUrl = "https://advocacy.mozilla.org/" + locale + "/privacynotincluded/";
        metaDesc = messages["bg_sharing_facebook_body_1"];
        metaImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/buyers-guide/social/social_facebook.jpg";
        twitterImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/buyers-guide/social/social_twitter.jpg";
        if (locale === "es") {
          metaImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/buyers-guide/social/social_facebook-ES.jpg";
          twitterImage = "https://advocacy-mozilla-org-prod.herokuapp.com/assets/buyers-guide/social/social_twitter-ES.jpg";
        }
        desc = messages["bg_sharing_facebook_body_1"];
        title = messages["privacy_not_included"];
      }

      let html = "";
      if (location.indexOf('/maker-party/') !== -1) {
        if (location.indexOf('/post-crimes/') !== -1) {
          title = "Maker Party | Postcrimes";
        }
        if (location.indexOf('/meme-around/') !== -1) {
          title = "Maker Party | Meme Around";
        }
        if (location.indexOf('/contribute-to-the-commons/') !== -1) {
          title = "Maker Party | Contribute to the Commons";
        }
        if (location.indexOf('/combined-maker-party-activities/') !== -1) {
          title = "Maker Party | Combined Maker Party Activities";
        }
        html = ReactDOM.renderToStaticMarkup(
          <ActivitiesHTML reactHTML={reactHTML}
            locale={locale}
            title={title}
          />
        );
      } else {
        html = ReactDOM.renderToStaticMarkup(
          <HTML reactHTML={reactHTML}
            locale={locale}
            metaTitle={metaTitle}
            metaSiteName={metaSiteName}
            metaUrl={metaUrl}
            metaDesc={metaDesc}
            twitterDesc={twitterDesc}
            metaImage={metaImage}
            twitterImage={twitterImage}
            desc={desc}
            title={title}
            htmlClassName={htmlClassName}
            shareProgress={shareProgress}
            buyersGuide={buyersGuide}
          />
        );
      }

      // And to be good citizens of the web, we need a doctype, which React
      // cannot generate for us because exclamation points are funny.
      let doctype = "<!doctype html>";

      // Finally, send a full HTML document over to the client
      res.status(200).type('text/html').send(doctype + html);
    }

    // of course if this didn't have an error, nor a known redirect,
    // and it didn't find any render properties with which to render
    // a (set of) React component(s), we should fall through to whatever
    // else our express server can try to do to serve up content.
    else { next(); }
  });
};
