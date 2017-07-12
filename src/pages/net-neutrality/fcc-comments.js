import React  from 'react';
import Footer from '../../components/signup-form/footer.js';
import Header from '../../components/signup-form/header.js';
import Logo from '../../components/signup-form/logo.js';
import CommentFormSticky from '../../components/signup-form/signup-form-sticky.js';
import CommentForm from '../../components/net-neutrality/fcc-comments-form.js';
import CommentFormContainer from '../../components/signup-form/signup-form-container.js';
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
    if (!this.props.location.query.subscribed) {
      setTimeout(() => {
        this.setState({
          showModal: true
        });
      }, 3000);
    }
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
                    Without net neutrality, big companies could censor people and perspectives online. Net neutrality has been called the "First Amendment of the Internet."
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
                </div>
              </div>
            </div>
            <CommentFormSticky viewportPadding={0} ref={(input) => { this.stickyForm = input; }}>
              <h4>
                Tell the FCC to leave net neutrality alone.
              </h4>
              <p className="blue-paragraph">
                Write your comment below to tell the FCC why net neutrality MUST be protected. We’ll deliver your comment straight to the agency.
              </p>
              <CommentFormContainer cta="Tell the FCC: Leave Net Neutrality Alone">
                <CommentForm
                  onResize={this.onResize}
                  subscribed={this.props.location.query.subscribed || this.state.signupSuccess}
                  cta="Submit your comment"
                />
              </CommentFormContainer>
            </CommentFormSticky>
          </div>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/181032"/>
      </div>
    );
  }
});

module.exports = Signup;
