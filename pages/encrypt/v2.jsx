var React = require('react');
var Footer = require('../../components/footer.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Video = require('../../components/video.jsx');
var ImageTag = require('../../components/imagetag.jsx');
var Signup = require('../../components/signup.jsx');
var CTA = require('../../components/cta.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt">
        <div className="header">
          <div className="header-content">
            <ImageTag className="logo" height={30} width={105} src1x="/assets/logo-mozilla.svg" alt="Mozilla logo"/>
          </div>
          </div>
        <HeroUnit>
          <div className="encryptText">
            <img src="/assets/home-freedom.jpg"/>
          </div>
        </HeroUnit>
        <div className="page">
          <div className="videoSection-v2">
            <Video className="left-section" poster="/assets/home-freedom.jpg">
              <div className="encrypt-meta-v2">
                <span className="videoMeta"><span className="white-text">EPISODE 1</span> &nbsp;  <span className="purple-text">FEBUARY 08, 2016 &nbsp; 0:53</span></span>
                <h2 className="videoTitle">
                  Privacy Lets You Be You
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </Video>
            <Signup className="right-section">
              <CTA
                HrClassName="v2-cta-hr"
                headerClassName="v2-cta-header"
                textClassName="v2-cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla."
              />
            </Signup>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});
