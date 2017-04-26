import React from 'react';
import reactGA from 'react-ga';

var ScrollNav = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <SimpleNav/>
    );
  }
});

var SimpleNav = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var active = this.props.active || ``;
    var activate = this.props.activate || function() {};
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

module.exports = {
  SimpleNav,
  ScrollNav
};
