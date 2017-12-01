import React from 'react';
import classnames from 'classnames';
import submit from '../../lib/submit.js';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return { submitting: false };
  },
  callMEP: function() {
    this.setState({
      submitting: true
    });

    submit(
      '/api/call',
      {
        number: this.props.number,
        locale: this.context.intl.locale
      },
      (result) => this.callPlaced(result),
      (status, errorPromise) => this.callFailed(status, errorPromise)
    );
  },
  callPlaced: function(result) {
    if (this.props.onSuccess) {
      this.props.onSuccess(result);
    }
  },
  callFailed: function(status, errorPromise) {
    errorPromise.then(error => {
      if (this.props.onError) {
        this.props.onError(status, error);
      }
    });
    this.setState({
      submitting: false
    });
  },
  /**
   * render pulls double duty, in that it determines whether it
   * needs render a real call button, or a navigation link that
   * sends visitors on to the "call-now" section of this website.
   */
  render: function() {
    if (typeof this.props.number !== "undefined") {
      return this.renderCallButton();
    }
    const shadow = this.props.shadow;
    const containerClass = classnames("call-button-container", {shadow: shadow});
    const buttonProps = {
      href: `/${this.context.intl.locale}/net-neutrality/call-now`,
      className: classnames(
        "button",
        "call-button",
        { "shadow": shadow }
      )
    };
    return (
      <div className={containerClass}>
        <a {...buttonProps}>{this.context.intl.formatMessage({id: 'call_now_button'})}</a>
      </div>
    );
  },
  renderCallButton: function() {
    const classNames = classnames({
      "submitting": this.state.submitting
    });
    return (
      <button className={classNames} onClick={() => this.callMEP()}>{this.context.intl.formatMessage({id: 'call_now_button'})}</button>
    )
  }
});
