import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div className="buyers-guide-header-container">
        <div className="buyers-guide-header">
          <button>
            <i className="fa fa-bars fa-2x"></i>
          </button>
          <button>moz logo</button>
          <div className="social-buttons">
            <button className="social-button">
              <i className="fa fa-facebook fa-1x"></i>
            </button>
            <button className="social-button">
              <i className="fa fa-twitter fa-1x"></i>
            </button>
            <button className="social-button">
              <i className="fa fa-envelope fa-1x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
