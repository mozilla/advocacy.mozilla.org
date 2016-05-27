var React = require(`react`);
var Signup = require(`./signup.js`);

module.exports = React.createClass({
  render: function() {
    return (
      <Signup
        signupHeader="Get in the loop"
        signupBody="Mozilla is tracking Internet issues like encryption that touch our daily lives, sometimes in hidden ways. Sign up to stay informed about important news, updates and more."
      />
    );
  }
});
