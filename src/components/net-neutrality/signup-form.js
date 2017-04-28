import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from "classnames";
import StickyContainer from './sticky-container.js';
import reactGA from 'react-ga';

var NOT_SUBMITTING = 0;
var SIGNUP_SUBMITTING = 1;

var Signup = React.createClass({
  mixins: [require('../../mixins/signup.js')],
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      signupError: "",
      submitting: NOT_SUBMITTING,
      email: "",
      emailError: "",
      firstName: "",
      lastName: "",
      signupCheckbox: "",
      signupCheckboxError: "",
      privacyCheckbox: "",
      privacyCheckboxError: ""
    };
  },
  firstNameChange: function(e) {
    this.setState({
      firstName: e.target.value
    });
  },
  lastNameChange: function(e) {
    this.setState({
      lastName: e.target.value
    });
  },
  emailChange: function(e) {
    this.setState({
      email: e.target.value,
      emailError: ""
    });
  },
  signupCheckboxChange: function(e) {
    this.setState({
      signupCheckbox: e.target.checked,
      signupCheckboxError: ""
    });
  },
  privacyCheckboxChange: function(e) {
    this.setState({
      privacyCheckbox: e.target.checked,
      privacyCheckboxError: ""
    });
  },
  onSubmit: function() {
    var valid = true;

    if (this.state.submitting !== NOT_SUBMITTING) {
      return;
    }

    if (!this.state.email.trim()) {
      valid = false;

      this.setState({
        emailError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty Email Error"
      });
    } else if (!this.emailInput.validity.valid) {
      valid = false;

      this.setState({
        emailError: 'Please enter a valid email address.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Invalid Email Error"
      });
    }

    if (!this.state.privacyCheckbox) {
      valid = false;
      this.setState({
        privacyCheckboxError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Privacy Policy Error"
      });
    }

    /*if (!this.state.signupCheckbox) {
      valid = false;
      this.setState({
        signupCheckboxError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Opt-in Error"
      });
    }*/

    if (valid) {
      reactGA.event({
        category: "Signup",
        action: "Submitting the form",
        label: "Copyright"
      });
      this.sheets({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        signup: this.state.signupCheckbox
      });
    }
  },
  mobileGetInvolved: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Get Involved Clicked"
    });
  },
  getPosition: function() {
    if (!this.stickyContainer) {
      return 0;
    }
    return this.stickyContainer.getClientRects()[0].top + this.stickyContent.offsetHeight + window.scrollY - window.innerHeight;
  },
  onFirstNameInputClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "First Name Focus"
    });
  },
  onLastNameInputClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Last Name Focus"
    });
  },
  onEmailInputClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Email Focus"
    });
  },
  onPrivacyCheckboxClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Privacy Checkbox Focus"
    });
  },
  onSignupCheckboxClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Opt-in Checkbox Focus"
    });
  },
  renderError: function(message) {
    if (!message) {
      return null;
    }
    return (
      <p className="error-message">{message}</p>
    );
  },
  render: function() {
    var emailClassName = classnames({
      "invalid": !!this.state.emailError
    });

    var buttonClassName = classnames(`button`, {
      "submitting": this.state.submitting === SIGNUP_SUBMITTING,
      "arrow": this.state.submitting === NOT_SUBMITTING
    });
    var buttonText = 'Send your comment'
    if (this.state.submitting) {
      buttonText = ``;
    }

    return (
      <div>
        <p>
          We need to act immediately and raise our voices to remind Chairman Pai and the FCC it is their job to protect net neutrality. Fill out the form below and tell the FCC why you think net neutrality is fundamental and must be protected.
        </p>
        <div ref={(element) => { this.stickyContainer = element; }}>
          <StickyContainer className="sticky-container" stickyTo={this.getPosition}>
            <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
              <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
                Send your comment
              </a>
            </div>
          </StickyContainer>
        </div>
        <input onClick={this.onFirstNameInputClick} autoComplete="off" type='text' value={this.state.firstName} onChange={this.firstNameChange} placeholder={'First Name'}/>
        {this.renderError(this.state.firstNameError)}
        <input onClick={this.onLastNameInputClick} autoComplete="off" type='text' value={this.state.lastName} onChange={this.lastNameChange} placeholder={'Last Name'}/>
        {this.renderError(this.state.lastNameError)}
        <input onClick={this.onEmailInputClick} autoComplete="off" ref={(input) => { this.emailInput = input; }} type='email' className={emailClassName} value={this.state.email} onChange={this.emailChange} required placeholder={'Email'}/>
        {this.renderError(this.state.emailError)}
        {/*<input onClick={this.onAddressInputClick} autoComplete="off" type='text' value={this.state.address} onChange={this.addressChange} placeholder={'Address'}/>
        {this.renderError(this.state.addressError)}
        <textarea onClick={this.onCommentInputClick} autoComplete="off" type='text' value={this.state.comment} onChange={this.commentChange} placeholder={'Comment'}/>
        {this.renderError(this.state.commentError)}*/}
        {this.renderError(this.state.signupError)}
        <label>
          <input onClick={this.onSignupCheckboxClick} className="checkbox" autoComplete="off" onChange={this.signupCheckboxChange} value={this.state.signupCheckbox} type="checkbox"></input>
          <span>Yes, I want to receive email updates about Mozilla's campaigns.</span>
          {this.renderError(this.state.signupCheckboxError)}
        </label>
        <label>
          <input onClick={this.onPrivacyCheckboxClick} className="checkbox" autoComplete="off" onChange={this.privacyCheckboxChange} value={this.state.privacyCheckbox} type="checkbox"></input>
          <span>
            I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/websites/">Privacy Notice</a>
          </span>
          {this.renderError(this.state.privacyCheckboxError)}
        </label>
        <button onClick={this.onSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    );
  }
});
module.exports = Signup;
