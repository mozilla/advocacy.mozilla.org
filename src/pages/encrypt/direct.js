var React = require('react');
var Footer = require('../../components/footer.js');
var EncryptVideo = require('../../components/encrypt-video.js');
var CodemojiBanner = require(`../../components/codemoji-banner.js`);
var ShareThisNow = require('../../components/encrypt-share-this-now');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.js`);
var ga = require('react-ga');
var Icon = require(`../../components/footer-icon.js`);
var Playlist = require(`../../components/encrypt-video-playlist.js`);
var VideoData = require(`../../data/encryptVideos.js`);

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState() {
    return {
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false
    };
  },
  componentWillMount() {
    this.videoOptions = VideoData;
  },
  setPageState(state) {
    this.setState(state);
  },
  hideModal() {
    this.setState({
      videoDidEnd: false,
      videoDidStart: false
    });
  },
  changeVideo(video) {
    this.setState(this.getInitialState());
  },
  socialClicked(e) {
    ga.event({ category: "Social", action: "Clicked on " + e.currentTarget.dataset.social });
  },
  render: function() {
    var CTA = this.context.intl.formatMessage({id: this.videoOptions[this.props.params.video - 1].cta});
    return (
      <div className="encrypt v1">
        <EncryptHeader videoDidStart={this.state.videoDidStart}/>
        <main>
          <EncryptVideo
            pageVersion="1"
            videoType="social"
            video={this.videoOptions[this.props.params.video - 1]}
            setPageState={this.setPageState}
            videoDidEnd={this.state.videoDidEnd}
            videoDidStart={this.state.videoDidStart}
            videoIsPaused={this.state.videoIsPaused}
            activeVideo={this.props.params.video - 1}
            />
          <Playlist pageType="direct" videoDidStart={this.state.videoDidStart} videos={this.videoOptions} activeVideo={this.props.params.video - 1} changeVideo={this.changeVideo}/>
          <CodemojiBanner/>
          <ShareThisNow params={this.props.params}/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">{this.context.intl.formatMessage({id: "join_the_convo"})}</Icon>
        </Footer>
        <div hidden={!this.state.videoDidEnd}>
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
