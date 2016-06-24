var React = require(`react`);
var ga = require('react-ga');
var classNames = require('classnames');
import { FormattedMessage } from 'react-intl';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState() {
    return {
      seventyFivePercentDone: false
    };
  },
  componentDidMount() {

    var video = this.refs.video;

    video.addEventListener("play", (e) =>{
      this.props.setPageState({
        videoIsPaused: false
      });
      ga.event({category: "Video", action: "Video started"});
    });

    video.addEventListener("pause", (e) =>{
      this.props.setPageState({
        videoIsPaused: true
      });
    });

    video.addEventListener("webkitendfullscreen", (e) => {
      this.props.setPageState({
        videoDidEnd: true
      });
      ga.event({category: "Video", action: "iOS user clicked done", value: e.srcElement.currentTime});
    });
    video.addEventListener("timeupdate", (e)=>{
      if (video.currentTime/video.duration >= 0.75 && !this.state.seventyFivePercentDone) {
        ga.event({category: "Video", action: "75% complete"});
        this.setState({seventyFivePercentDone: true});
      }
    });
    video.addEventListener("ended", (e) => {
      this.props.setPageState({
        videoDidEnd: true
      });
      ga.event({category: "Video", action: "Video ended"});
    });
    this.refs.theatre.addEventListener("click", (e)=>{
      this.hideTheatre();
    });
  },
  playVideo: function() {
    this.refs.video.play();
    this.props.setPageState({
      videoDidStart: true
    });
  },
  componentDidUpdate(prevProps, prevState) {
    //Slight hack to prevent flickering and allow switching of paused video
    if (this.props.video !== prevProps.video) {
      this.refs.videoWrapper.style.height = this.refs.videoWrapper.clientHeight + 'px';
      this.refs.video.load();
      this.refs.videoWrapper.style.height = '';
    }
  },
  hideTheatre: function() {
    this.refs.video.pause();
    this.props.setPageState({
      videoIsPaused: true
    });
    ga.event({category: "Video", action: "Clicked to paused the video"});
  },
  render: function() {
    var locale = this.context.intl.locale;
    var mp4VideoLocalized = `${this.props.video[this.props.videoType]}-${locale}.mp4`;
    var webmVideoLocalized = `${this.props.video[this.props.videoType]}-${locale}.webm`;
    var mp4Video = this.props.video[this.props.videoType] + '.mp4';
    var webmVideo = this.props.video[this.props.videoType] + '.webm';
    var encryptWrapperClass = classNames({
      'encrypt-meta-wrapper':true,
      'fadedOut': this.props.videoDidStart && document.body.clientWidth >= 650 && this.props.pageVersion !== "3"
    });
    var playButtonClass = classNames({
      'playButton': true,
      'fadedOut' : this.props.videoDidStart  && !this.props.videoIsPaused
    });
    var videoTheatreClass = classNames({
      'video-theatre': true,
      'visible': this.props.videoDidStart && this.props.pageVersion !== "3" && !this.props.videoDidEnd && !this.props.videoIsPaused
    });
    var videoClass = classNames({
      'fadedIn': this.props.videoDidStart,
      'fadedOut': !this.props.videoDidStart
    });
    var videoWrapperClass = classNames({
      'video-wrapper': true,
      'playing': this.props.videoDidStart && !this.props.videoIsPaused && !this.props.videoDidEnd
    });

    var videoMeta = (<div></div>);

    if (!this.props.hideVideoMeta) {
      videoMeta = (
        <div>
          <span className="videoMeta">
            <span className="episodeNumber">
              <FormattedMessage
                id="episode_num"
                values={{
                  num: (<span className="episodeNumber">{this.props.activeVideo+1}</span>)
                }}
              />
            </span>
            <time className="video-date" dateTime="2016-02-08">{this.props.video.date}</time>
            <span className="duration">{this.props.video.duration}</span>
          </span>
          <div id="videoTitle" className="videoTitle">
            {this.context.intl.formatMessage({id: this.props.video.title})}
          </div>
        </div>
      );
    }

    var videoDesc = (<div></div>);
    if (!this.props.hideVideoDesc) {
      videoDesc = (
        <p id="videoDescription" className="video-description">{this.props.description || this.context.intl.formatMessage({id: this.props.video.description})}</p>
      );
    }

    var socialButtonLink = (<div></div>);
    if (this.props.socialButtonLink && (!this.props.videoDidStart || this.props.videoIsPaused || this.props.videoDidEnd)) {
      socialButtonLink = (
        <a className="video-share-link" href={this.props.socialButtonLink}>
          <i className="fa fa-share-alt" aria-hidden="true"></i>
        </a>
      );
    }

    return (
      <div className={videoWrapperClass}>
        <div ref="theatre" className={videoTheatreClass}></div>
          <div className="video-btn-wrapper" ref="videoWrapper">
            <button onClick={this.playVideo} className={playButtonClass} aria-label="Play video" ref="playButton"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTIuMTM1IiBoZWlnaHQ9IjExMi4xMzUiIHZpZXdCb3g9IjAgMCAxMTIuMTM1IDExMi4xMzUiPjxnPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01NS44MjMgMTIuNzc4YzIzLjA5OCAwIDQxLjgyMiAxOC43MjUgNDEuODIyIDQxLjgyMlM3OC45MiA5Ni40MjIgNTUuODIzIDk2LjQyMnMtNDEuODItMTguNzI0LTQxLjgyLTQxLjgyIDE4LjcyMy00MS44MjQgNDEuODItNDEuODI0bTAtNS4zMkMyOS44MyA3LjQ1OCA4LjY4IDI4LjYwNiA4LjY4IDU0LjZzMjEuMTQ4IDQ3LjE0NCA0Ny4xNDMgNDcuMTQ0IDQ3LjE0My0yMS4xNDggNDcuMTQzLTQ3LjE0M1M4MS44MTYgNy40NiA1NS44MjMgNy40NnpNNDYuODggNzIuMzc0VjM3LjY5N2wyMy4xNzcgMTcuMzR6Ii8+PC9nPjwvc3ZnPg==" alt="play icon"/></button>
            <img src={this.props.video.poster} hidden={this.props.videoDidStart} className="video-poster" style={{position:"absolute"}}/>
            <video className={videoClass} aria-describedby="videoDescription" ref="video" controls={this.props.videoDidStart} aria-labeledby="videoTitle" poster={this.props.video.poster} autoBuffer width={this.props.width} height={this.props.height} style={{zIndex:1000}}>
              A video about why encryption is important. Privacy lets you be you.
              <source id="webm" src={webmVideoLocalized} type="video/webm"/>
              <source id="mp4" src={mp4VideoLocalized} type="video/mp4"/>
              <source id="webm" src={webmVideo} type="video/webm"/>
              <source id="mp4" src={mp4Video} type="video/mp4"/>
            </video>
            {socialButtonLink}
          </div>
        <div className={encryptWrapperClass} ref="metaWrapper">
          <div className="encrypt-meta">
            {videoMeta}
            {videoDesc}
          </div>
        </div>
      </div>
    );
  }

});
