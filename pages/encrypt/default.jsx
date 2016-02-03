var React = require('react');
var Footer = require('../../components/footer.jsx');
var Video = require('../../components/video.jsx');
var ShareThisNow = require('../../components/share-this-now');
var ImageTag = require('../../components/imagetag.jsx');
var Icon = require('../../components/footer-icon.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt v1">
        <header className="header">
          <div className="header-content">
            <ImageTag className="logo" height={30} width={105} src1x="/assets/logo-mozilla.svg" alt="Mozilla logo"/>
            <div className="encryptText">
              <img src="http://dummyimage.com/960x200/5381b9/f46060.png&text=Encrypt"/>
            </div>
          </div>
        </header>
        <main className="page">
          <Video className="videoSection"/>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">FIXME</Icon>
        </Footer>
      </div>
    );
  }
});
