import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:type" content="website" />
          <meta property="og:image" content="common/assets/logo-og.png" />
          <meta property="og:image:width" content="1400" />
          <meta property="og:image:height" content="1400" />
          <meta property="og:site_name" content="Mozilla Advocacy"/>
          <meta property="og:determiner" content="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Mozilla&rsquo;s Policy & Advocacy Program - Home"/>
          <meta property="og:url" content="http://advocacy.mozilla.org/"/>
          <meta property="description" content="We are building a global movement to protect the free and open Web." />
          <meta property="og:description" content="We are building a global movement to protect the free and open Web."/>

          <meta name="title" content="Home | Mozilla Advocacy"/>
          <meta name="description" content="We Are Building a Global Movement to Protect the Free and Open Web Mozilla supports the heroes of the Web — the developers, advocates and ..."/>
          <link rel="stylesheet" type="text/css" href="/build/encrypt.css"/>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Fira+Sans:300,400,600"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <title>Mozilla Advocacy</title>
        </head>
        <body>
          <div id="my-app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
      </html>
    );
  }
});
