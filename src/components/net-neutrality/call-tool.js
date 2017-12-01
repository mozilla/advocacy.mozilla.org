import React from 'react';
import classnames from 'classnames';
import CallButton from './call-button.js';
import Social from './social.js';

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
  getInitialState: function(number) {
    return {
      number: number || "",
      validNumber: true,
      calling: false,
      customError: false
    };
  },
  componentDidMount: function() {
    if (!this.textInput) {
      return;
    }
    var number = this.textInput.value;
    this.setState({
      number
    });
  },
  numberChange: function(e) {
    this.setState({
      number: e.target.value,
      validNumber: true
    });
  },
  handleSuccess: function(s) {
    this.setState({
      calling: true
    })
  },
  handleError: function(status, e) {
    this.setState({
      validNumber: status !== 409,
      customError: getCustomError(status)
    });
  },
  retry: function() {
    var state = this.getInitialState(this.state.number);
    this.setState(state);
  },
  isBusinessClosed: function() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() - 5);
    var day = date.getUTCDay();
    var hour = date.getUTCHours();

    if (day > 0 && day < 6 && hour > 8 && hour < 18) {
      return false;
    }
    return true;
  },
  render: function() {
    var content = null;
    if (this.isBusinessClosed()) {
      content = this.renderClosedSign();
    } else if (this.state.customError) {
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
  renderClosedSign: function() {
    return (
      <section>
        <h2>
          Please visit this page during business hours to connect your call:
          <br/>
          Monday-Friday, 9:00-18:00 EST.
        </h2>
      </section>
    );
  },
  renderForm: function() {

    var placeholder = "Enter your phone #";

    const message = this.state.validNumber ? 'Enter your phone number and get a call back immediately' : 'Whoops! Make sure you enter your correct phone number.';

    return (
      <section>
        <h2 className="bold">{message}</h2>
        <div className={classnames("phone-number-input-container", { "valid": this.state.validNumber })}>
          <span className="input-container">
            <input ref={(input) => { this.textInput = input; }} onChange={this.numberChange} value={this.state.number} placeholder={placeholder}/>
          </span>
        </div>

        <CallButton
          number={this.state.number}
          onSuccess={s => this.handleSuccess(s)}
          onError={e => this.handleError(e)}
        />

        <div>
          We will only use your phone number to make this call. Find out more about <a href="https://www.mozilla.org/about/legal/terms/mozilla/">Mozilla’s Terms of Service</a> and <a href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>
        </div>
      </section>
    );
  },
  renderCalling: function() {
    return (
      <section>
        <h2 className="bold">{this.context.intl.formatMessage({id: 'calling_headline'})}</h2>
        <div>{this.context.intl.formatMessage({id: 'calling_tagline'})}</div>
        <Social/>
        <p className="try-again">
          <FormattedMessage
            id='call_again'
            values={{
              callAgain: (<a href={`/${this.context.intl.locale}/net-neutrality/call-now`}>{this.context.intl.formatMessage({id: 'call_again_link'})}</a>)
            }}
          />
        </p>
      </section>
    );
  }
});
