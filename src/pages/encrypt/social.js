var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var EncryptVideo = require(`../../components/encrypt-video.js`);
var Signup = require(`../../components/encrypt-signup.js`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var Modal = require(`../../components/encrypt-modal.js`);
var classNames = require('classnames');
var Icon = require(`../../components/footer-icon.js`);
var VideoData = require(`../../data/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.js`);
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;



module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
      prefillForm: false,
      didSignUp: false,
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      shareModalIsVisible: false
    };
  },
  componentWillMount() {
    this.videoOptions = VideoData;
  },
  changeVideo() {
    var didSignup = this.state.didSignup;
    this.setState(this.getInitialState());
    this.setState({ didSignup: didSignup });
  },
  setPageState(state) {
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
      videoDidStart: false,
      shareModalIsVisible: false
    });
  },
  userDidSignup: function() {
    this.setState({
      didSignup: true
    });
    setTimeout(() => {
      this.hideModal();
      this.setState({
        shareModalIsVisible: true
      });
    }, 500);
  },
  socialClicked(e) {
    ga.event({ category: "Social", action: "Clicked on " + e.currentTarget.dataset.social });
  },
  componentDidMount: function() {
    var queryParams = this.props.location.query;
    if (queryParams.country || queryParams.email) {
      this.knownUserInfo = {
        country: queryParams.country,
        email: queryParams.email
      }
      this.setState({ prefillForm: true });
    }
  },
  render: function() {
    var modalClass = classNames({
      'join-modal': true
    });
    var optionsIndex = this.props.params.video - 1;
    var CTA = this.videoOptions[this.props.params.video - 1].cta;
    return (
      <div className="encrypt v2">
        <EncryptHeader videoDidStart={this.state.videoDidStart} showModal={this.showModal}/>
        <main>
          <EncryptVideo
            pageVersion="2"
            videoType="direct"
            video={this.videoOptions[optionsIndex]}
            setPageState={this.setPageState}
            videoDidEnd={this.state.videoDidEnd}
            videoDidStart={this.state.videoDidStart}
            videoIsPaused={this.state.videoIsPaused}
            activeVideo={optionsIndex}
            />
          <Playlist videoDidStart={this.state.videoDidStart} videos={this.videoOptions} activeVideo={optionsIndex} changeVideo={this.changeVideo} pageType="social"/>
          <div className="dual-cta-wrapper">
            <div className="join-mozilla-wrapper">
              <div className="join-mozilla cta">
                <h2>
                  Take the Pledge
                </h2>
                <div className="horizontal-rule"></div>
                <p>
                  Will you help others understand what encryption is and stand up for strong encryption when it matters most? Sign on to be an encryption champion.
                </p>
                {!this.state.didSignup ? <button onClick={this.showModal} className="button">Sign now</button> : 'Thank you!'}
              </div>
            </div>
            <ShareThisNow params={this.props.params} videos={VideoData}/>
          </div>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
        <div hidden={!this.state.formIsVisible && !this.state.videoDidEnd}>
          <Modal hideModal={this.hideModal} className="pledge-cta">
            <div>
              <p className="pledge-cta-title">Pledge to stand up for strong encryption</p>
              <p className="pledge-cta-info">We’re seeing more and more governments attempt to undermine encryption. Will you help others understand what encryption is and stand up for strong encryption when it matters most? Sign on to Mozilla's email list and be an encryption champion.</p>
            </div>
            <div>
              <p className="pledge-cta-why">Become an encryption champion and sign up for email updates. Let us know what country you’re in so if debates happen near you we can email you the most relevant information. We’ll also email you useful tips about how to use encryption you can share with friends.</p>
              <Signup dataToPrefill={this.knownUserInfo} onSubmission={this.userDidSignup} formName="afterVideo" />
            </div>
          </Modal>
        </div>
        <div hidden={!this.state.shareModalIsVisible}>
          <Modal hideModal={this.hideModal} className="postVideo social-cta">
            <p className="cta-title">{CTA}</p>
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
