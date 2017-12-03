import React from 'react';
import reactGA from 'react-ga';

var SocialButton = React.createClass({
  onClick: function() {
    reactGA.event({
      category: "Social",
      action: this.props.type + " share clicked",
      label: "Net Neutrality"
    });
  },
  render: function() {
    return (
      <a onClick={e => this.onClick(e)} {...this.props} target="_blank">
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
    var appURL = "https://advocacy.mozilla.org";
    var locale = this.context.intl.locale;
    var twitterShareURL = 'https://twitter.com/share?url=' + appURL +'/' + locale + '/net-neutrality/&text=' + encodeURIComponent("Last week Federal Communications Commission Chairman Ajit Pai revealed the anti-net-neutrality proposal his agency is set to vote on December 14. Will you call Congress and ask them to stop the vote?");
    var facebookShareURL = 'https://www.facebook.com/sharer/sharer.php?u=' + appURL + '/' + locale + '/';
    var emailSubject = "Join me in protecting net neutrality";
    var emailBody = "Last week Federal Communications Commission Chairman Ajit Pai revealed the anti-net-neutrality proposal his agency is set to vote on December 14. Will you call Congress and ask them to stop the vote?";
    var emailShareURL = 'mailto:someone@example.com?subject='+ emailSubject +'&body='+ emailBody +'';

    return (
      <div className="social-container">
        <SocialButton href={facebookShareURL} type="facebook">
          <i className="fa fa-facebook" aria-hidden="true"/>
        </SocialButton>
        <SocialButton href={twitterShareURL} type="twitter">
          <i className="fa fa-twitter" aria-hidden="true"/>
        </SocialButton>
        <SocialButton href={emailShareURL} type="email">
          <i className="fa fa-envelope" aria-hidden="true"/>
        </SocialButton>
      </div>
    );
  }
});
