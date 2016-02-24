var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var classNames = require('classnames');
var Icon = require(`../../components/footer-icon.jsx`);
var Link = require('react-router').Link;


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false,
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      activeVideo: 1
    };
  },
  setPageState(state){
    this.setState(state);
  },
  userDidSignup: function() {
    this.context.router.replace('/encrypt/signup-complete');
  },
  render: function() {
    var modalClass = classNames({
      'join-modal': true
    });
    return (
      <div className="encrypt signup">
      <a className="tabzilla" href="https://mozilla.org" aria-label="Mozilla"></a>
        <main>
          <div className="signup-page-content">
            <div className="join-mozilla">
              <h1>Join Mozilla</h1>
              <p>Mozilla stands up for online privacy. If you want to be in-the-know about our work and learn about opportunities to stand with us, sign up to be on our email list. We’ll send you important updates, news, and opportunities to take action.</p>
            </div>
            <Signup submitButtonText="Sign Up" onSubmission={this.userDidSignup}>
            </Signup>
          </div>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
      </div>
    );
  }
});
