import React  from 'react';
import ReactDOM, { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

// Using a server response we don't have an "index.html", so instead of
// generating a <Page>...</Page> like we do over in App.js, we actually
// use a component that wraps a <Page/> with a full HTML document:
var HTML = require(`../pages/encrypt/index.js`);
var routes = require('../routes.js');

module.exports = function(req, res, next) {
  var location = req.url;

  var metaTitle = "Mozilla’s Policy & Advocacy Program - Home";
  var metaSiteName = "Mozilla Advocacy";
  var metaUrl = "http://advocacy.mozilla.org/";
  var metaDesc = "We are building a global movement to protect the free and open Web.";
  var metaImage = "common/assets/logo-og.png";
  var twitterImage = "";
  var desc = "We Are Building a Global Movement to Protect the Free and Open Web Mozilla supports the heroes of the Web — the developers, advocates and ...";
  var title = "Mozilla Advocacy";

  if (location.indexOf('/encrypt/') !== -1) {
    metaTitle = "Encryption matters";
    metaSiteName = "Mozilla Advocacy - Encryption";
    metaUrl = "https://advocacy.mozilla.org/encrypt/";
    metaDesc = "Encryption needs you! Sign Mozilla's pledge to stand up for encryption and a more secure Web at advocacy.mozilla.org/encrypt";
    metaImage = "https://advocacy.mozilla.org/assets/img/share/Encryption-facebook-b5-06.png";
    twitterImage = "https://advocacy.mozilla.org/assets/img/share/Encryption-twitter-b5-06.png";
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

  // This is essentially a callback lookup. If the requested URL is a known
  // URL based on the routing map as defined in routes.js, then this will
  // lead to render properties that can be used to generate page components.
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    // obviously, we need an error handler.
    if (error) { res.status(500).send(error.message); }

    // React router lets you specify redirects. If we had any, we literally
    // just tell our server that we need to look up a different URL.
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    // This is the most interesting part: we have content that React can render.
    else if (renderProps) {
      // renderToString() generates React-properties-enriched HTML that a
      // React app can be loaded into. There's also renderToStaticMarkup(),
      // but that generates HTML without any React properties, so that _would_
      // get wiped if the HTML contains a <script> element that tries to load
      // the bundle for hooking into the DOM.
      let reactHTML = ReactDOM.renderToString(<RouterContext {...renderProps}/>);
      let html = ReactDOM.renderToStaticMarkup(
        <HTML reactHTML={reactHTML}
          metaTitle={metaTitle}
          metaSiteName={metaSiteName}
          metaUrl={metaUrl}
          metaDesc={metaDesc}
          metaImage={metaImage}
          twitterImage={twitterImage}
          desc={desc}
          title={title}
        />
      );

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
