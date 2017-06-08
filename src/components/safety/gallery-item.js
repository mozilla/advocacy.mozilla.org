import React from 'react';
import PosterImage from './poster-image.js';
import PlayButton from './play-button.js';
var Router = require(`react-router`);
var Link = Router.Link;

var GalleryItem = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  onClick: function() {
    window.scrollTo(0, 0);
    if (this.props.onClick) {
      this.props.onClick();
    }
  },
  render: function() {
    var locale = this.context.intl.locale;
    return (
      <div className="gallery-item">
        <Link onClick={this.onClick} to={"/" + locale + "/safety/" + this.props.item.slug}>
          <PosterImage src={this.props.item.thumbnail}>
            <PlayButton/>
          </PosterImage>
          <span className="title">{this.props.item.title}</span>
          <span className="description" dangerouslySetInnerHTML={{
            __html: this.props.item.description
          }}/>
        </Link>
      </div>
    );
  }
});

module.exports = GalleryItem;
