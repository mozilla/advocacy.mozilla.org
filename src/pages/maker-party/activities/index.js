import React from 'react';
import Optimizely from '../../../components/optimizely.js';
import OptimizelySubdomain from '../../../components/optimizelysubdomain.js';
import fs from 'fs';
import Path from 'path';
import Pontoon from '../../../components/pontoon.js';

module.exports = React.createClass({
  render: function() {
    var localeData = "";
    var locale = this.props.locale || "";
    var googleFonts = "//fonts.googleapis.com/css?family=Fira+Sans:300,300i,400i,400,600|Fira+Mono:400";
    if (locale) {
      if (locale === "cs") {
        googleFonts += "&subset=latin-ext";
      }
      localeData = fs.readFileSync(Path.join(__dirname, '../../../../node_modules/react-intl/locale-data/' + locale.split('-')[0] + '.js'), 'utf8');
    }
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://mozilla.github.io/curriculum-final/template-assets/css/combined.css" />
          <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript" charSet="utf-8"></script>

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" href={googleFonts}/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <title>{this.props.title}</title>
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/favicon/apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-196x196.png"/>
          <link rel="shortcut icon" href="/assets/favicon.ico"/>
          <script dangerouslySetInnerHTML={{__html: localeData}}></script>
          <OptimizelySubdomain/>
          <Optimizely/>
          <Pontoon/>
          <style type="text/css">
            {`
              @media (min-width: 600px) {
                .activity-template .sticky-button.sticky {
                  max-width: 350px;
                  width: 100%;
                  position: fixed;
                  top: 0;
                }
              }
              .activity-template .agenda-navigation li:nth-child(1)::after {
                background-image: url(/assets/maker-party/flag.svg);
              }
              .activity-template .total-time {
                background-image: url(/assets/maker-party/clock.svg);
              }
            `}
          </style>
        </head>
        <body>
          <div id="my-app" dangerouslySetInnerHTML={{__html: this.props.reactHTML}}/>
          <script src="/build/main.js"></script>
        </body>
      </html>
    );
  }
});
