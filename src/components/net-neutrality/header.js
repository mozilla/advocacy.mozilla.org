import React from 'react';
import reactGA from 'react-ga';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  mobileGetInvolved: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Get Involved Clicked"
    });
  },
  render: function() {
    return (
      <div className="net-neutrality-header">
        <div className="header-image"></div>
        <div className="header-content">
          <div className="header-content-container">
            <h1>
              The FCC has a plan to destroy net neutrality. It’s up to us to stop it.
            </h1>
            <p>
              Make your voice heard: Stand up for net neutrality.
            </p>
            <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
              Sign our letter
            </a>
          </div>
        </div>
      </div>
    );
  }
});
