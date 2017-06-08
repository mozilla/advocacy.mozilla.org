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
      tipStatus: "nothing"
    };
  },
  onStart: function() {
    if (this.props.onStart) {
      this.props.onStart();
    }
    reactGA.event({
      category: "Video",
      action: "Video Played",
      label: this.props.item.title
    });
  },
  onReplay: function() {
    if (this.props.onStart) {
      this.props.onStart();
    }
    reactGA.event({
      category: "Video",
      action: "Video Replayed",
      label: this.props.item.title
    });
  },
  onEnd: function() {
    if (this.props.onEnd) {
      this.props.onEnd();
    }
    reactGA.event({
      category: "Video",
      action: "Video Ended",
      label: this.props.item.title
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
  shareFbClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Facebook"
    });
    document.querySelector("#share-progress-fb a").click();
  },
  shareTwClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Twitter"
    });
    document.querySelector("#share-progress-tw a").click();
  },
  shareEmClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Email"
    });
    document.querySelector("#share-progress-em a").click();
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
      <PosterImage onClick={this.onStart} src={this.props.item.thumbnail}>
        <PlayButton/>
      </PosterImage>
    );

    if (this.props.videoStatus === "playing") {
      video = (
        <div className="youtube-container">
          <YouTube
            opts={{
              height: '100%',
              width: '100%',
              playerVars: { 
                autoplay: 1
              } 
            }}
            videoId={this.props.item.video}
            onEnd={this.onEnd}
          />
        </div>
      );
    } else if (this.props.videoStatus === "ended") {
      video = (
        <PosterImage onClick={this.onReplay} src={this.props.item.thumbnail}>
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
              <div onClick={this.shareFbClick} className="share-button">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div onClick={this.shareTwClick} className="share-button">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div onClick={this.shareEmClick} className="share-button">
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
            {/*<div>
              is this information helpful?
              <button className={succesButton} onClick={this.tipSuccess}>Yes I got it!</button>
              <button className={failureButton} onClick={this.tipFailure}>No, this does not help me</button>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DisplayItem;
