import React from 'react';
import PosterImage from './poster-image.js';
import PlayButton from './play-button.js';
import NextVideo from './next-video.js';
import YouTube from 'react-youtube';
import reactGA from 'react-ga';
import classnames from "classnames";

var DisplayItem = React.createClass({
  getInitialState: function() {
    return {
      videoStatus: "stopped",
      tipStatus: "nothing"
    };
  },
  onClick: function() {
    this.setState({
      videoStatus: "playing"
    });
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  componentWillReceiveProps: function() {
    window.scrollTo(0, 0);
    this.setState({
      videoStatus: "stopped"
    });
  },
  onEnd: function() {
    this.setState({
      videoStatus: "ended"
    });
  },
  tipSuccess: function() {
    reactGA.event({
      category: "Button",
      action: "Tip Result",
      label: "Success"
    });
    this.setState({
      tipStatus: "success"
    });
  },
  tipFailure: function() {
    reactGA.event({
      category: "Button",
      action: "Tip Result",
      label: "Failure"
    });
    this.setState({
      tipStatus: "failure"
    });
  },
  render: function() {

    var tipStatus = this.state.tipStatus;
    var succesButton = classnames(`button`, {
      "success": tipStatus === "success"
    });
    var failureButton = classnames(`button`, {
      "failure": tipStatus === "failure"
    });

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

    if (this.state.videoStatus === "playing") {
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
    } else if (this.state.videoStatus === "ended") {
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
            <div className="title-container">
              <div className="title">{this.props.item.title}</div>
              <div className="share-button">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="share-button">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className="share-button">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
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
              <button className={succesButton} onClick={this.tipSuccess}>Yes I got it!</button>
              <button className={failureButton} onClick={this.tipFailure}>No, this does not help me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DisplayItem;
