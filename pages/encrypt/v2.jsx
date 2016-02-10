var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var Modal = require(`../../components/encrypt-modal.jsx`);
var classNames = require('classnames');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false,
      videoDidStart: false,
      videoDidEnd: false
    };
  },
  setPageState(state){
    this.setState(state);
  },
  showModal: function(e) {
    e.preventDefault();
    this.setState({
      formIsVisible: true
    });
  },
  hideModal: function() {
    this.setState({
      formIsVisible: false,
      videoDidEnd: false,
      videoDidStart: false
    });
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
      <div className="encrypt v2">
      <EncryptHeader videoDidStart={this.state.videoDidStart} showModal={this.showModal}/>
        <main>
    	  <EncryptVideo version="2" className="video-wrapper" setPageState={this.setPageState} videoDidEnd={this.state.videoDidEnd} videoDidStart={this.state.videoDidStart}/>
          <div className="dual-cta-wrapper">
            <div className="join-mozilla-wrapper">
              <div className="join-mozilla cta">
                <h2>
                 Join Mozilla
                </h2>
                <div className="horizontal-rule"></div>
                <p>
                  For more resources and videos about encryption and other topics essential to protecting the Web, sign up for email updates from Mozilla.
                </p>
                {!this.state.didSignup ? <button onClick={this.showModal} className="button">Sign up</button> : 'Thank you!'}
              </div>
            </div>
            <ShareThisNow/>
          </div>
        </main>
        <Footer>
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
	{this.state.videoDidEnd ? <Modal hideModal={this.hideModal} className="postVideo signup-cta">
	  <p>Stand with us for privacy and a free and open Internet.<br/>Sign on.</p>
	  <Signup />
	</Modal> : ''}
      </div>
    );
  }
});
