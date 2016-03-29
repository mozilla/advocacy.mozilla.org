var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var CTA = require(`../../components/cta.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var VideoData = require(`../../data/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.jsx`);
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Classnames = require(`classnames`);
var Modal = require(`../../components/encrypt-modal.jsx`);


module.exports = React.createClass({
  getInitialState: function() {
    return {
      didSignup: false,
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      modalIsVisible: false
    };
  },
  componentWillMount() {
    this.videoOptions = VideoData;
  },
  changeVideo(video) {
    var didSignup = this.state.didSignup;
    this.setState(this.getInitialState());
    this.setState({ activeVideo: video, didSignup: didSignup });
  },
  userDidSignup: function() {
    this.setState({
      didSignup: true
    });
    this.showModal();
  },
  setPageState(state) {
    this.setState(state);
  },
  showModal() {
    this.setState({
      modalIsVisible: true
    })
  },
  hideModal: function() {
    this.setState({
      modalIsVisible: false
    });
  },
  componentDidMount: function() {
    var queryParams = this.props.location.query;
    if ( queryParams.country || queryParams.email ) {
      this.knownUserInfo = {
        country: queryParams.country,
        email: queryParams.email
      }
      this.setState({ prefillForm: true });
    }
  },
  render: function() {
    var pageClass = Classnames(
      'v3',
      'encrypt',
      { [`video${this.props.params.video}`]: true }
    );
    var optionsIndex = this.props.params.video - 1;
    var ctaText = this.videoOptions[optionsIndex].cta;

    return (
      <div className={pageClass}>
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo
              pageVersion="3"
              videoType="social"
              video={this.videoOptions[optionsIndex]}
              setPageState={this.setPageState}
              videoDidEnd={this.state.videoDidEnd}
              videoDidStart={this.state.videoDidStart}
              videoIsPaused={this.state.videoIsPaused}
              activeVideo={optionsIndex}
              />
            <Signup dataToPrefill={this.knownUserInfo} onSubmission={this.userDidSignup} ref="signup" className="encrypt-signup" signupSuccessful={this.state.didSignup}>
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text hybrid"
                header={this.videoOptions[optionsIndex].hybridHeader || "Join Mozilla"}
                text={this.videoOptions[optionsIndex].hybridText || "For more resources and videos about encryption and other topics essential to protecting the Web, sign up for email updates from Mozilla."}
                />
            </Signup>
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
        <div hidden={!this.state.modalIsVisible}>
          <Modal hideModal={this.hideModal} className="postVideo social-cta">
            <p className="cta-title">{ctaText}</p>
            <div className="social">
              <div className="sp-social-circle">
                <div className='sp_163584 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="facebook" onClick={this.socialClicked} className='sp_163585 sp_fb_small' ></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="twitter" onClick={this.socialClicked}  className='sp_163586 sp_tw_small' ></div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
});
