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
  onEmailFocus: function() {
    reactGA.event({
      category: "Signup",
      action: "Email input focus",
      label: "Buyer's Guide"
    });
  },
  onEmailBlur: function() {
    reactGA.event({
      category: "Signup",
      action: "Email input blur",
      label: "Buyer's Guide"
    });
  },
  onEmailChange: function(e) {
    this.setState({
      emailInput: e.target.value,
      emailInputError: ""
    });
  },
  onPrivacyChange: function(e) {
    reactGA.event({
      category: "Signup",
      action: "Privacy checkbox checked",
      label: "Buyer's Guide",
      value: e.target.checked
    });
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
      privacyCheckboxError = this.context.intl.formatMessage({id: 'required_error'});
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Privacy Policy Error"
      });
    }
    if (!this.state.emailInput.trim()) {
      valid = false;

      emailError = this.context.intl.formatMessage({id: 'required_error_generic'});
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty Email Error"
      });
    } else if (!this.emailInput.validity.valid) {
      valid = false;

      emailError = this.context.intl.formatMessage({id: 'email_invalid'});
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
          label: "Buyer's Guide"
        });
        this.props.onSuccess();
      }, () => {
        // signup error
        this.setState({
          submitting: false,
          submissionError: this.context.intl.formatMessage({id: 'try_later'})
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
      <div>
        <input ref={(input) => { this.emailInput = input; }} value={this.state.emailInput} onChange={this.onEmailChange} onFocus={this.onEmailFocus} onBlur={this.onEmailBlur} className="email-input" placeholder={this.context.intl.formatMessage({id: 'email_placeholder'})} type="email"/>
        <ErrorMessage>{this.state.emailInputError}</ErrorMessage>
        <div>
          <input className="privacy-checkbox" type="checkbox" id="privacy-checkbox" onChange={this.onPrivacyChange} value={this.state.privacyCheckboxChecked}/>
          <label htmlFor="privacy-checkbox">
            <div>
              <FormattedMessage
                id='privacy_policy'
                values={{
                  linkPrivacyNotice: (<a href="https://www.mozilla.org/privacy/websites/">{this.context.intl.formatMessage({id: 'link_privacy_notice'})}</a>)
                }}
              />
            </div>
          </label>
        </div>
        <ErrorMessage>{this.state.privacyCheckboxError}</ErrorMessage>
        <ErrorMessage>{this.state.submissionError}</ErrorMessage>
        <div>
          <button onClick={this.onSubmit} className={buttonClassName}>{this.context.intl.formatMessage({id: 'subscribe_button'})}</button>
          <button className="secondary" onClick={this.props.onClose}>{this.context.intl.formatMessage({id: 'maybe_later'})}</button>
        </div>
      </div>
    );
  }
});

module.exports = SignupForm;
