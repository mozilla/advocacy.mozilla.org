import React from 'react';
import classnames from "classnames";
import reactGA from 'react-ga';

var NOT_SUBMITTING = 0;
var FCC_COMMENT_SUBMITTING = 3;

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

var InputElement = React.createClass({
  onClick: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: this.props.label + " Focus"
    });
  },
  onChange: function(e) {
    this.props.onChange(this.props.name, e.target.value);
  },
  render: function() {
    var className = classnames({
      "invalid": !!this.props.errorMessage
    });

    if (this.props.type === "text" || this.props.type === "email") {
      return (
        <input onClick={this.onClick} autoComplete="off" type={this.props.type} ref={this.props.inputRef} className={className} value={this.props.value} onChange={this.onChange} placeholder={this.props.placeholder}/>
      );
    } else if (this.props.type === "textarea") {
      return (
        <textarea onClick={this.onClick} autoComplete="off" className={className} value={this.props.value} onChange={this.onChange} placeholder={this.props.placeholder}/>
      );
    }

    return null;
  }
});

var Signup = React.createClass({
  mixins: [require('../../mixins/signup.js')],
  getInitialState: function() {
    return {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      signupError: "",
      submitting: NOT_SUBMITTING,
      email: "",
      emailError: "",
      signupCheckbox: false,
      signupCheckboxError: "",
      privacyCheckbox: false,
      privacyCheckboxError: ""
    };
  },
  signupCheckboxChange: function(e) {
    this.setState({
      signupCheckbox: e.target.checked,
      signupCheckboxError: ""
    }, () => {
      if (this.props.onResize) {
        this.props.onResize();
      }
    });
  },
  privacyCheckboxChange: function(e) {
    this.setState({
      privacyCheckbox: e.target.checked,
      privacyCheckboxError: ""
    }, () => {
      if (this.props.onResize) {
        this.props.onResize();
      }
    });
  },
  stateChange: function(e) {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "State Focus"
    });
    this.setState({
      state: e.target.value,
      stateError: ""
    }, () => {
      if (this.props.onResize) {
        this.props.onResize();
      }
    });
  },
  onSubmit: function() {
    var valid = true;
console.log("wtf");
    if (this.state.submitting !== NOT_SUBMITTING) {
      return;
    }

    var firstNameError = "";
    var lastNameError = "";
    var privacyCheckboxError = "";
    var emailError = "";

    if (!this.state.firstName.trim()) {
      valid = false;

      firstNameError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty first name Error"
      });
    }

    if (!this.state.lastName.trim()) {
      valid = false;

      lastNameError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty last name Error"
      });
    }

    if (!this.state.privacyCheckbox) {
      valid = false;
      privacyCheckboxError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Privacy Policy Error"
      });
    }

    if (!this.state.email.trim()) {
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
      reactGA.event({
        category: "Signup",
        action: "Submitting the form",
        label: "FCC Comments"
      });
      this.petitionSheet({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        signup: this.state.signupCheckbox
      });
    } else {
      this.setState({
        firstNameError,
        lastNameError,
        privacyCheckboxError,
        emailError
      }, () => {
        if (this.props.onResize) {
          this.props.onResize();
        }
      });
    }
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
  onChange: function(name, value) {
    var state = {};
    state[name] = value;
    state[name + "Error"] = "";
    this.setState(state, () => {
      if (this.props.onResize) {
        this.props.onResize();
      }
    });
  },
  render: function() {
    var buttonClassName = classnames(`button`, {
      "submitting": this.state.submitting === FCC_COMMENT_SUBMITTING
    });

    var buttonText = this.props.cta || "";
    if (this.state.submitting) {
      buttonText = ``;
    }

    var stateClassName = classnames({
      "invalid": !!this.state.stateError
    });

    var signupCheckbox = (
      <label>
        <input onClick={this.onSignupCheckboxClick} className="checkbox" autoComplete="off" onChange={this.signupCheckboxChange} value={this.state.signupCheckbox} type="checkbox"></input>
        <span>Yes, I want to receive email updates about Mozilla's campaigns.</span>
        <ErrorMessage>{this.state.signupCheckboxError}</ErrorMessage>
      </label>
    );

    var emailInput = null;
    var emailError = null;

    emailInput = (
      <InputElement name="email" label="Email" inputRef={(input) => { this.emailInput = input; }} type="email" value={this.state.email} onChange={this.onChange} placeholder="Email*" errorMessage={this.state.emailError}/>
    );
    emailError = (
      <ErrorMessage>{this.state.emailError}</ErrorMessage>
    );

    if (this.props.subscribed) {
      signupCheckbox = null;
    }

    return (
      <div className="fcc-form-input-container">

        <InputElement name="firstName" label="First Name" type="text" value={this.state.firstName} onChange={this.onChange} placeholder="First Name*" errorMessage={this.state.firstNameError}/>
        <ErrorMessage>{this.state.firstNameError}</ErrorMessage>

        <InputElement name="lastName" label="Last Name" type="text" value={this.state.lastName} onChange={this.onChange} placeholder="Last Name*" errorMessage={this.state.lastNameError}/>
        <ErrorMessage>{this.state.lastNameError}</ErrorMessage>

        {emailInput}
        {emailError}

        {signupCheckbox}
        <label>
          <input onClick={this.onPrivacyCheckboxClick} className="checkbox" autoComplete="off" onChange={this.privacyCheckboxChange} value={this.state.privacyCheckbox} type="checkbox"></input>
          <span>
            I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/en-US/privacy/websites/">Privacy Notice</a>
          </span>
          <ErrorMessage>{this.state.privacyCheckboxError}</ErrorMessage>
        </label>
        <ErrorMessage>{this.state.signupError}</ErrorMessage>
        <button onClick={this.onSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    );
  }
});
module.exports = Signup;
