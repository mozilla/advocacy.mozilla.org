var React = require(`react`);
var Signup = require(`./signup.js`);

module.exports = React.createClass({
  render: function() {
    return (
      <Signup
        signupHeader="Be safety savvy"
        signupBody="Get tips, news and resources delivered to your inbox from Mozilla, your trusted advocate for a safer, better online life."
      />
    );
  }
});
