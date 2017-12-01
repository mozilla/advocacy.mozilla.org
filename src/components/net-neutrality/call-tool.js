import React from 'react';
import classnames from 'classnames';
import CallButton from './call-button.js';
import Social from './social.js';
import { FormattedMessage } from 'react-intl';

/**
 * This function is responsible for mapping HTTP status numbers to
 * specific string ids for generating page content to inform the user
 * about what that status code means in terms of their ability to call.
 */
function getCustomError(status) {
  if (status === -1 || status >= 500) {
    return ['unknown_problems', 'please_retry_later'];
  }
  if (status === 400) {
    return ['we_cannot_call'];
  }
  if (status === 429) {
    return ['hourly_limit_reached'];
  }
  return false;
}


module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function(countryPrefix, number) {
    var countryPrefix = "1";
    var number = number || "(+" + countryPrefix + ") ";
    return {
      countryPrefix,
      number,
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
  prefixChange: function(e) {
    this.textInput.focus();
    this.setState({
      countryPrefix: e.target.value,
      number: "(+" + e.target.value + ") "
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
    var state = this.getInitialState(this.state.countryPrefix, this.state.number);
    this.setState(state);
  },
  isBusinessClosed: function() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() + 2);
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
        { this.state.customError.map( id => <h2 className="bold" key={id}>{this.context.intl.formatMessage({id})}</h2> )}
        <button onClick={() => this.retry()}>{this.context.intl.formatMessage({id: 'try_again'})}</button>
      </section>
    );
  },
  isAfterOct29: function() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() + 2);
    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    if (month >= 9 && day >= 29) {
      return true;
    }
    return false;
  },
  renderClosedSign: function() {
    var hoursString = "business_hours_cest";
    if (this.isAfterOct29()) {
      hoursString = "business_hours_cet";
    }
    return (
      <section>
        <h2>
          {this.context.intl.formatMessage({id: 'closed_for_business'})}
          <br/>
          {this.context.intl.formatMessage({id: hoursString})}
        </h2>
      </section>
    );
  },
  renderForm: function() {

    // We need to ensure there is enough space in the
    // input to show the placeholder in ultiple languages.
    var placeholder = this.context.intl.formatMessage({id: 'enter_phone'});
    var countryPrefix = "(+" + this.state.countryPrefix + ")";

    // Default placeholder state is a fresh page load state.
    // Example: "(+44) placeholder text"
    var placeholderContainer = (
      <span className="placeholder-container">
        <span className="placeholder-width">{countryPrefix}&nbsp;</span>
        <span className="placeholder">{placeholder}&nbsp;</span>
      </span>
    );

    // This state is for when the input has been cleared,
    // completely empty, so no county prefix.
    if (!this.state.number) {
      placeholderContainer = (
        <span className="placeholder-container">
          <span className="placeholder-width">{placeholder}&nbsp;</span>
        </span>
      );
    }
    // This state is for when the input is not empty and not default.
    // Example: "(+44) 12345678"
    else if (this.state.number !== "(+" + this.state.countryPrefix + ") ") {
      placeholderContainer = (
        <span className="placeholder-container">
          <span className="placeholder-width">{this.state.number}&nbsp;</span>
        </span>
      );
    }

    const messageId = this.state.validNumber ? 'enter_phone_title' : 'whoops_phone_number';

    return (
      <section>
        <h2 className="bold">{this.context.intl.formatMessage({id: messageId})}</h2>
        <div className={classnames("phone-number-input-container", { "valid": this.state.validNumber })}>
          <span className="input-container">
            <input ref={(input) => { this.textInput = input; }} onChange={this.numberChange} value={this.state.number} placeholder={this.context.intl.formatMessage({id: 'enter_phone'})}/>
            {placeholderContainer}
          </span>
        </div>

        <CallButton
          number={this.state.number}
          onSuccess={s => this.handleSuccess(s)}
          onError={e => this.handleError(e)}
        />

        <div>
          <FormattedMessage
            id='cta_disclaimer'
            values={{
              ctaTosLink: (<a href="https://www.mozilla.org/about/legal/terms/mozilla/">{this.context.intl.formatMessage({id: 'cta_link_tos'})}</a>),
              ctaPpLink: (<a href="https://www.mozilla.org/privacy/websites/">{this.context.intl.formatMessage({id: 'cta_link_pp'})}</a>)
            }}
          />
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
