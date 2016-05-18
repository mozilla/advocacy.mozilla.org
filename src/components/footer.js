var React = require(`react`);
var Icon = require(`./footer-icon.js`);

module.exports = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div>
          <Icon href="https://www.mozilla.org/contact/" src="/assets/footer-icon-help.svg" title="">Contact Us</Icon>
          <Icon href="https://twitter.com/Mozilla" src="/assets/footer-icon-twitter.svg" title="">Connect on Twitter</Icon>
          {this.props.children}
          <Icon href="https://www.mozilla.org/en-US/about/legal.html" src="/assets/footer-icon-terms.svg" title="">Legal</Icon>
          <Icon href="https://www.mozilla.org/en-US/privacy/" src="/assets/footer-icon-privacy.svg" title="">Privacy Policy</Icon>
          <Icon href="https://donate.mozilla.org" src="/assets/heart.svg" title="Heart">Donate</Icon>
        </div>
        <div className="footer-content">
          <div>
            <a href="https://mozilla.org"><img height="30" width="105" src="/assets/mozilla-wordmark.svg"/></a>
          </div>
          <div className="horizontal-rule"></div>
          <p>
            Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the Web for the public good. Visit us at <a href="//mozilla.org">mozilla.org</a>
          </p>
        </div>
      </footer>
    );
  }
});
