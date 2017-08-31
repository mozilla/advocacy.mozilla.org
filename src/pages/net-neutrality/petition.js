import React  from 'react';
import Footer from '../../components/signup-form/footer.js';
import Header from '../../components/signup-form/header.js';
import Logo from '../../components/signup-form/logo.js';
import FccFormSticky from '../../components/signup-form/signup-form-sticky.js';
import FccForm from '../../components/net-neutrality/fcc-form.js';
import FccFormContainer from '../../components/signup-form/signup-form-container.js';
import SignupForm from '../../components/net-neutrality/signup-form.js';
import FormBody from '../../components/signup-form/form-body.js';
import Modal from '../../components/modal.js';

var Signup = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      signupSuccess: false
    };
  },
  componentDidMount: function() {
    /*if (!this.props.location.query.subscribed) {
      setTimeout(() => {
        this.setState({
          showModal: true
        });
      }, 3000);
    }*/
  },
  closeModal: function() {
    this.setState({
      showModal: false
    });
  },
  onSuccess: function() {
    this.setState({
      signupSuccess: true
    });
  },
  onResize: function() {
    if (!this.stickyForm) {
      return;
    }
    this.stickyForm.onResize();
  },
  render: function() {
    var className = "signup net-neutrality-comments";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    var modal = null;
    if (this.state.showModal) {
      if (this.state.signupSuccess) {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-success">
              <div className="form-copy">
                <div><span className="white">Thanks!</span> <span className="light">Please check your inbox or your spam filter for an email from us to confirm your subscription.</span>
                </div>
              </div>
              <button className="button" onClick={this.closeModal}>Yes, I got it</button>
            </div>
          </Modal>
        );
      } else {
        modal = (
          <Modal onClose={this.closeModal}>
            <SignupForm onClose={this.closeModal} onSuccess={this.onSuccess}/>
          </Modal>
        );
      }
    }

    return (
      <div className={className}>
        {modal}
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <div className="signup-container">
            <div className="form-body-container">
              <div className="nn-comments-header">
                <div>
                  <a href="https://mozilla.org/" className="moz-logo"></a>
                </div>
                <div>
                  <h1>Slow It Down!*</h1>
                  <br/>
                  <p>*Not the Internet. The FCC.</p>
                </div>
              </div>
              <div className="form-body-border">
                <div className="form-body">
                  <p className="form-description fancy-letter">
                    Over the last three months -- let’s call it the summer of Net Neutrality -- the FCC has received more than 22 million comments on the issue of whether to gut rules essential for free speech, innovation, and consumer freedom and choice.
                  </p>
                  <p className="form-description">
                    The comment period just ended this week, and the agency could vote on Pai’s rules as early as late September.
                  </p>
                  <p>
                    Wait what?!  Only a month to read all 22 million comments before a fundamental decision about free speech, innovation and choice on the Internet?
                  </p>
                  <p>
                    The folks at the FCC might be fast readers. But no one is that fast. <b>That’s why we’re calling for the FCC to Slow. It. Down.</b>
                  </p>
                  <p>
                    We don’t want to slow down the Internet, of course (though other companies might..).  Instead, we’re urging the FCC -- and Congress, which oversees the agency -- to slow down its process so it can read and analyze the response rather than charging forward on an ill-advised, Internet-killing plan. There’s a reason that the government sometimes moves slowly: because it has an outsized impact and should not make decisions like this rashly.
                  </p>
                  <p>
                    <b>Take action now and tell the FCC to slow it down.</b> The future of the Internet depends on it.
                  </p>
                  <p>
                    Many millions of people spoke out against Chairman Ajit Pai’s proposal to scrap existing net neutrality rules that would allow big companies to slice up the Internet into fast lanes (for those who can pay) and slow lanes (for everyone else), stamp out competition from small businesses, and block speech they don’t agree with. The FCC sought public comments -- the least it can do is to review these opinions, facts, and ideas before it makes a critical vote on Net Neutrality.
                  </p>
                </div>
              </div>
            </div>
            <FccFormSticky viewportPadding={0} ref={(input) => { this.stickyForm = input; }}>
              <h4>
                Take action now and tell the FCC to Slow. It. Down.<br/>
                The future of the Internet depends on it.
              </h4>
              <div className="blue-paragraph">
                <p>
                  Dear FCC Chairman Ajit Pai:</p>
                <p>
                  Over the last three months, the FCC has received more than 22 million comments on the issue of whether to water down existing Net Neutrality rules.
                </p>
                <p>
                  Given the enormity of this response, coming from private citizens, startups, and industry -- and the importance of this decision to the future of the Internet -- the FCC needs to slow things down and ensure it’s taking the volume and substance of the public’s response into account. Anything less would be an abdication of your responsibilities.
                </p>
              </div>
              <FccFormContainer cta="Tell the FCC: Leave Net Neutrality Alone">
                <FccForm
                  onResize={this.onResize}
                  subscribed={this.props.location.query.subscribed || this.state.signupSuccess}
                  cta="Sign our letter"
                />
              </FccFormContainer>
            </FccFormSticky>
          </div>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/180765"/>
      </div>
    );
  }
});

module.exports = Signup;
