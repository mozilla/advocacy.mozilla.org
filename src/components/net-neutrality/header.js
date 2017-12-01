import React from 'react';
import CallButton from './call-button.js';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <header className="header">
        <h1>Stop Ajit Pai’s Plan to Kill Net Neutrality</h1>
        <p><span className="blue-highlight">Congress Needs to Hear from You</span></p>
        <p className="header-paragraph">Call your members of Congress and urge them to stop Pai’s plan</p>
        <CallButton shadow={true} />
        <p className="italic"><a href={`/${this.context.intl.locale}/net-neutrality/call-now`}>We’ll provide a script to help you make the call</a></p>
      </header>
    );
  }
});
