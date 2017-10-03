import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div className="buyers-guide-header-container">
        <div className="buyers-guide-header">
          <button>hamburger</button>
          <button>moz logo</button>
          <button className="social-button">F</button>
          <button className="social-button">T</button>
          <button className="social-button">E</button>
        </div>
      </div>
    );
  }
});

module.exports = Header;
