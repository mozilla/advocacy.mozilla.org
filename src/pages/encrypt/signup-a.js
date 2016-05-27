var React = require(`react`);
var Signup = require(`./signup.js`);

module.exports = React.createClass({
  render: function() {
    return (
      <Signup
        signupHeader="Become an encryption champion"
        signupBody="At Mozilla, we advocate for security and privacy online. Sign up to get updates, news and opportunities to stand with us."
      />
    );
  }
});
