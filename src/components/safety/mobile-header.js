import React from 'react';

var MobileHeader = React.createClass({
  render: function() {
    return (
      <div className="mobile-header">
        <div className="moz-logo">mozilla</div>
        <img src="/assets/safety/mobile-header.svg" className="mobile-header-image"/>
      </div>
    );
  }
});

module.exports = MobileHeader;
