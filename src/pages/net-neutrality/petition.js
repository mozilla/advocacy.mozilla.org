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
                <a className="attribution" href="https://www.flickr.com/photos/josephgruber/15109096143/in/photolist-p294TD-pY1vRA">Image by Joseph Gruber, CC BY-NC-ND 2.0</a>
              </div>
              <div className="form-body-border">
                <div className="form-body">
                  <p className="form-description fancy-letter">
                    The FCC has received more than 22 million comments on the issue of whether to gut rules essential for free speech, innovation, and consumer freedom and choice.
                  </p>
                  <p className="form-description">
                    Yet Ajit Pai has announced the Federal Communications Commission will be voting on Net Neutrality in just a few weeks.
                  </p>
                  <p>
                    <b>Pai’s timing is revealing — making the announcement while millions of Americans are traveling for Thanksgiving.</b>
                  </p>
                  <p>
                    From the start, the FCC’s process around these rules failed to properly consider public input — and there’s no way that they’ve actually considered each of the 22 million comments they received.
                  </p>
                  <p>
                    That’s why they’re burying the news just days before one of our biggest holidays — they were hoping you and I wouldn’t notice. We can’t let them get away with this. We’re building a fighting fund for the open web, so we can send a clear message to the FCC: we see, we care — and we won’t go down without a fight.
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
                  The FCC has received more than 22 million comments on the issue of whether to water down existing Net Neutrality rules.
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
          <section className="donate-container">
            <p className="playfair">
              Mozilla is a non-profit fighting for the good of the internet. Become a supporter today.
            </p>
            <a onClick={this.donateClicked} href="https://donate.mozilla.org" className="donate-button">
              DONATE NOW
            </a>
          </section>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/180765"/>
      </div>
    );
  }
});

module.exports = Signup;
