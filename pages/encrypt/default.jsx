var React = require('react');
var Footer = require('../../components/footer.jsx');
var EncryptVideo = require('../../components/encrypt-video.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var classNames = require('classnames');
var ga = require('react-ga');

module.exports = React.createClass({
  getInitialState() {
    return {
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false
    };
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
  socialClicked(e) {
    ga.event({category: "Social", action: "Clicked on " + e.target.dataset.social});
  },
  render: function() {
    return (
      <div className="encrypt v1">
        <EncryptHeader videoDidStart={this.state.videoDidStart}/>
        <main>
          <EncryptVideo version="1" setPageState={this.setPageState} videoDidEnd={this.state.videoDidEnd} videoDidStart={this.state.videoDidStart} videoIsPaused={this.state.videoIsPaused}/>
          <ShareThisNow/>
        </main>
        <Footer>
          <div className="icon-container">
            <div className="icon">
              <div className="social-circle footer-icon">
                <i className="fa fa-medium"></i>
              </div>
              <a href="https://medium.com/encryption-matters">Join the Conversation</a>
            </div>
          </div>
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
            <a target="_blank" href="https://twitter.com/intent/tweet?url=advocacy.mozilla.org/encrypt&via=mozilla&text=I+just+watched+a+great+video+about+online+privacy+and+how+it+lets+%23youbeyou.+Check+it+out+at+mzl.la/encrypt" className="social-circle">
              <i data-social="twitter" onClick={this.socialClicked} className="fa fa-twitter"></i>
            </a>
          </div>
        </Modal> : ''}
      </div>
    );
  }
});
