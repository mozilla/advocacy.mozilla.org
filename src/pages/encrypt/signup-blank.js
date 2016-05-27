var React = require(`react`);
var Signup = require(`./signup.js`);

module.exports = React.createClass({
  render: function() {
    return (
      <Signup
        hideSignupMeta={true}
        signupHeader="Sign up for Mozilla email"
      />
    );
  }
});
