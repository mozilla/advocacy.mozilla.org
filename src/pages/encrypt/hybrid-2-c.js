var React = require('react');
var Page = require(`./hybrid.js`);

var HybridVariant = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object,
    router: React.PropTypes.object
  },
  render: function() {
    return (
      <div>
        <Page
          params={{
            video: '2',
            type: 'hybrid'
          }}
          signupHeader={this.context.intl.formatMessage({id: 'signup_header_variant_c'})}
          signupBody={this.context.intl.formatMessage({id: 'signup_body_variant_c'})}
          hideVideoMeta={true}
          location={this.props.location}
          signupButtonText={this.context.intl.formatMessage({id: 'sign_up'})}
          userDidSignup={() => {
            var locale = this.context.intl.locale;
            this.context.router.replace("/" + locale + '/encrypt/signup-complete/' + window.location.search);
          }}
        />
      </div>
    );
  }
});

module.exports = HybridVariant;
