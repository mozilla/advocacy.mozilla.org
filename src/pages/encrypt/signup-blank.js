var React = require(`react`);
var Signup = require(`./signup.js`);
module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <Signup
        hideSignupMeta={true}
        signupHeader={this.context.intl.formatMessage({id: 'sign_up_for_email'})}
      />
    );
  }
});
