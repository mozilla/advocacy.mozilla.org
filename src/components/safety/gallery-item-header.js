import React from 'react';
import MobileHeader from './mobile-header.js';

var GalleryItemHeader = React.createClass({
  render: function() {
    return (
      <div className="gallery-item-header-container">
        <MobileHeader/>
        <div className="gallery-item-header"></div>
      </div>
    );
  }
});

module.exports = GalleryItemHeader;
