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
              main title
            </h1>
            <p>
              main paragraph
            </p>
            <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
              get involved
            </a>
          </div>
        </div>
      </div>
    );
  }
});
