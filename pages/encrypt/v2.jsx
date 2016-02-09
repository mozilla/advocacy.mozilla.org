var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var Modal = require(`../../components/encrypt-modal.jsx`);

module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false
    };
  },
  showModal: function(e) {
    e.preventDefault();
    this.setState({
      formIsVisible: true
    });
  },
  hideModal: function() {
    this.setState({
      formIsVisible: false
    });
  },
  userDidSignup: function() {
    this.setState({
      didSignup: true
    });
    this.hideModal();
    console.log('userDidSignup');
  },
  render: function() {
    return (
      <div className="encrypt v2">
        <EncryptHeader showModal={this.showModal} />
        <main>
          <EncryptVideo className="video-wrapper" />
          <div className="dual-cta-wrapper">
            <div className="join-mozilla-wrapper">
              <div className="join-mozilla cta">
                <h2>
                 Join Mozilla
                </h2>
                <div className="horizontal-rule"></div>
                <p>
                  For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla.
                </p>
                {!this.state.didSignup ? <button onClick={this.showModal} className="button">Sign up</button> : 'Thank you!'}
              </div>
            </div>
            <ShareThisNow/>
          </div>
        </main>
        <Footer>
          <Icon><div className="social-circle"><i className="fa fa-medium"></i></div>Join the Conversation</Icon>
        </Footer>
        { this.state.formIsVisible ?
          <Modal className="join-modal" hideModal={this.hideModal}>
            <div className="cta">
              <h2 aria-role="label">Join the list</h2>
              <div className="horizontal-rule"></div>
              <Signup submitButtonText="Subscribe" onSubmission={this.userDidSignup}/>
            </div>
          </Modal>
          : '' }
      </div>
    );
  }
});
