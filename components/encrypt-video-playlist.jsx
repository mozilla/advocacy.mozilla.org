var React = require(`react`);
var Thumb = require(`./encrypt-video-thumbnail.jsx`);

module.exports = React.createClass({
  //TODO: call Thumb for each video in object, passing object as props
  //Also pass index so that clicking can pass active video back up the chain
  getDefaultProps() {
    return {
      activeVideo: 0
    };
  },
  render: function() {
    var thumbs = [];
    for (var i = 0; i < this.props.videos.length; i++){
      thumbs.unshift(<Thumb key={i} index={i} activeVideo={this.props.activeVideo} pageType={this.props.pageType} videoDidStart={this.props.videoDidStart}  video={this.props.videos[i]} />);
    }
    return (
      <div className="playlist-wrapper">
        <div className="playlist">
          {thumbs}
          <div className="video-thumbnail">
            <div className="coming-soon"><span>COMING SOON</span></div>
            <div className="episode-title" style={{'fontStyle':'italic'}}>Stay tuned for upcoming episodes on encryption</div>
          </div>
        </div>
      </div>
    );
  }
});
