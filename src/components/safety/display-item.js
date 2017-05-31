import React from 'react';
import PosterImage from './poster-image.js';
import PlayButton from './play-button.js';
import NextVideo from './next-video.js';
import YouTube from 'react-youtube';

var DisplayItem = React.createClass({
  getInitialState: function() {
    return {
      status: "stopped"
    };
  },
  onClick: function() {
    this.setState({
      status: "playing"
    });
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  componentWillReceiveProps: function() {
    window.scrollTo(0, 0);
    this.setState({
      status: "stopped"
    });
  },
  onEnd: function() {
    this.setState({
      status: "ended"
    });
  },
  render: function() {

    const safetyTips = this.props.item.tips.map((tip, index) => {
      return (
        <li key={"key-" + index}>
          <i className="fa fa-check fa-2x" aria-hidden="true"></i>
          <span dangerouslySetInnerHTML={{
            __html: tip
          }}/>
        </li>
      );
    });

    var video = (
      <PosterImage onClick={this.onClick} src={this.props.item.thumbnail}>
        <PlayButton/>
      </PosterImage>
    );

    if (this.state.status === "playing") {
      video = (
        <div className="youtube-container">
          <YouTube
            opts={{
              playerVars: { 
                autoplay: 1
              } 
            }}
            videoId={this.props.item.video}
            onEnd={this.onEnd}
          />
        </div>
      );
    } else if (this.state.status === "ended") {
      video = (
        <PosterImage onClick={this.onClick} src={this.props.item.thumbnail}>
          <NextVideo itemIndex={this.props.itemIndex}/>
        </PosterImage>
      );
    }

    return (
      <div className="display-item-container">
        <div className="display-item-video">
          <div className="container">
            {video}
            <div className="title">{this.props.item.title}</div>
          </div>
        </div>
        <div className="display-item-tips">
          <div className="container">
            <div className="description" dangerouslySetInnerHTML={{
              __html: this.props.item.description
            }}/>
            <ol>
              {safetyTips}
            </ol>
            <div>
              is this information helpful?
              <button>Yes I got it!</button>
              <button>No, this does not help me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DisplayItem;
