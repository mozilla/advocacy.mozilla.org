import React from 'react';
var Router = require(`react-router`);
var Link = Router.Link;

var MobileHeader = React.createClass({
  render: function() {
    var linkTo = this.props.linkTo;
    var image = (
      <img src="/assets/safety/mobile-header.svg" className="mobile-header-image"/>
    );
    if (linkTo) {
      image = (
        <Link to={linkTo} className="home-link">
          {image}
        </Link>
      );
    }
    return (
      <div className="mobile-header">
        <a href="https://mozilla.org/" className="moz-logo">mozilla</a>
        {image}
      </div>
    );
  }
});

module.exports = MobileHeader;
