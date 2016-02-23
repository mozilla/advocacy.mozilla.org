var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var CTA = require(`../../components/cta.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var VideoData = require(`../../components/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.jsx`);


module.exports = React.createClass({
  getInitialState: function() {
    return {
      didSignup: false,
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      activeVideo: 1
    };
  },
  componentWillMount() {
    this.videoOptions = VideoData;
  },
  changeVideo(video){
    var didSignup = this.state.didSignup;
    this.setState(this.getInitialState());
    this.setState({activeVideo: video, didSignup: didSignup});
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
            <EncryptVideo
              pageVersion="3"
              videoType="social"
              video={this.videoOptions[this.state.activeVideo]}
              setPageState={this.setPageState}
              videoDidEnd={this.state.videoDidEnd}
              videoDidStart={this.state.videoDidStart}
              videoIsPaused={this.state.videoIsPaused}
              activeVideo={this.state.activeVideo}
            />
            <Signup onSubmission={this.userDidSignup} ref="signup" className="encrypt-signup" signupSuccessful={this.state.didSignup}>
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, sign up for email updates from Mozilla."
              />
            </Signup>
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
      </div>
    );
  }
});
