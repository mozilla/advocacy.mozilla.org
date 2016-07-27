var React = require(`react`);
var EncryptFooter = require(`../../components/encrypt-footer.js`);
var Signup = require(`../../components/encrypt-signup.js`);
var classNames = require('classnames');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false,
      videoDidStart: false,
      videoDidEnd: false,
      videoIsPaused: false,
      activeVideo: 1
    };
  },
  setPageState(state){
    this.setState(state);
  },
  userDidSignup: function() {
    var locale = this.context.intl.locale;
    this.context.router.replace("/" + locale + '/encrypt/signup-complete/' + window.location.search);
  },
  render: function() {
    var modalClass = classNames({
      'join-modal': true
    });
    var signupHeader = this.props.signupHeader || this.context.intl.formatMessage({id: 'join_mozilla'});
    var signupBody = this.props.signupBody || this.context.intl.formatMessage({id: 'signup_body'});
    var signupMeta = (<h1></h1>);
    var movedHeader = (<h1>{signupHeader}</h1>);
    if (!this.props.hideSignupMeta) {
      signupMeta = (
        <div className="join-mozilla">
          <h1>{signupHeader}</h1>
          <p>{signupBody}</p>
        </div>
      );
      movedHeader = (<div></div>);
    }
    return (
      <div className="encrypt signup">
      <a className="tabzilla" href="https://mozilla.org" aria-label="Mozilla"></a>
        <main>
          <div className="signup-page-content">
            {signupMeta}
            <Signup submitButtonText={this.context.intl.formatMessage({id: 'sign_up'})} onSubmission={this.userDidSignup}>
              {movedHeader}
            </Signup>
          </div>
        </main>
        <EncryptFooter/>
      </div>
    );
  }
});
