import React  from 'react';
import storage from '../../lib/session-storage.js';

import Footer from '../../components/signup-form/footer.js';
import Header from '../../components/signup-form/header.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';
import Logo from '../../components/signup-form/logo.js';
import FccFormSticky from '../../components/signup-form/signup-form-sticky.js';
import FccForm from '../../components/net-neutrality/fcc-form.js';
import FccFormContainer from '../../components/signup-form/signup-form-container.js';
import SignupForm from '../../components/net-neutrality/signup-form.js';
import FormBody from '../../components/signup-form/form-body.js';
import Modal from '../../components/modal.js';

const DONATE_CTA_DELAY = 750; // in milliseconds

var Signup = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      dismissedModal: false,
      signupSuccess: false
    };
  },
  componentDidMount: function() {
    if (typeof window !== "undefined" && window.addEventListener) {
      this._withScroll = e => this.handleScroll(e);
      window.addEventListener('scroll', this._withScroll);
    }
  },
  componentWillUnmount() {
    if (this._withScroll) {
      window.removeEventListener('scroll', this._withScroll);
    }
  },
  handleScroll: function(e) {
    if (this._ctaTimeout) {
      clearTimeout(this._ctaTimeout);
    }
    this._ctaTimeout = setTimeout(() => this.spawnDonateCTA(), DONATE_CTA_DELAY);
  },
  spawnDonateCTA: function() {
    if (!storage.getItem('dismissedModal')) {
      this.setState({
        showModal: true
      });
    }
  },
  closeModal: function() {
    this.setState({
      showModal: false
    }, () => storage.setItem('dismissedModal', 'true'));
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
  generateModal: function() {
    if (this.state.showModal) {
      if (this.state.signupSuccess) {
        return this.generateSignupModal();
      }
      return this.generateDonationModal();
    }
    return null;
  },
  generateSignupModal: function() {
    return (
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
  },
  generateDonationModal: function() {
    return (
      <Modal onClose={() => this.closeModal()}>
        <section className="donate-container">
        <h2>We all love the web.<br/> Join Mozilla in defending it.</h2>
          <p className="playfair">
            The future of the Internet is at stake, with new threats to our online privacy and security almost every day. M<span className="blankSpace">&nbsp;</span>ozilla fights to save a healthy Internet, with grassroots advocacy work and software that enables the open web.
          </p>
          <p className="playfair emphasized">
            As a non-profit we rely on your support, so please donate today.
          </p>
          <a href="https://donate.mozilla.org" className="donate-button">
            DONATE NOW
          </a>
        </section>
      </Modal>
    );
  },
  render: function() {
    var className = "signup net-neutrality-comments";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    return (
      <div className={className}>
        { this.generateModal() }
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <SimpleNav active="home"/>
          <div className="signup-container">
            <div className="form-body-container">
              <div className="nn-comments-header">
                <div>
                  <h1>Protect Net Neutrality</h1>
                  <br/>
                  <p>Tell Congress to Act</p>
                </div>
                <a className="attribution" href="https://www.flickr.com/photos/josephgruber/15109096143/in/photolist-p294TD-pY1vRA">Image by Joseph Gruber, CC BY-NC-ND 2.0</a>
              </div>
              <div className="form-body-border">
                <div className="form-body">
                  <p className="form-description fancy-letter">
                    The FCC just passed Chairman Ajit Pai’s Net Neutrality-eradicating, Internet-killing rules on a hyperpartisan vote.
                  </p>
                  <p>
                    <b>But Congress can still act. Tell them to stop Pai’s rules before they’re started.</b>
                  </p>
                  <p>
                    Here’s how it works: Congress can reverse recently-passed regulations under the terms of the “Congressional Review Act,” or CRA. Given the outcry from Republicans, Democrats, and everyone in between -- and the enormous danger Pai’s order poses to the Internet and its users -- we think it’s appropriate for Congress to invoke this tactic.
                  </p>
                  <p>
                    Earlier this year, Congress used this procedure to block rules to protect users’ privacy on broadband networks. In response, Internet users flooded Congress with complaints -- and Congress took notice. It’s time again to remind them that they need to protect us and Net Neutrality, not protect the big companies that want to control your Internet.
                  </p>
                  <p>
                    The more members of Congress hear from you -- their constituent -- the more they’ll want to join the amazing wave of opposition that’s showing no signs of slowing.
                  </p>
                  <p>
                    <b>Urge your member of Congress to oppose Pai’s rules now.</b>
                  </p>
                </div>
              </div>
            </div>
            <FccFormSticky viewportPadding={0} ref={(input) => { this.stickyForm = input; }}>
              <h4>
                Add your name to the petition.<br/>
                Urge Congress to stand up for Net Neutrality.
              </h4>
              <div className="blue-paragraph">
                <p>
                  Dear Members of Congress:</p>
                <p>
                  The FCC just passed Chairman Ajit Pai’s Net Neutrality-eradicating, Internet-killing rules on a hyperpartisan vote.
                </p>
                <p>
                  Republicans, Democrats, and everyone in between -- from all around the country -- are outraged at the enormous danger Pai’s order poses to the Internet and its users.
                </p>
                <p>
                  I urge you to utilize the Congressional Review Act to reverse these damaging rules and restore the Internet back to its rightful owners -- its users.
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
