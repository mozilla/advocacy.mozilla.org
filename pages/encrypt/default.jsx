var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var Icon = require(`../../components/footer-icon.jsx`);
var EncryptHeader = require(`../../components/encrypt-header`);


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
          <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">FIXME</Icon>
        </Footer>
      </div>
    );
  }
});
