var React = require('react');
var Footer = require('../../components/footer.jsx');
var EncryptVideo = require('../../components/encrypt-video.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var classNames = require('classnames');
var ga = require('react-ga');
var Icon = require(`../../components/footer-icon.jsx`);
var Playlist = require(`../../components/encrypt-video-playlist.jsx`);
var VideoData = require(`../../components/encryptVideos.js`);


module.exports = React.createClass({
  getInitialState() {
    return {
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      activeVideo: 1
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
  changeVideo(video){
    this.setState(this.getInitialState());
    this.setState({activeVideo: video});
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
            video={this.videoOptions[this.state.activeVideo]}
            setPageState={this.setPageState}
            videoDidEnd={this.state.videoDidEnd}
            videoDidStart={this.state.videoDidStart}
            videoIsPaused={this.state.videoIsPaused}
            activeVideo={this.state.activeVideo}
          />
          <Playlist videoDidStart={this.state.videoDidStart} videos={this.videoOptions} activeVideo={this.state.activeVideo} changeVideo={this.changeVideo}/>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://medium.com/encryption-matters" src="/assets/footer-icon-medium.svg" title="Medium">Join the Conversation</Icon>
        </Footer>
          {this.state.videoDidEnd ? <Modal hideModal={this.hideModal} className="postVideo social-cta">
          <p className="cta-title">Will you spread the word about why privacy is important?</p>
          <div className="social">
            <a href="mailto:?&subject=Sharing a video I thought you’d like. &body=I just watched a great video about online privacy and thought you would really like it. Check it out at https://mzl.la/encrypt. Hope you enjoy it as much as I did!" className="social-circle">
              <i data-social="email" onClick={this.socialClicked} className="fa fa-envelope"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://advocacy.mozilla.org/encrypt/" className="social-circle">
              <i data-social="facebook" onClick={this.socialClicked} className="fa fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/intent/tweet?via=mozilla&text=I+just+watched+a+great+video+about+online+privacy+and+how+it+lets+%23youbeyou.+Check+it+out+at+mzl.la/encrypt" className="social-circle">
              <i data-social="twitter" onClick={this.socialClicked} className="fa fa-twitter"></i>
            </a>
          </div>
        </Modal> : ''}
      </div>
    );
  }
});
