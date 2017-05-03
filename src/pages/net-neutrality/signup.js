import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import Header from '../../components/net-neutrality/header.js';
import { ScrollNav } from '../../components/net-neutrality/nav.js';
import SignupFormSticky from '../../components/net-neutrality/signup-form-sticky.js';
import SignupForm from '../../components/net-neutrality/signup-form.js';
import FormBody from '../../components/net-neutrality/form-body.js';

var Signup = React.createClass({
  render: function() {
    var className = "signup net-neutrality-signup";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    return (
      <div className={className}>
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <ScrollNav/>
          <Header/>
          <div className="signup-container">
            <FormBody/>
            <SignupFormSticky>
              <SignupForm subscribed={this.props.location.query.subscribed}/>
            </SignupFormSticky>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Signup;
