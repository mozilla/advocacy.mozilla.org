import React from 'react';
import Optimizely from '../../components/optimizely.jsx';
import OptimizelySubdomain from '../../components/optimizelysubdomain.jsx';

module.exports = React.createClass({
  render: function() {
    var ga = `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-49796218-9', 'auto');
      ga('send', 'pageview');
    `;
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Encryption matters"/>
          <meta property="og:site_name" content="Mozilla Advocacy - Encryption"/>
          <meta property="og:url" content="https://advocacy.mozilla.org/encrypt/"/>
          <meta property="og:description" content="Encryption needs you! Sign Mozilla's pledge to stand up for encryption and a more secure Web at advocacy.mozilla.org/encrypt"/>
          <meta property="og:image" content="https://advocacy.mozilla.org/assets/img/share/Encryption-facebook-b5-06.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mozilla" />
          <meta name="twitter:title" content="Encryption Matters" />
          <meta name="twitter:description" content="Encryption needs you! Sign Mozilla's pledge to stand up for encryption & a more secure Web at mzl.la/encrypt" />
          <meta name="twitter:image" content="https://advocacy.mozilla.org/assets/img/share/Encryption-twitter-b5-06.png" />
          <meta description="Your online privacy depends on encryption. Learn more about how encryption works, why it's essential to a strong Web, and why it's worth protecting." />

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" href="/build/encrypt.css"/>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Fira+Sans:300i,300,400,600"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <title>Mozilla Advocacy</title>
          <OptimizelySubdomain/>
          <Optimizely/>
          <script dangerouslySetInnerHTML={{__html: ga}}></script>
        </head>
        <body>
          <div id="my-app" dangerouslySetInnerHTML={{__html: this.props.reactHTML}}/>
          <script src="/build/encrypt.js"></script>
          <script src="//c.shpg.org/352/sp.js"></script>
        </body>
      </html>
    );
  }
});
