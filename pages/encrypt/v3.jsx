var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var CTA = require(`../../components/cta.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);

module.exports = React.createClass({
  getInitialState: function() {
    return {
      didSignup: false,
      videoDidStart: false,
      videoDidEnd: false
    };
  },
  userDidSignup: function() {
    this.setState({
      didSignup: true
    });
  },
  setPageState(state) {
    this.setState(state);
  },
  hideModal: function() {
    this.setState({
      videoDidEnd: false,
      videoDidStart: false
    });
  },
  render: function() {
    return (
      <div className="encrypt v3">
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo version="3" setPageState={this.setPageState} videoDidEnd={this.state.videoDidEnd} videoDidStart={this.state.videoDidStart}/>
            <Signup onSubmission={this.userDidSignup} ref="signup" className="encrypt-signup" signupSuccessful={this.state.didSignup}>
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla."
              />
          </Signup>
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
        </Footer>
      </div>
    );
  }
});
