import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from "classnames";
import StickyContainer from './sticky-container.js';
import reactGA from 'react-ga';

var NOT_SUBMITTING = 0;
var PETITION_SUBMITTING = 2;

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
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      signupCheckbox: "",
      signupCheckboxError: "",
      privacyCheckbox: "",
      privacyCheckboxError: ""
    };
  },
  firstNameChange: function(e) {
    this.setState({
      firstName: e.target.value,
      firstNameError: ""
    });
  },
  lastNameChange: function(e) {
    this.setState({
      lastName: e.target.value,
      lastNameError: ""
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

    if (!this.state.firstName.trim()) {
      valid = false;

      this.setState({
        firstNameError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty firstName Error"
      });
    }

    if (!this.state.lastName.trim()) {
      valid = false;

      this.setState({
        lastNameError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty lastName Error"
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
    var firstNameClassName = classnames({
      "invalid": !!this.state.firstNameError
    });
    var lastNameClassName = classnames({
      "invalid": !!this.state.lastNameError
    });
    var emailClassName = classnames({
      "invalid": !!this.state.emailError
    });

    var buttonClassName = classnames(`button`, {
      "submitting": this.state.submitting === PETITION_SUBMITTING,
      "arrow": this.state.submitting === NOT_SUBMITTING
    });
    var buttonText = 'Sign our letter'
    if (this.state.submitting) {
      buttonText = ``;
    }

    return (
      <div>
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
        <div ref={(element) => { this.stickyContainer = element; }}>
          <StickyContainer className="sticky-container" stickyTo={this.getPosition}>
            <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
              <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
                Sign our letter
              </a>
            </div>
          </StickyContainer>
        </div>
        <input onClick={this.onFirstNameInputClick} autoComplete="off" type='text' className={firstNameClassName} value={this.state.firstName} onChange={this.firstNameChange} placeholder={'First Name'}/>
        {this.renderError(this.state.firstNameError)}
        <input onClick={this.onLastNameInputClick} autoComplete="off" type='text' className={lastNameClassName} value={this.state.lastName} onChange={this.lastNameChange} placeholder={'Last Name'}/>
        {this.renderError(this.state.lastNameError)}
        <input onClick={this.onEmailInputClick} autoComplete="off" type='email' ref={(input) => { this.emailInput = input; }} className={emailClassName} value={this.state.email} onChange={this.emailChange} required placeholder={'Email'}/>
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
