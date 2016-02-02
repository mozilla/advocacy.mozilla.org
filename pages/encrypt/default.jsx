var React = require('react');
var Footer = require('../../components/footer.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Video = require('../../components/video.jsx');
var ShareThisNow = require('../../components/share-this-now');
var ImageTag = require('../../components/imagetag.jsx');
var Icon = require('../../components/footer-icon.jsx');

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
          <Video className="videoSection"/>
          <ShareThisNow/>
        </div>
        <Footer>
          <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">FIXME</Icon>
        </Footer>
      </div>
    );
  }
});
