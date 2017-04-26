import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

var Footer = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var shareLink = "/" + this.context.intl.locale + "/net-neutrality/share";
    return (
      <footer className="net-neutrality-footer">
        <div className="footer-contents">
          <div className="footer-links">
            <a href="https://www.mozilla.org/contact/" className="footer-link contact">
              Contact Us
            </a>
            <a href={shareLink} className="footer-link share">
              Share this page
            </a>
            <a href="https://twitter.com/Mozilla" className="footer-link follow">
              Follow
            </a>
            <a href="https://www.mozilla.org/about/legal/terms/mozilla/" className="footer-link legal">
              Legal
            </a>
            <a href="https://www.mozilla.org/privacy/websites/" className="footer-link privacy">
              Privacy
            </a>
            <a href="https://donate.mozilla.org/" className="footer-link donate">
              Donate
            </a>
          </div>
          <div className="org-info">
            <div className="logo-container">
              <a className="logo" href="https://mozilla.org"></a>
            </div>
            <span className="org-info-container">
              <FormattedHTMLMessage
                id='footer_description'
              />
            </span>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
