import React from 'react';
import MobileHeader from './mobile-header.js';
var Router = require(`react-router`);
var Link = Router.Link;

var GalleryItemHeader = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="gallery-item-header-container">
        <MobileHeader linkTo={"/" + this.context.intl.locale + "/safety"}/>
        <Link to={"/" + this.context.intl.locale + "/safety"}>
          <span className="gallery-item-header"></span>
        </Link>
      </div>
    );
  }
});

module.exports = GalleryItemHeader;
