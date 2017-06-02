import React from 'react';
import MobileHeader from './mobile-header.js';

var Header = React.createClass({
  render: function() {
    return (
      <div className="safety-header">
        <div className="container">
          <MobileHeader/>
          <img src="/assets/safety/header.svg" className="header-image"/>
        </div>
      </div>
    );
  }
});

module.exports = Header;
