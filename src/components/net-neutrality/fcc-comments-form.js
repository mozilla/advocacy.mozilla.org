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
  //mixins: [require('../../mixins/signup.js')],
  getInitialState: function() {
    return {
      comment: "",
      commentError: "",
      name: "",
      nameError: "",
      address: "",
      addressError: "",
      city: "",
      cityError: "",
      state: "",
      stateError: "",
      zip: "",
      zipError: "",
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

    if (this.state.submitting !== NOT_SUBMITTING) {
      return;
    }

    var commentError = "";
    var nameError = "";
    var addressError = "";
    var cityError = "";
    var stateError = "";
    var zipError = "";
    var privacyCheckboxError = "";
    var emailError = "";

    if (!this.state.comment.trim()) {
      valid = false;

      commentError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty comment Error"
      });
    }

    if (!this.state.name.trim()) {
      valid = false;

      nameError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty name Error"
      });
    }

    if (!this.state.address.trim()) {
      valid = false;

      addressError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty address Error"
      });
    }

    if (!this.state.city.trim()) {
      valid = false;

      cityError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty city Error"
      });
    }

    if (!this.state.state) {
      valid = false;

      stateError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty state Error"
      });
    }

    if (!this.state.zip.trim()) {
      valid = false;

      zipError = 'This field is required.';
      reactGA.event({
        category: "Signup",
        action: "Form Error",
        label: "Empty zip Error"
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

    if (this.state.signupCheckbox) {
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
    }

    if (valid) {
      reactGA.event({
        category: "Signup",
        action: "Submitting the form",
        label: "FCC Comments"
      });
      /*this.sheets({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        signup: this.state.signupCheckbox
      });*/
    } else {
      this.setState({
        commentError,
        nameError,
        addressError,
        cityError,
        stateError,
        zipError,
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

    if (this.state.signupCheckbox) {
      emailInput = (
        <InputElement name="email" label="Email" inputRef={(input) => { this.emailInput = input; }} type="email" value={this.state.email} onChange={this.onChange} placeholder="Email*" errorMessage={this.state.emailError}/>
      );
      emailError = (
        <ErrorMessage>{this.state.emailError}</ErrorMessage>
      );
    }

    if (this.props.subscribed) {
      signupCheckbox = null;
    }

    return (
      <div className="fcc-form-input-container">
        <InputElement name="comment" label="Comment Box" type="textarea" value={this.state.comment} onChange={this.onChange} placeholder="Brief comments*" errorMessage={this.state.commentError}/>
        <ErrorMessage>{this.state.commentError}</ErrorMessage>

        <InputElement name="name" label="Name" type="text" value={this.state.name} onChange={this.onChange} placeholder="Name*" errorMessage={this.state.nameError}/>
        <ErrorMessage>{this.state.nameError}</ErrorMessage>

        <InputElement name="address" label="Address" type="text" value={this.state.address} onChange={this.onChange} placeholder="Address*" errorMessage={this.state.addressError}/>
        <ErrorMessage>{this.state.addressError}</ErrorMessage>

        <InputElement name="city" label="City" type="text" value={this.state.city} onChange={this.onChange} placeholder="City*" errorMessage={this.state.cityError}/>
        <ErrorMessage>{this.state.cityError}</ErrorMessage>

        <select autoComplete="off" className={stateClassName} required value={this.state.state} onChange={this.stateChange}>
          <option value="">State*</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AS">American Samoa</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">Dist. of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="GU">Guam</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MH">Marshall Islands</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="FM">Micronesia</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="MP">Northern Marianas</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PW">Palau</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="VI">Virgin Islands</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
          <option value="other" data-other="">other</option>
        </select>
        <ErrorMessage>{this.state.stateError}</ErrorMessage>


        <InputElement name="zip" label="Zip" type="text" value={this.state.zip} onChange={this.onChange} placeholder="Zip*" errorMessage={this.state.zipError}/>
        <ErrorMessage>{this.state.zipError}</ErrorMessage>

        <ErrorMessage>{this.state.signupError}</ErrorMessage>
        {signupCheckbox}
        {emailInput}
        {emailError}
        <label>
          <input onClick={this.onPrivacyCheckboxClick} className="checkbox" autoComplete="off" onChange={this.privacyCheckboxChange} value={this.state.privacyCheckbox} type="checkbox"></input>
          <span>
            I’m okay with Mozilla using my comments for its net neutrality campaign, in accordance with the Mozilla <a href="https://www.mozilla.org/about/legal/terms/mozilla/">Terms of Service</a>
          </span>
          <ErrorMessage>{this.state.privacyCheckboxError}</ErrorMessage>
        </label>
        <label>
          Note: Mozilla will be filing this document on your behalf via <a href="https://www.fcc.gov/ecfs/filings/express">https://www.fcc.gov/ecfs/filings/express</a> into an official FCC proceeding. Per FCC guidelines, the FCC will make all information submitted, including names and addresses, publicly available via the web. Mozilla will otherwise manage your submitted information as explained in our <a href="https://www.mozilla.org/privacy/websites/">Privacy Notice</a>.
        </label>
        <button onClick={this.onSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    );
  }
});
module.exports = Signup;
