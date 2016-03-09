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
    ga.event({category: "Social", action: "Clicked on " + e.target.dataset.social});
  },
  render: function() {
    return (
      <div className="encrypt v1">
        <EncryptHeader videoDidStart={this.state.videoDidStart}/>
        <main>
          <EncryptVideo
            pageVersion="1"
            videoType="social"
            video={this.videoOptions[this.props.params.video-1]}
            setPageState={this.setPageState}
            videoDidEnd={this.state.videoDidEnd}
            videoDidStart={this.state.videoDidStart}
            videoIsPaused={this.state.videoIsPaused}
            activeVideo={this.props.params.video-1}
          />
          <Playlist pageType="direct" videoDidStart={this.state.videoDidStart} videos={this.videoOptions} activeVideo={this.props.params.video-1} changeVideo={this.changeVideo}/>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
          {this.state.videoDidEnd ? <Modal hideModal={this.hideModal} className="postVideo social-cta">
          <p className="cta-title">Will you spread the word about our friend, encryption?</p>
          <div className="social">
            <a href="mailto:?&subject=Check out this great video on encryption.&body=I just watched a video about how encryption works in our everyday lives and thought you would really like it. Check it out at https://mzl.la/encrypt. Hope you enjoy it!" className="social-circle">
              <i data-social="email" onClick={this.socialClicked} className="fa fa-envelope"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://advocacy.mozilla.org/encrypt/?video=2" className="social-circle">
              <i data-social="facebook" onClick={this.socialClicked} className="fa fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20learned%20how%20encryption%20works%20in%20our%20everyday%20lives.%20Check%20it%20out%20at%20mzl.la%2Fencrypt%20via%20%40mozilla%20%23encrypt" className="social-circle">
              <i data-social="twitter" onClick={this.socialClicked} className="fa fa-twitter"></i>
            </a>
          </div>
        </Modal> : ''}
      </div>
    );
  }
});
