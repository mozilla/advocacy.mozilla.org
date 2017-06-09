import React from 'react';

var PosterImage = React.createClass({
  render: function() {
    return (
      <span onClick={this.props.onClick} className="poster-image">
        {this.props.children}
        <img className="poster-image-element" src={this.props.src}/>
      </span>
    );
  }
});

module.exports = PosterImage;
