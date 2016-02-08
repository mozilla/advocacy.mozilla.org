var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);

module.exports = React.createClass({
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignup: false
    };
  },
  showModal: function(e) {
    e.preventDefault();
    this.setState({
      formIsVisible: true,
      didSignup: true
    });
    console.log(this.props.className);
  },
  render: function() {
    return (
      <div className="encrypt v2">
        <EncryptHeader />
        <main>
          <EncryptVideo className="video-wrapper" />
          <div className="dual-cta-wrapper">
            <div className="join-mozilla-wrapper">
              <div className="join-mozilla cta">
                <h2>
                 Join Mozilla
               </h2>
               <div className="horizontal-rule"></div>
               <p>
                 For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla.
               </p>
              {!this.state.didSignup ? <button onClick={this.showModal} className="button">Sign up</button> : ``}
              {this.state.formIsVisible ? <Signup/> : `` }
             </div>
            </div>
            <ShareThisNow/>
          </div>
        </main>
        <Footer>
          <Icon href="https://twitter.com/MozillaAdvocacy" src="/assets/footer-icon-twitter.svg" title="">FIXME</Icon>
        </Footer>
      </div>
    );
  }
});
