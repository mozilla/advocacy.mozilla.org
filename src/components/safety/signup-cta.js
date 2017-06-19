import React from 'react';

var SignupCta = React.createClass({
  render: function() {
    return (
      <div className="signup-cta">
        <div className="container">
          <a href="https://mozilla.org/" className="moz-logo"></a>
          <div className="cta">keeping you & your digital loved ones secure</div>
          <button onClick={this.props.onCta}>subscribe</button>
        </div>
      </div>
    );
  }
});

module.exports = SignupCta;
