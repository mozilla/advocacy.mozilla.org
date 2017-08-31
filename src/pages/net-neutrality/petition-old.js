import React  from 'react';
import Footer from '../../components/signup-form/footer.js';
import Header from '../../components/signup-form/header.js';
import Logo from '../../components/signup-form/logo.js';
import SignupFormSticky from '../../components/signup-form/signup-form-sticky.js';
import SignupForm from '../../components/net-neutrality/petition-form.js';
import SignupFormContainer from '../../components/signup-form/signup-form-container.js';
import FormBody from '../../components/signup-form/form-body.js';

var Signup = React.createClass({
  onResize: function() {
    if (!this.stickyForm) {
      return;
    }
    this.stickyForm.onResize();
  },
  render: function() {
    var className = "signup net-neutrality-signup";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    return (
      <div className={className}>
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <Logo/>
          <Header
            cta="Sign our letter"
            header="The FCC has a plan to destroy net neutrality. It’s up to us to stop it."
            paragraph="Make your voice heard: Stand up for net neutrality."
          />
          <div className="signup-container">
            <FormBody>
              <div className="fancy-letter form-description">
                The Federal Communications Commission's new Chairman Ajit Pai just announced a proposal to gut net neutrality.
              </div>
              <p>
                Net neutrality is the freedom to say, watch and make what we want online without interference from internet service providers. Two years ago, after hearing from nearly 4 million people urging it protect the open internet, the FCC passed rules protecting net neutrality.
              </p>
              <h4>
                Why should we protect net neutrality?
              </h4>
              <p>
                There are a million reasons why we must protect net neutrality. Here are a few of them:
              </p>
              <ul>
                <li><b>Net neutrality is fundamental to free speech.</b> Without net neutrality, big companies could censor your voice and make it harder to speak up online. Net neutrality has been called the "First Amendment of the Internet."</li>
                <li><b>Net neutrality is fundamental to competition.</b> Without net neutrality, big Internet service providers can choose which services and content load quickly, and which move at a glacial pace. That means the big guys can afford to buy their way in, while the little guys don't stand a chance.</li>
                <li><b>Net neutrality is fundamental to innovation.</b> Without net neutrality, creators and entrepreneurs could struggle to reach new users. Investment in new ideas would dry up, and the internet would start to look more and more like cable TV: a zillion channels and nothing on.</li>
                <li><b>Net neutrality is fundamental to user choice.</b> Without net neutrality, ISPs could decide you watched too many cat videos in one day and throttle your Internet speeds leaving you behind on the latest Maru memes.</li>
              </ul>
            </FormBody>
            <SignupFormSticky viewportPadding={30} ref={(input) => { this.stickyForm = input; }}>
              <h4>
                It’s time to save the internet &mdash; again
              </h4>
              <div className="letter">
                <p>
                  Dear FCC Chairman Ajit Pai:
                </p>
                <p>
                  <b>
                    Your proposal to weaken existing net neutrality rules is unacceptable. It would weaken competition, stifle innovation, undermine user choice, and threaten free speech online.
                  </b>
                </p>
              </div>
              <p>
                We’ll deliver this letter, with your signature, straight to the FCC as it considers its next action on net neutrality.
              </p>
              <p>
                By signing onto this letter, you agree to add your name to a public letter to be delivered to the FCC.
              </p>
              <SignupFormContainer cta="Sign our letter">
                <SignupForm
                  onResize={this.onResize}
                  subscribed={this.props.location.query.subscribed}
                  cta="Sign our letter"
                />
              </SignupFormContainer>
            </SignupFormSticky>
          </div>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/180765"/>
      </div>
    );
  }
});

module.exports = Signup;
