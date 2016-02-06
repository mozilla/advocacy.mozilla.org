var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Video = require(`../../components/video.jsx`);
var ImageTag = require(`../../components/imagetag.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var CTA = require(`../../components/cta.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);



module.exports = React.createClass({
  getInitialState: function() {
    return {
      isSubmitted: false
    };
  },
  onSubmit: function(e) {
    this.refs.signup.sendEmailToBasket(e, (submitted) => {
      this.setState({
        isSubmitted: submitted
      });
      console.log(submitted);
    });
  },
  render: function() {
    return (
      <div className="encrypt v3">
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo />
            {!this.state.isSubmitted ? <Signup onSubmit={this.onSubmit} ref="signup" className="encrypt-signup">
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla."
              />
            </Signup> : 'Thank you'}
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
