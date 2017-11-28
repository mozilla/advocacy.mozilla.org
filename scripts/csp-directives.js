/**
 * CSP_DIRECTIVES
 */
const CSP_DIRECTIVES = {
  directives:{
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      "data:",
      "http://www.google-analytics.com",
      "https://cdn.optimizely.com",
      "http://localhost:8080",
      "https://mozilla-foundation-talk.herokuapp.com/embed.js",
      "https://app.optimizely.com",
      "https://basket.mozilla.org",
      "https://basket-dev.allizom.org",
      "https://*.shpg.org/",
      "https://www.google-analytics.com/",
      'https://pontoon.mozilla.org',
      'https://mozilla-pontoon-staging.herokuapp.com',
      'https://www.youtube.com',
      'https://s.ytimg.com'
    ],
    connectSrc:[
      "'self'",
      "206878104.log.optimizely.com",
      "https://basket.mozilla.org/",
      "https://basket-dev.allizom.org",
      'https://pontoon.mozilla.org',
      'https://mozilla-pontoon-staging.herokuapp.com'
    ],
    childSrc:[
      "'self'",
      "https://app.optimizely.com",
      "https://facebook.com",
      "https://mozilla-foundation-talk.herokuapp.com/embed/stream",
      "https://pontoon.mozilla.org",
      "https://mozilla-pontoon-staging.herokuapp.com",
      "https://www.youtube.com"
    ],
    imgSrc:[
      "'self'",
      "data:",
      "http://www.google-analytics.com",
      "https://www.google-analytics.com",
      "https://pontoon.mozilla.org",
      "https://*.shpg.org/",
      "https://img.youtube.com/",
      "https://cdn.optimizely.com",
      "https://pontoon.mozilla.org",
      "https://mozilla-pontoon-staging.herokuapp.com",
      "data:"
    ],
    frameAncestors: [
      "https://app.optimizely.com",
      "https://pontoon.mozilla.org",
      "https://mozilla-pontoon-staging.herokuapp.com"
    ]
  }
};

module.exports = CSP_DIRECTIVES;
