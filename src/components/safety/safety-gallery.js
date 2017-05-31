import React from 'react';

var SafetyGallery = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="safety-gallery">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = SafetyGallery;
