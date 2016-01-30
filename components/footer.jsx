var React = require('react');
var Icon = React.createClass({
  render: function() {
    return (
      <div className="icon-container">
        <div className="icon">
          <img className="footer-icon" src={this.props.src}></img>
          <a href={this.props.href}>{this.props.children}</a>
        </div>
      </div>
    );
  }
});
module.exports = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <Icon href="https://www.mozilla.org/contact/" src="/assets/footer-icon-help.svg" title="">Contact Us</Icon>
        <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">Connect on Twitter</Icon>
        <Icon href="https://www.mozilla.org/en-US/about/legal.html" src="/assets/footer-icon-terms.svg" title="">Legal</Icon>
        <Icon href="https://www.mozilla.org/en-US/privacy/" src="/assets/footer-icon-privacy.svg" title="">Privacy Policy</Icon>
        <div className="footer-content">
          <div>
            <img height="30" width="105" src="/assets/mozilla-wordmark.svg"/>
          </div>
          <div className="horizontal-rule"></div>
          <p>
            Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at <a href="//mozilla.org">mozilla.org</a>
          </p>
        </div>
      </div>
    );
  }
});
