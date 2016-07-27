var React = require(`react`);
var Signup = require(`../../components/encrypt-signup.js`);
var CTA = require(`../../components/cta.js`);
var CodemojiBanner = require(`../../components/codemoji-banner.js`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptFooter = require(`../../components/encrypt-footer`);
var EncryptVideo = require(`../../components/encrypt-video.js`);
var VideoData = require(`../../data/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.js`);
var Classnames = require(`classnames`);
var Modal = require(`../../components/encrypt-modal.js`);


module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
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
    if (window && window.optimizely && optimizely.variationNamesMap && optimizely.variationNamesMap[5424952201] === "Share Progress") {
      window.location.assign('http://share.mozilla.org/352/163971');
    } else {
      this.showModal();
    }
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
    if (queryParams.country || queryParams.email) {
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
      'codemoji-page',
      this.props.location.query.test,
      { [`video${this.props.params.video}`]: true }
    );
    var optionsIndex = this.props.params.video - 1;
    var ctaText = this.context.intl.formatMessage({id: "encryption_essential_cta"});
    var nonOptimizelyShareBtns = (<div className="social">
      <div className="sp-social-circle">
        <div className='sp_163584 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
      </div>
      <div className="sp-social-circle">
        <div data-social="facebook" onClick={this.socialClicked} className='sp_163585 sp_fb_small' ></div>
      </div>
      <div className="sp-social-circle">
        <div data-social="twitter" onClick={this.socialClicked}  className='sp_163586 sp_tw_small' ></div>
      </div>
    </div>);

    var optimizelyShareBtns = (
      <div className="social">
              <div className="sp-social-circle">
                <div className='sp_169721 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="facebook" onClick={this.socialClicked} className='sp_169722 sp_fb_small' ></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="twitter" onClick={this.socialClicked}  className='sp_169724 sp_tw_small' ></div>
              </div>
            </div>);


    var hybridHeader = this.videoOptions[optionsIndex].hybridHeader;
    if (hybridHeader) {
      hybridHeader = this.context.intl.formatMessage({id: hybridHeader});
    }
    var hybridText = this.videoOptions[optionsIndex].hybridText;
    if (hybridText) {
      hybridText = this.context.intl.formatMessage({id: hybridText});
    }
    return (
      <div className={pageClass}>
        <EncryptHeader headerMessage={this.context.intl.formatMessage({id: 'video_data_desc_1b'})}/>
        <main className="page">
          <div className="videoSection">
            <div>
              <EncryptVideo
                pageVersion="3"
                videoType="social"
                video={this.videoOptions[optionsIndex]}
                setPageState={this.setPageState}
                videoDidEnd={this.state.videoDidEnd}
                videoDidStart={this.state.videoDidStart}
                videoIsPaused={this.state.videoIsPaused}
                activeVideo={optionsIndex}
                hideVideoMeta={this.props.hideVideoMeta || true}
                hideVideoDesc={this.props.hideVideoDesc || true}
                socialButtonLink="https://share.mozilla.org/352/169283"
                />
              <Playlist playlistTitle={this.context.intl.formatMessage({id: this.videoOptions[optionsIndex]["title-b"]})} pageType="codemoji" videoDidStart={this.state.videoDidStart} videos={this.videoOptions} activeVideo={this.props.params.video - 1} changeVideo={this.changeVideo}/>
            </div>
            <Signup dataToPrefill={this.knownUserInfo} submitButtonText={this.context.intl.formatMessage({id: 'sign_up'})} onSubmission={this.userDidSignup} ref="signup" className="encrypt-signup" signupSuccessful={this.state.didSignup}>
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text hybrid"
                text={this.context.intl.formatMessage({id: 'signup_body_variant_a'})}
                />
            </Signup>
          </div>
          <CodemojiBanner />
        </main>
        <EncryptFooter shareThisPage="https://share.mozilla.org/352/169283"/>
        <div hidden={!this.state.modalIsVisible}>
          <Modal hideModal={this.hideModal} className="postVideo social-cta">
            <p className="cta-title">{ctaText}</p>
            {(typeof window !== 'undefined' && window.optimizely && optimizely.variationNamesMap && optimizely.variationNamesMap[5424952201]) ? optimizelyShareBtns : nonOptimizelyShareBtns}
          </Modal>
        </div>
      </div>
    );
  }
});
