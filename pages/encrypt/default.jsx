var React = require('react');
var Footer = require('../../components/footer.jsx');
var EncryptVideo = require('../../components/encrypt-video.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var ImageTag = require('../../components/imagetag.jsx');
var Icon = require('../../components/footer-icon.jsx');
var EncryptHeader = require('../../components/encrypt-header');
var Modal = require(`../../components/encrypt-modal.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);



module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt v1">
        <EncryptHeader />
        <main>
          <EncryptVideo/>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon><div className="social-circle"><i className="fa fa-medium"></i></div>Join the Conversation</Icon>
        </Footer>
        <Modal className="postVideo signup-cta">
          <p>Stand with us for privacy and a free and open Internet.<br/>Sign on.</p>
          <Signup />
        </Modal>
        <Modal className="postVideo social-cta">
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
        </Modal>

      </div>
    );
  }
});
