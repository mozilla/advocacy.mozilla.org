import React from 'react';
import classnames from 'classnames';
import CallButton from './call-button.js';
import Social from './social.js';
import reactGA from 'react-ga';

/**
 * This function is responsible for mapping HTTP status numbers to
 * specific string ids for generating page content to inform the user
 * about what that status code means in terms of their ability to call.
 */
function getCustomError(status) {
  if (status === -1 || status >= 500) {
    return ['We’re sorry, we seem to be having some trouble.', 'Please try again later.'];
  }
  if (status === 400) {
    return ['We can’t call that number.'];
  }
  if (status === 429) {
    return ['Thanks for your calls! You’ve reached the hourly limit. Please try again in an hour.'];
  }
  return false;
}


module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function(number, zip) {
    return {
      number: number || "",
      zip: zip || "",
      validNumber: true,
      validZip: true,
      calling: false,
      customError: false
    };
  },
  componentDidMount: function() {
    if (!this.textInput) {
      return;
    }
    var number = this.textInput.value;
    var zip = this.zipInput.value;
    this.setState({
      number,
      zip
    });
  },
  numberChange: function(e) {
    this.setState({
      number: e.target.value,
      validNumber: true
    });
  },
  zipChange: function(e) {
    this.setState({
      zip: e.target.value,
      validZip: true
    });
  },
  handleSuccess: function(s) {
    reactGA.event({
      category: "Call Tool",
      action: "Form Call Success",
      label: "Net Neutrality"
    });
    this.setState({
      calling: true
    })
  },
  handleError: function(result) {
    var validNumber = true;
    var validZip = true;
    if (result.value === "phone") {
      validNumber = false;
    } else if (result.value === "zip") {
      validZip = false;
    }
    if (result.value) {
      reactGA.event({
        category: "Call Tool",
        action: "Form Call Error " + result.value,
        label: "Net Neutrality"
      });
    } else {
      reactGA.event({
        category: "Call Tool",
        action: "Form Call Error " + result.status,
        label: "Net Neutrality"
      });
    }
    this.setState({
      validNumber,
      validZip,
      customError: getCustomError(result.status)
    });
  },
  retry: function() {
    var state = this.getInitialState(this.state.number, this.state.zip);
    this.setState(state);
  },
  render: function() {
    var content = null;
    if (this.state.customError) {
      content = this.renderCustomError();
    } else if (this.state.calling) {
      content = this.renderCalling();
    } else {
      content = this.renderForm();
    }

    return <div className="call-tool-background">{content}</div>;
  },
  renderCustomError: function() {
    return (
      <section>
        { this.state.customError.map( message => <h2 className="bold" key={message}>{message}</h2> )}
        <button onClick={() => this.retry()}>TRY AGAIN</button>
      </section>
    );
  },
  renderForm: function() {
    var message = 'Enter your phone number and get a call back immediately';
    if (!this.state.validNumber) {
      message = 'Whoops! Make sure you enter your correct phone number.';
    }else if (!this.state.validZip ) {
      message = 'Whoops! Make sure you enter your correct zip code.';
    }

    return (
      <section>
        <h2 className="bold">{message}</h2>
        <div className="input-wrapper">
          <div className={classnames("phone-number-input-container", { "valid": this.state.validNumber })}>
            <span className="input-container">
              <input ref={(input) => { this.textInput = input; }} onChange={this.numberChange} value={this.state.number} placeholder="Enter your phone #"/>
            </span>
          </div>
          <div className={classnames("zip-input-container", { "valid": this.state.validZip })}>
            <span className="input-container">
              <input ref={(input) => { this.zipInput = input; }} onChange={this.zipChange} value={this.state.zip} placeholder="Enter your zip"/>
            </span>
          </div>
          <div className="button-wrapper">
            <CallButton
              number={this.state.number}
              zip={this.state.zip}
              onSuccess={s => this.handleSuccess(s)}
              onError={e => this.handleError(e)}
            />
          </div>
        </div>
        <p>
          We will only use your phone number to make this call. Find out more about <a href="https://www.mozilla.org/about/legal/terms/mozilla/">Mozilla’s Terms of Service</a> and <a href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>
        </p>
      </section>
    );
  },
  renderCalling: function() {
    return (
      <section>
        <h2 className="bold">Calling your phone now!</h2>
        <div>Thank you for calling! Multiply your impact by sharing after your call.</div>
        <Social/>
        <p className="try-again">
          Didn’t get through? <a href={`/${this.context.intl.locale}/net-neutrality/call-now`}>Try calling again</a>.
        </p>
      </section>
    );
  }
});
