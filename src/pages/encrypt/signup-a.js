var React = require(`react`);
var Signup = require(`./signup.js`);

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <Signup
        signupHeader={this.context.intl.formatMessage({id: 'signup_header_variant_a'})}
        signupBody={this.context.intl.formatMessage({id: 'signup_body_variant_a'})}
      />
    );
  }
});
