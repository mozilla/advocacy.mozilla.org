import React from 'react';

var SignupCta = React.createClass({
  render: function() {
    return (
      <div className="signup-cta">
        <div className="container">
          <div className="moz-logo">mozilla</div>
          <div className="cta">keeping you & your digital loved ones secure</div>
          <button onClick={this.props.onCta}>subscribe</button>
        </div>
      </div>
    );
  }
});

module.exports = SignupCta;
