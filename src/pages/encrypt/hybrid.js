var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Signup = require(`../../components/encrypt-signup.js`);
var CTA = require(`../../components/cta.js`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.js`);
var Icon = require(`../../components/footer-icon.js`);
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
      this.props.location.query.test,
      { [`video${this.props.params.video}`]: true }
    );
    var optionsIndex = this.props.params.video - 1;
    var ctaText = this.context.intl.formatMessage({id: this.videoOptions[optionsIndex].cta});
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
                <div className='sp_164044 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="facebook" onClick={this.socialClicked} className='sp_164043 sp_fb_small' ></div>
              </div>
              <div className="sp-social-circle">
                <div data-social="twitter" onClick={this.socialClicked}  className='sp_164042 sp_tw_small' ></div>
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
    var desc = this.videoOptions[optionsIndex].hybridDescription || "";
    if (desc) {
      desc = this.context.intl.formatMessage({id: desc})
    }
    var signupButtonText = this.props.signupButtonText || this.context.intl.formatMessage({id: 'update_my_info'});
    return (
      <div className={pageClass}>
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo
              pageVersion="3"
              videoType="social"
              video={this.videoOptions[optionsIndex]}
              description={desc}
              setPageState={this.setPageState}
              videoDidEnd={this.state.videoDidEnd}
              videoDidStart={this.state.videoDidStart}
              videoIsPaused={this.state.videoIsPaused}
              activeVideo={optionsIndex}
              hideVideoMeta={this.props.hideVideoMeta || false}
              />
            <Signup dataToPrefill={this.knownUserInfo} submitButtonText={signupButtonText} onSubmission={this.props.userDidSignup || this.userDidSignup} ref="signup" className="encrypt-signup" signupSuccessful={this.state.didSignup}>
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text hybrid"
                header={this.props.signupHeader || hybridHeader || this.context.intl.formatMessage({id: 'join_mozilla'})}
                text={this.props.signupBody || hybridText || this.context.intl.formatMessage({id: 'signup_for_resources'})}
                />
            </Signup>
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">{this.context.intl.formatMessage({id: "join_the_convo"})}</Icon>
        </Footer>
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
