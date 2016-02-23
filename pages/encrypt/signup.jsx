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
    this.setState({
      didSignup: true
    });
    setTimeout(this.hideModal, 2000);
  },
  render: function() {
    var modalClass = classNames({
      'join-modal': true
    });
    return (
      <div className="encrypt signup">
        <main>
            <div className="join-mozilla">
              <h2>Join Mozilla</h2>
              <p>Mozilla stands up for online privacy. If you want to be in-the-know about our work and learn about opportunities to stand with us, sign up to be on our email list. We’ll send you important updates, news, and opportunities to take action.</p>
            </div>
            <Signup submitButtonText="Sign Up" onSubmission={this.userDidSignup}>
            <div className="why">Why do we ask for this information?</div>
            </Signup>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
      </div>
    );
  }
});
