var React = require('react');
var Footer = require('../../components/footer.jsx');
var EncryptVideo = require('../../components/encrypt-video.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var Icon = require('../../components/footer-icon.jsx');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var classNames = require('classnames');



module.exports = React.createClass({
  getInitialState() {
    return {
      videoDidStart: false,
      videoDidEnd: false
    };
  },
  setPageState(state){
    this.setState(state);
  },
  hideModal() {
    this.setState({
      videoDidEnd: false,
      videoDidStart: false
    });
  },
  render: function() {
    return (
      <div className="encrypt v1">
	<EncryptHeader videoDidStart={this.state.videoDidStart}/>
        <main>
	  <EncryptVideo version="1" setPageState={this.setPageState} videoDidEnd={this.state.videoDidEnd} videoDidStart={this.state.videoDidStart}/>
          <ShareThisNow/>
        </main>
        <Footer>
        </Footer>
	{this.state.videoDidEnd ? <Modal hideModal={this.hideModal} className="postVideo social-cta">
          <p>Will you spread the word about why privacy is important?</p>
          <div className="social">
            <div className="social-circle">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="social-circle">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="social-circle">
              <i className="fa fa-twitter"></i>
            </div>
          </div>
        </Modal> : ''}
      </div>
    );
  }
});
