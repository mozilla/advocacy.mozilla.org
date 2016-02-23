var React = require(`react`);
var classNames = require('classnames');

module.exports = React.createClass({
  getDefaultProps() {
    return {
        "isActive": false
    };
  },
  changeVideo() {
    if(!this.props.isActive){
      this.props.makeActive(this.props.index);
    }
  },
  render() {
    var thumbnailClass = classNames({
      'video-thumbnail': true,
      'active': this.props.isActive
    })
    return (
      <div className={thumbnailClass}>
        {this.props.isActive && this.props.videoDidStart ? <span className="now-playing">Now Playing</span> : ''}
        <img className="thumbnail-image" src={this.props.video.thumbnail} alt="Video poster frame" onClick={this.changeVideo}/>
        <div className="episode-title">{this.props.video.title}</div>
        <div className="episode-metadata">EPISODE {this.props.index + 1} <span className="episode-duration">{this.props.video.duration}</span></div>
      </div>
    );
  }
});