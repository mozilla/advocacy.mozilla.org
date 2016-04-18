import React from 'react';

module.exports = React.createClass({
  childContextTypes: {
    optimizely: React.PropTypes.object,
    optimizelyExperimentData: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      optimizely: window.optimizely || {},
      optimizelyExperimentData: window.optimizelyExperimentData || {}
    };
  },
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

