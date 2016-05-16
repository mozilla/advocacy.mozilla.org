import React from 'react';
import Optimizely from '../../components/optimizely.js';
import OptimizelySubdomain from '../../components/optimizelysubdomain.js';

module.exports = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.props.metaTitle}/>
          <meta property="og:site_name" content={this.props.metaSiteName}/>
          <meta property="og:url" content={this.props.metaUrl}/>
          <meta property="og:description" content={this.props.metaDesc}/>
          <meta property="description" content={this.props.metaDesc}/>
          <meta property="og:image" content={this.props.metaImage} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mozilla" />
          <meta name="twitter:title" content={this.props.metaTitle} />
          <meta name="twitter:description" content={this.props.metaDesc} />
          <meta name="twitter:image" content={this.props.twitterImage} />
          <meta description={this.props.desc} />

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" href="/build/main.css"/>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Fira+Sans:300,300i,400i,400,600"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <title>{this.props.title}</title>
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/favicon/apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-196x196.png"/>
          <link rel="shortcut icon" href="/assets/favicon.ico"/>
          <OptimizelySubdomain/>
          <Optimizely/>
        </head>
        <body>
          <div id="my-app" dangerouslySetInnerHTML={{__html: this.props.reactHTML}}/>
          <script src="/build/main.js"></script>
          <script src="//c.shpg.org/352/sp.js"></script>
        </body>
      </html>
    );
  }
});
