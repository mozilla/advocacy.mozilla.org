var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var classNames = require('classnames');
var Icon = require(`../../components/footer-icon.jsx`);
var Link = require('react-router').Link;


module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false,
    };
  },
  render: function() {
    return (
      <div className="encrypt signup complete">
      <a className="tabzilla" href="https://mozilla.org" aria-label="Mozilla"></a>
        <main>
          <div className="signup-complete">
            <p className="next-step"><span className="excited">Great!</span> Look for a confirmation email in your inbox with the last step to complete the signup process.</p>
            <p><i className="fa fa-arrow-right"></i><a className="exit-link" href="https://advocacy.mozilla.org/encrypt/2">Take me to the encryption website.</a></p>
          </div>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
      </div>
    );
  }
});
