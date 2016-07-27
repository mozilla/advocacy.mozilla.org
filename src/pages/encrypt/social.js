var React = require(`react`);
var EncryptFooter = require(`../../components/encrypt-footer.js`);
var EncryptVideo = require(`../../components/encrypt-video.js`);
var Signup = require(`../../components/encrypt-signup.js`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var Modal = require(`../../components/encrypt-modal.js`);
var classNames = require('classnames');
var VideoData = require(`../../data/encryptVideos.js`);
var Playlist = require(`../../components/encrypt-video-playlist.js`);



module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
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
    var CTA = this.context.intl.formatMessage({id: this.videoOptions[this.props.params.video - 1].cta});
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
                  {this.context.intl.formatMessage({id: 'take_the_pledge'})}
                </h2>
                <div className="horizontal-rule"></div>
                <p>
                  {this.context.intl.formatMessage({id: 'help_others'})}
                </p>
                {!this.state.didSignup ? <button onClick={this.showModal} className="button">{this.context.intl.formatMessage({id: 'sign_now'})}</button> : this.context.intl.formatMessage({id: 'thank_you'})}
              </div>
            </div>
            <ShareThisNow params={this.props.params} videos={VideoData}/>
          </div>
        </main>
        <EncryptFooter/>
        <div hidden={!this.state.formIsVisible && !this.state.videoDidEnd}>
          <Modal hideModal={this.hideModal} className="pledge-cta">
            <div>
              <p className="pledge-cta-title">{this.context.intl.formatMessage({id: 'pledge_to_stand'})}</p>
              <p className="pledge-cta-info">{this.context.intl.formatMessage({id: 'undermine_encryption'})}</p>
            </div>
            <div>
              <p className="pledge-cta-why">{this.context.intl.formatMessage({id: 'pledge_why'})}</p>
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
