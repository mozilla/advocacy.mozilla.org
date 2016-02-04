var React = require('react');
var Footer = require('../../components/footer.jsx');
var Video = require('../../components/video.jsx');
var ImageTag = require('../../components/imagetag.jsx');
var Signup = require('../../components/signup.jsx');
var CTA = require('../../components/cta.jsx');
var Icon = require('../../components/footer-icon.jsx');
var ShareThisNow = require('../../components/encrypt-share-this-now');
var EncryptHeader = require('../../components/encrypt-header');
var EncryptVideo = require('../../components/encrypt-video.jsx');



module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt v3">
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo />
            <Signup className="encrypt-signup">
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla."
              />
            </Signup>
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">FIXME</Icon>
        </Footer>
      </div>
    );
  }
});
