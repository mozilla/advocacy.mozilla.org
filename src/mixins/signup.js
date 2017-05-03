import React from 'react';
import reactGA from 'react-ga';
import submit from '../lib/submit';

var NOT_SUBMITTING = 0;
var PETITION_SUBMITTING = 2;

var SignupMixin = {
  contextTypes: {
    intl: React.PropTypes.object
  },
  doSignupSuccess: function(result, location) {
    reactGA.event({
      category: "Signup",
      action: "Submitted the form",
      label: "Open Data"
    });
    window.location = location;
  },
  signupError: function(result) {
    this.setState({
      submitting: NOT_SUBMITTING,
      signupError: this.context.intl.formatMessage({id: 'try_again_later'})
    });
  },
  doSignup: function(url, props, success, error) {
    this.setState({
      submitting: PETITION_SUBMITTING,
      signupError: ""
    });
    props.locale = this.context.intl.locale;
    submit(url, props, success, error);
  },
  petitionSuccess: function(result) {
    this.doPetitionSuccess(result, 'http://share.mozilla.org/352/180765');
  },
  sheets: function(props) {
    this.doPetition("/api/petition/sheets", props, this.petitionSuccess, this.petitionError);
  },
  doPetitionSuccess: function(result, location) {
    reactGA.event({
      category: "Petition",
      action: "Submitted the form",
      label: "Open Data"
    });
    window.location = location;
  },
  petitionError: function(result) {
    this.setState({
      submitting: NOT_SUBMITTING,
      petitionError: this.context.intl.formatMessage({id: 'try_again_later'})
    });
  },
  doPetition: function(url, props, success, error) {
    this.setState({
      submitting: PETITION_SUBMITTING,
      petitionError: ""
    });
    props.locale = this.context.intl.locale;
    submit(url, props, success, error);
  },
  signupSuccess: function(result) {
    this.doSignupSuccess(result, 'http://share.mozilla.org/352/180765');
  },
  basket: function(props) {
    this.doSignup("/api/signup/basket", props, this.signupSuccess, this.signupError);
  }
};

module.exports = SignupMixin;
