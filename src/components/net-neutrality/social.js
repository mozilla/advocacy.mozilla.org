import React from 'react';

// ShareProgress is a third party service that does share message AB tests.
var ShareProgressButton = React.createClass({
  componentDidMount: function() {
    this.shareProgressHolder = document.querySelector(".share-progress-holder");
    this.shareProgressButton = this.shareProgressHolder.querySelector("." + this.props.shareProgress);
    if (this.shareProgressButton && this.shareProgressContainer) {
      this.shareProgressHolder.removeChild(this.shareProgressButton);
      this.shareProgressContainer.appendChild(this.shareProgressButton);
    }
  },
  componentWillUnmount: function() {
    if (this.shareProgressButton && this.shareProgressContainer) {
      this.shareProgressContainer.removeChild(this.shareProgressButton);
      this.shareProgressHolder.appendChild(this.shareProgressButton);
    }
  },
  render: function() {
    return (
      <div onClick={this.props.onClick} className="share-progress-wrapper">
        <div ref={(container) => { this.shareProgressContainer = container; }}></div>
        {this.props.children}
      </div>
    );
  }
});

var SocialButton = React.createClass({
  render: function() {
    return (
      <a {...this.props} target="_blank">
        {this.props.children}
      </a>
    );
  }
});

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var appURL = process.env.APPLICATION_URI;
    var locale = this.context.intl.locale;
    var twitterShareURL = 'https://twitter.com/share?url=' + appURL +'/' + locale + '/&text=' + encodeURIComponent(this.context.intl.formatMessage({id: 'sharing_twitter_b'}));
    var facebookShareURL = 'https://www.facebook.com/sharer/sharer.php?u=' + appURL + '/' + locale + '/';
    var emailSubject = this.context.intl.formatMessage({id: 'sharing_email_internet_subject_b'});
    var emailBody = this.context.intl.formatMessage({id: 'sharing_email_body_b'});
    var emailShareURL = 'mailto:someone@example.com?subject='+ emailSubject +'&body='+ emailBody +'';

    // We only support ShareProgress in English based locales.
    // For other locales we just directly use the share APIs.
    if (/^(en)(\b|$)/.test(locale)) {
      return (
        <div className="social-container">
          <ShareProgressButton shareProgress="sp_fb_small">
            <i className="fa fa-facebook" aria-hidden="true"/>
          </ShareProgressButton>
          <ShareProgressButton shareProgress="sp_tw_small">
            <i className="fa fa-twitter" aria-hidden="true"/>
          </ShareProgressButton>
          <ShareProgressButton onClick={this.emailClick} shareProgress="sp_em_small">
            <i className="fa fa-envelope" aria-hidden="true"/>
          </ShareProgressButton>
        </div>
      );
    }

    return (
      <div className="social-container">
        <SocialButton href={facebookShareURL}>
          <i className="fa fa-facebook" aria-hidden="true"/>
        </SocialButton>
        <SocialButton href={twitterShareURL}>
          <i className="fa fa-twitter" aria-hidden="true"/>
        </SocialButton>
        <SocialButton href={emailShareURL}>
          <i className="fa fa-envelope" aria-hidden="true"/>
        </SocialButton>
      </div>
    );
  }
});
