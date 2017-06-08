import React from 'react';
import galleryData from './gallery-data.js';
var Router = require(`react-router`);
var Link = Router.Link;

var PosterImage = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  onClick: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    var locale = this.context.intl.locale;
    var nextIndex = this.props.itemIndex + 1;
    var nextVideo = galleryData[nextIndex];
    if (!nextVideo) {
      nextVideo = galleryData[0];
    }
    
    return (
      <span className="next-video-container">
        <Link onClick={this.onClick} to={"/" + locale + "/safety/" + nextVideo.slug}>
          <span className="next-video">
            <img src={nextVideo.thumbnail}/>
            <span className="next-tip-copy">
              <span className="black-copy">next tip</span>
              <span>{nextVideo.title}</span>
            </span>
          </span>
        </Link>
      </span>
    );
  }
});

module.exports = PosterImage;
