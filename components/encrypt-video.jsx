var React = require(`react`);
var classNames = require('classnames');

module.exports = React.createClass({
  componentDidMount() {
    this.refs.video.addEventListener("ended", (e)=>{
      this.props.setPageState({
	videoDidEnd: true
      });
    });
  },
  playVideo: function(){
    this.refs.video.play();
    this.props.setPageState({
      videoDidStart: true
    });
  },
  render: function() {
    var videoToPlay = {
      "mp4":{
	1: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.mp4",
	2: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.mp4",
	3: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.mp4"
      },
      "webm":{
	1: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.webm",
	2: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.webm",
	3: "https://d24kjznqej0s8a.cloudfront.net/2016/encryption_campaign/moz.final.1.native.webm"
      }
    }
    var encryptWrapperClass = classNames({
      'encrypt-meta-wrapper':true,
      'fadedOut': this.props.videoDidStart && document.body.clientWidth >= 650 && this.props.version != "3"
    });
    var playButtonClass = classNames({
      'playButton': true,
      'fadedOut' : this.props.videoDidStart
    });
    var videoTheatreClass = classNames({
      'video-theatre': true,
      'visible': this.props.videoDidStart && this.props.version != "3" && !this.props.videoDidEnd
    });

    return (
      <div className="video-wrapper">
	<div className={videoTheatreClass}></div>
	<div className="video-btn-wrapper">
	  <button onClick={this.playVideo} className={playButtonClass} aria-label="Play video" ref="playButton"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTIuMTM1IiBoZWlnaHQ9IjExMi4xMzUiIHZpZXdCb3g9IjAgMCAxMTIuMTM1IDExMi4xMzUiPjxnPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01NS44MjMgMTIuNzc4YzIzLjA5OCAwIDQxLjgyMiAxOC43MjUgNDEuODIyIDQxLjgyMlM3OC45MiA5Ni40MjIgNTUuODIzIDk2LjQyMnMtNDEuODItMTguNzI0LTQxLjgyLTQxLjgyIDE4LjcyMy00MS44MjQgNDEuODItNDEuODI0bTAtNS4zMkMyOS44MyA3LjQ1OCA4LjY4IDI4LjYwNiA4LjY4IDU0LjZzMjEuMTQ4IDQ3LjE0NCA0Ny4xNDMgNDcuMTQ0IDQ3LjE0My0yMS4xNDggNDcuMTQzLTQ3LjE0M1M4MS44MTYgNy40NiA1NS44MjMgNy40NnpNNDYuODggNzIuMzc0VjM3LjY5N2wyMy4xNzcgMTcuMzR6Ii8+PC9nPjwvc3ZnPg==" alt="play icon"/></button>
	  <video aria-describedby="videoDescription" ref="video" controls={this.props.videoDidStart} aria-labeledby="videoTitle" poster="/assets/encrypt-poster-dark-1920x1080.jpg" autoBuffer width={this.props.width} height={this.props.height}>
	    <source id="mp4" src={videoToPlay.mp4[this.props.version]} type="video/mp4"/>
	    <source id="webm" src={videoToPlay.webm[this.props.version]} type="video/webm"/>
	  </video>
	</div>
      <div className={encryptWrapperClass} ref="metaWrapper">
          <div className="encrypt-meta">
            <span className="videoMeta">
            <span className="episodeNumber">EPISODE 1</span>
            <time className="video-date" dateTime="2016-02-08">FEBUARY 08, 2016</time>
            <span className="duration">1:00</span>
            </span>
            <div id="videoTitle" className="videoTitle">
              Privacy Lets You Be You
            </div>
            <p id="videoDescription" className="video-description">Privacy depends on encryption. Learn more about how it works, why it's essential, and why it's worth protecting.</p>
          </div>
        </div>
      </div>
    );
  }

});
