import React  from 'react';
import Footer from '../../components/signup-form/footer.js';
import Header from '../../components/signup-form/header.js';
import Logo from '../../components/signup-form/logo.js';
import SignupFormSticky from '../../components/signup-form/signup-form-sticky.js';
import SignupForm from '../../components/net-neutrality/fcc-comments-form.js';
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
    var className = "signup net-neutrality-comments";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    return (
      <div className={className}>
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <div className="signup-container">
            <div className="form-body-container">
              <div className="nn-comments-header">
                <div>
                  <a href="https://mozilla.org/" className="moz-logo">mozilla</a>
                </div>
                <div>
                  <h1>the beginning of the end of the open internet?</h1>
                  <br/>
                  <p>not if we do something about it</p>
                </div>
              </div>
              <div className="form-body-border">
                <div className="form-body">
                  <p className="form-description fancy-letter">
                    The Federal Communications Commission is inviting public comments about proposed rules that would gut net neutrality and hand over the internet to big cable companies like Comcast, AT&T, and Verizon.
                  </p>
                  <p className="form-description">
                    Send in YOUR comment in support of net neutrality now.
                  </p>
                  <p>
                    Here are some reasons why <span className="secret-to-everybody-wrapper">Mozi<span className="secret-to-everybody"></span>lla</span> cares about net neutrality &mdash; use these or any that express why you care about this issue.
                  </p>
                  <h4>
                    Net neutrality is fundamental to free speech.
                  </h4>
                  <p>
                    Without net neutrality, big companies could censor people and perspectives online. Net neutrality has been called the "First Amendment of the Internet".
                  </p>
                  <h4>
                    Net neutrality protects small businesses and innovators who are just getting started.
                  </h4>
                  <p>
                    Without net neutrality, creators and entrepreneurs could struggle to reach new users. Investment in new ideas would dry up and only the big companies would survive, stifling innovation.
                  </p>
                  <h4>
                    Net neutrality allows consumers &mdash; not big companies &mdash; to choose what they watch & do online.
                  </h4>
                  <p>
                    Without net neutrality, ISPs could decide you watched too many videos on Netflix in one day and throttle your Internet speeds, while keeping their own video apps running smooth.
                  </p>
                  <p>
                    Brief, specific and personal comments are the most effective. Submit your comment now, and tell the FCC to leave net neutrality alone.
                  </p>
                </div>
              </div>
            </div>
            <SignupFormSticky viewportPadding={0} ref={(input) => { this.stickyForm = input; }}>
              <h4>
                Tell the FCC to leave net neutrality alone.
              </h4>
              <p className="blue-paragraph">
                Write your comment below to tell the FCC why net neutrality MUST be protected. We’ll deliver your comment straight to the agency.
              </p>
              <SignupFormContainer cta="Tell the FCC: Leave Net Neutrality Alone">
                <SignupForm
                  onResize={this.onResize}
                  subscribed={this.props.location.query.subscribed}
                  cta="Submit your comment"
                />
              </SignupFormContainer>
            </SignupFormSticky>
          </div>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/181032"/>
      </div>
    );
  }
});

module.exports = Signup;
