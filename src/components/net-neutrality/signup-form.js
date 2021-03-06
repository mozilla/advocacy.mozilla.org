import React from 'react';
import classnames from "classnames";
import reactGA from 'react-ga';
import submit from '../../lib/submit';

var ErrorMessage = React.createClass({
  render: function() {
    if (this.props.children) {
      return (
        <p className="error-message">{this.props.children}</p>
      );
    }
    return null;
  }
});

var SignupForm = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      emailInput: "",
      emailInputError: "",
      privacyCheckboxChecked: false,
      privacyCheckboxError: "",
      submissionError: "",
      submitting: false
    };
  },
  onEmailChange: function(e) {
    this.setState({
      emailInput: e.target.value,
      emailInputError: ""
    });
  },
  onPrivacyChange: function(e) {
    this.setState({
      privacyCheckboxChecked: e.target.checked,
      privacyCheckboxError: ""
    });
  },
  onSubmit: function() {
    var valid = true;

    if (this.state.submitting) {
      return;
    }

    var privacyCheckboxError = "";
    var emailError = "";

    if (!this.state.privacyCheckboxChecked) {
      valid = false;
      privacyCheckboxError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Privacy Policy Error"
      });
    }
    if (!this.state.emailInput.trim()) {
      valid = false;

      emailError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty Email Error"
      });
    } else if (!this.emailInput.validity.valid) {
      valid = false;

      emailError = 'Please enter a valid email address.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Invalid Email Error"
      });
    }

    if (valid) {
      // submit
      this.setState({
        submitting: true,
        submissionError: ""
      });
      submit("/api/signup/basket", {
        url: window.location.href,
        email: this.state.emailInput,
        locale: this.context.intl.locale
      }, () => {
        // signup success
        reactGA.event({
          category: "Signup",
          action: "Submitted the form",
          label: "Net Neutrality"
        });
        this.props.onSuccess();
      }, () => {
        // signup error
        this.setState({
          submitting: false,
          submissionError: "try again later"
        });
      });
    } else {
      this.setState({
        privacyCheckboxError: privacyCheckboxError,
        emailInputError: emailError
      });
    }
  },
  render: function() {
    var buttonClassName = classnames(`button`, {
      "submitting": this.state.submitting
    });

    return (
      <div className="signup-form">
        <div className="form-copy">
          <div>Love the Web?</div>
          <div>Sign up for email updates and</div>
          <div>help us keep it open and free.</div>
        </div>
        <input ref={(input) => { this.emailInput = input; }} value={this.state.emailInput} onChange={this.onEmailChange} className="email-input" placeholder="Enter your email address" type="email"/>
        <ErrorMessage>{this.state.emailInputError}</ErrorMessage>
        <div>
          <input className="privacy-checkbox" type="checkbox" id="privacy-checkbox" onChange={this.onPrivacyChange} value={this.state.privacyCheckboxChecked}/>
          <label htmlFor="privacy-checkbox">
            <div>
              I'm ok with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/websites/">Privacy Notice</a>
            </div>
          </label>
        </div>
        <ErrorMessage>{this.state.privacyCheckboxError}</ErrorMessage>
        <ErrorMessage>{this.state.submissionError}</ErrorMessage>
        <div>
          <button onClick={this.onSubmit} className={buttonClassName}>Subscribe</button>
          <button className="button secondary" onClick={this.props.onClose}>Maybe Later</button>
        </div>
      </div>
    );
  }
});

module.exports = SignupForm;
