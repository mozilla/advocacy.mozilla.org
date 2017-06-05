import React from 'react';

var MobileHeader = React.createClass({
  render: function() {
    return (
      <div className="mobile-header">
        <a href="https://mozilla.org/" className="moz-logo">mozilla</a>
        <img src="/assets/safety/mobile-header.svg" className="mobile-header-image"/>
      </div>
    );
  }
});

module.exports = MobileHeader;
