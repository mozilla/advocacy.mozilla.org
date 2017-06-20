import React from 'react';
import PosterImage from './poster-image.js';
import PlayButton from './play-button.js';
import NextVideo from './next-video.js';
import YouTube from 'react-youtube';
import classnames from "classnames";

var DisplayItem = React.createClass({
  getInitialState: function() {
    return {
      tipStatus: "nothing"
    };
  },
  onPlay: function() {
    if (this.props.onStart) {
      this.props.onStart();
    }
  },
  onEnd: function() {
    if (this.props.onEnd) {
      this.props.onEnd();
    }
  },
  onNew: function() {
    if (this.props.onNew) {
      this.props.onNew();
    }
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
      <PosterImage onClick={this.onPlay} src={this.props.item.poster}>
        <PlayButton/>
      </PosterImage>
    );

    var autoPlay = 1;
    var pageWidth = 0;
    if (typeof window !== 'undefined') {
      pageWidth = window.innerWidth;
      if (this.props.videoStatus !== "playing") {
        autoPlay = 0;
      }
    }

    if (this.props.videoStatus === "playing" || pageWidth <= 440) {
      video = (
        <div className="youtube-container">
          <YouTube
            opts={{
              height: '100%',
              width: '100%',
              playerVars: {
                rel: 0,
                autoplay: autoPlay
              }
            }}
            videoId={this.props.item.video}
            onEnd={this.onEnd}
            onPlay={this.onPlay}
          />
        </div>
      );
    } else if (this.props.videoStatus === "ended") {
      video = (
        <PosterImage onClick={this.onPlay} src={this.props.item.poster}>
          <NextVideo onClick={this.onNew} itemIndex={this.props.itemIndex}/>
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
