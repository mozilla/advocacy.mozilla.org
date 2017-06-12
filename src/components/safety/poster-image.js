import React from 'react';

var PosterImage = React.createClass({
  render: function() {
    return (
      <span onClick={this.props.onClick} className="poster-image">
        <img className="poster-image-element" src={this.props.src}/>
        {this.props.children}
      </span>
    );
  }
});

module.exports = PosterImage;
