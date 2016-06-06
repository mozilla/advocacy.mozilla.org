var React = require(`react`);
var Icon = require(`./footer-icon.js`);
import { FormattedHTMLMessage } from 'react-intl';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var shareItem = (<Icon href="https://twitter.com/Mozilla" src="/assets/footer-icon-twitter.svg" title="">{this.context.intl.formatMessage({id: 'connect_twitter'})}</Icon>);
    if (this.props.shareThisPage) {
      shareItem = (<Icon href={this.props.shareThisPage} src="/assets/footer-icon-share.svg" title="">{this.context.intl.formatMessage({id: 'share_this_page'})}</Icon>);
    }
    return (
      <footer className="footer">
        <div>
          <Icon href="https://www.mozilla.org/contact/" src="/assets/footer-icon-help.svg" title="">{this.context.intl.formatMessage({id: 'contact_us'})}</Icon>
          {shareItem}
          {this.props.children}
          <Icon href="https://www.mozilla.org/about/legal.html" src="/assets/footer-icon-terms.svg" title="">{this.context.intl.formatMessage({id: 'legal'})}</Icon>
          <Icon href="https://www.mozilla.org/privacy/" src="/assets/footer-icon-privacy.svg" title="">{this.context.intl.formatMessage({id: 'privacy_policy'})}</Icon>
          <Icon href="https://donate.mozilla.org" src="/assets/heart.svg" title="Heart">{this.context.intl.formatMessage({id: 'donate'})}</Icon>
        </div>
        <div className="footer-content">
          <div>
            <a href="https://mozilla.org"><img height="30" width="105" src="/assets/mozilla-wordmark.svg"/></a>
          </div>
          <div className="horizontal-rule"></div>
          <p>
            <FormattedHTMLMessage
              id='mozilla_blerb'
            />
          </p>
        </div>
      </footer>
    );
  }
});
