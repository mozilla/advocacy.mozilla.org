import React from 'react';

var MobileHeader = React.createClass({
  render: function() {
    return (
      <div className="mobile-header">
        <img src="/assets/safety/moz-logo.svg" className="moz-logo"/>
        <img src="/assets/safety/mobile-header.svg" className="mobile-header-image"/>
      </div>
    );
  }
});

module.exports = MobileHeader;
