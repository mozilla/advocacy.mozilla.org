import React from 'react';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="form-body-container">
        <div className="form-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});
