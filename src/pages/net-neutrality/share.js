import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import Header from '../../components/net-neutrality/header.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';

var Signup = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var className = "share";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    var appURL = process.env.APPLICATION_URI;
    var locale = this.context.intl.locale;
    var twitterShareURL = 'https://twitter.com/share?url=' + appURL +'/' + locale + '/&text=' + encodeURIComponent("twitter share");
    var facebookShareURL = 'https://www.facebook.com/sharer/sharer.php?u=' + appURL + '/' + locale + '/';
    var emailSubject = "email subject";
    var emailBody1 = "email body 1";
    var emailBody2 = "email body 2";
    var emailBody3 = "email body 3";
    var emailShareURL = 'mailto:someone@example.com?subject='+ emailSubject +'&body='+ emailBody1 + `%0D%0A%0D%0A` + emailBody2 + `%0D%0A%0D%0A` + emailBody3 +'';

    return (
      <div className={className}>
        <div className="page">
          <SimpleNav/>
          <div className="share-page-container">
            <div className="share-page-content-container">
              <div className="share-page-content">
                <h2>
                  thank you title
                </h2>
                <p>
                  thank you paragraph
                </p>
                <div className="share-buttons">
                  <a className="share-button email-button" href={emailShareURL} target="_blank">
                    <i className="fa fa-envelope fa-1x"></i>
                  </a>
                  <a className="share-button facebook-button" href={facebookShareURL} target="_blank">
                    <i className="fa fa-facebook fa-1x"></i>
                  </a>
                  <a className="share-button twitter-button" href={twitterShareURL} target="_blank">
                    <i className="fa fa-twitter fa-1x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Signup;
