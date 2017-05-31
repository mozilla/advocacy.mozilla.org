import React from 'react';

var PosterImage = React.createClass({
  render: function() {
    return (
      <span onClick={this.props.onClick} className="poster-image">
        {this.props.children}
        <img src={this.props.src}/>
      </span>
    );
  }
});

module.exports = PosterImage;
