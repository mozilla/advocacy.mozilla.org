var React = require('react');
var Footer = require('../../components/footer.jsx');
var EncryptVideo = require('../../components/encrypt-video.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.jsx`);
var ga = require('react-ga');
var Icon = require(`../../components/footer-icon.jsx`);
var Playlist = require(`../../components/encrypt-video-playlist.jsx`);
var VideoData = require(`../../data/encryptVideos.js`);

module.exports = React.createClass({
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
    var CTA = this.videoOptions[this.props.params.video - 1].cta;
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
          <ShareThisNow params={this.props.params} videos={VideoData}/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
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
