var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var Modal = require(`../../components/encrypt-modal.jsx`);
var classNames = require('classnames');
var Icon = require(`../../components/footer-icon.jsx`);
var VideoData = require(`../../data/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.jsx`);
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;



module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
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
    setTimeout(()=>{
      this.hideModal();
      this.setState({
        shareModalIsVisible: true
      });
    }, 500);
  },
  socialClicked(e) {
    ga.event({category: "Social", action: "Clicked on " + e.currentTarget.dataset.social});
  },
  render: function() {
    var modalClass = classNames({
      'join-modal': true
    });
    var optionsIndex = this.props.params.video-1;
    var CTA = this.videoOptions[this.props.params.video-1].cta;
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
              <p className="pledge-cta-info">We’re seeing more and more governments attempt to undermine encryption. Will you help others understand what encryption is and stand up for strong encryption when it matters most? Sign on to be an encryption champion.</p>
            </div>
            <div>
              <p className="pledge-cta-why">Let us know what country you’re in so if debates are happening in your country we can email you the most relevant updates. We’ll also send you useful tips about how to use encryption that you can share with friends. </p>
              <Signup preFill={this.props.params} onSubmission={this.userDidSignup} formName="afterVideo" />
            </div>
          </Modal>
        </div>
         <div hidden={!this.state.shareModalIsVisible}>
          	<Modal hideModal={this.hideModal} className="postVideo social-cta">
          <p className="cta-title">{CTA}</p>
          <div className="social">
            <div className="sp-social-circle">
		         	<div className='sp_161947 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
	         	</div>
	         	<div className="sp-social-circle">
		         	<div data-social="facebook" onClick={this.socialClicked} className='sp_161949 sp_fb_small' ></div>
	         	</div>
	         	<div className="sp-social-circle">
	         		<div data-social="twitter" onClick={this.socialClicked}  className='sp_161950 sp_tw_small' ></div>
	         	</div>
          </div>
        </Modal>
        </div>
      </div>
    );
  }
});
