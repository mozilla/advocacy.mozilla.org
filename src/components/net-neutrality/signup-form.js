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

    if (!this.state.signupCheckbox) {
      valid = false;
      this.setState({
        signupCheckboxError: 'This field is required.'
      });
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Opt-in Error"
      });
    }

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
  render: function() {
    var emailClassName = classnames({
      "invalid": !!this.state.emailError
    });

    var buttonClassName = classnames(`button`, {
      "submitting": this.state.submitting === SIGNUP_SUBMITTING,
      "arrow": this.state.submitting === NOT_SUBMITTING
    });
    var buttonText = 'ADD MY NAME'
    if (this.state.submitting) {
      buttonText = ``;
    }

    return (
      <div>
        <h3>
          take action headline
        </h3>
        <p>
          take action description
        </p>
        <div ref={(element) => { this.stickyContainer = element; }}>
          <StickyContainer className="sticky-container" stickyTo={this.getPosition}>
            <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
              <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
                get involved
              </a>
            </div>
          </StickyContainer>
        </div>
        <input onClick={this.onFirstNameInputClick} autoComplete="off" type='text' value={this.state.firstName} onChange={this.firstNameChange} placeholder={'First Name'}/>
        <input onClick={this.onLastNameInputClick} autoComplete="off" type='text' value={this.state.lastName} onChange={this.lastNameChange} placeholder={'Last Name'}/>
        <input onClick={this.onEmailInputClick} autoComplete="off" ref={(input) => { this.emailInput = input; }} type='email' className={emailClassName} value={this.state.email} onChange={this.emailChange} required placeholder={'Email'}/>
        <p className="error-message">{this.state.emailError}</p>
        <p className="error-message">{this.state.signupError}</p>
        <label>
          <input onClick={this.onSignupCheckboxClick} className="checkbox" autoComplete="off" onChange={this.signupCheckboxChange} value={this.state.signupCheckbox} type="checkbox"></input>
          <span>Yes, I want to receive email updates about Mozilla's campaigns.</span>
        </label>
        <p className="privacy-error error-message">{this.state.signupCheckboxError}</p>
        <label>
          <input onClick={this.onPrivacyCheckboxClick} className="checkbox" autoComplete="off" onChange={this.privacyCheckboxChange} value={this.state.privacyCheckbox} type="checkbox"></input>
          <span>
            I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/websites/">Privacy Notice</a>
          </span>
        </label>
        <p className="privacy-error error-message">{this.state.privacyCheckboxError}</p>
        <button onClick={this.onSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    );
  }
});
module.exports = Signup;
