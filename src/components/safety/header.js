import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div className="safety-header">
        <div className="container">
          <img src="/assets/safety/header.svg" className="header-image"/>
          <div className="moz-logo">mozilla</div>
          <img src="/assets/safety/mobile-header.svg" className="mobile-header-image"/>
        </div>
      </div>
    );
  }
});

module.exports = Header;
