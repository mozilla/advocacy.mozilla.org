import React from 'react';

var Logo = React.createClass({
  render: function() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="nav-logo-container">
            <a href="https://mozilla.org/" className="nav-logo"></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Logo;
