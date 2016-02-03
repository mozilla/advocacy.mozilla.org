var React = require('react');
var Footer = require('../../components/footer.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Video = require('../../components/video.jsx');
var ImageTag = require('../../components/imagetag.jsx');
var Signup = require('../../components/signup.jsx');
var CTA = require('../../components/cta.jsx');
var Icon = require('../../components/footer-icon.jsx');
var ShareThisNow = require('../../components/share-this-now');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt v3">
        <div className="header">
          <div className="header-content">
            <ImageTag className="logo" height={30} width={105} src1x="/assets/logo-mozilla.svg" alt="Mozilla logo"/>
          </div>
        </div>
        <HeroUnit>
          <div className="encryptText">
            <img src="http://dummyimage.com/960x200/5381b9/f46060.png&text=Encrypt"/>
          </div>
        </HeroUnit>
        <main className="page">
          <div className="videoSection">
            <Video className="left-section" poster="/assets/home-freedom.jpg">
              <div className="encrypt-meta">
                <span className="videoMeta"><span className="white-text">EPISODE 1</span> &nbsp;  <span className="purple-text">FEBUARY 08, 2016 &nbsp; 0:53</span></span>
                <span className="videoTitle">
                  Privacy Lets You Be You
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </Video>
            <Signup className="right-section">
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
