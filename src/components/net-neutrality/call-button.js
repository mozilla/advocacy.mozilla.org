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
  makeCall: function() {
    if (this.state.submitting) {
      return;
    }

    this.setState({
      submitting: true
    });

    submit(
      '/api/call',
      {
        number: this.props.number,
        locale: this.context.intl.locale,
        zip: this.props.zip
      },
      (result) => this.callPlaced(result),
      (result) => this.callFailed(result)
    );
  },
  callPlaced: function(result) {
    if (this.props.onSuccess) {
      this.props.onSuccess(result);
    }
  },
  callFailed: function(result) {
    if (this.props.onError) {
      this.props.onError(result);
    }
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
        <a {...buttonProps}>Call Now</a>
      </div>
    );
  },
  renderCallButton: function() {
    const classNames = classnames("call-tool-button", {
      "submitting": this.state.submitting
    });
    return (
      <button className={classNames} onClick={() => this.makeCall()}>Call Now</button>
    )
  }
});
