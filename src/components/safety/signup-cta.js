import React from 'react';

var SignupCta = React.createClass({
  getInitialState: function() {
    return {
      button: null
    };
  },
  componentDidMount: function() {
    var button = (<button onClick={this.props.onCta}>subscribe</button>);
    if (this.props.subscribed) {
      button = null;
    }
    this.setState({
      button: button
    });
  },
  render: function() {
    return (
      <div className="signup-cta">
        <div className="container">
          <a href="https://mozilla.org/" className="moz-logo"></a>
          <div className="cta">keeping you & your digital loved ones secure</div>
          {this.state.button}
        </div>
      </div>
    );
  }
});

module.exports = SignupCta;
