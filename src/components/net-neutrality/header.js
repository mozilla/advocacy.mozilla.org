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
              Make your voice heard: Stand up for net neutrality.
            </h1>
            <p>
              The FCC has a plan to destroy Net Neutrality. It’s up to us to stop it.
            </p>
            <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
              Sign our letter supporting NN
            </a>
          </div>
        </div>
      </div>
    );
  }
});
