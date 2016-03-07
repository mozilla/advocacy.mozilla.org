var React = require(`react`);
var classNames = require('classnames');
var Link = require('react-router').Link;

module.exports = React.createClass({
  getDefaultProps() {
    return {
        "isActive": false
    };
  },
  render() {
    var thumbnailClass = classNames({
      'video-thumbnail': true,
      'active': this.props.activeVideo == (this.props.index)
    })
    var target = `/encrypt/${this.props.pageType}/${this.props.index + 1}`;
    return (
      <div className={thumbnailClass}>
        {this.props.isActive && this.props.videoDidStart ? <span className="now-playing">Now Playing</span> : ''}
        <Link to={target}><img className="thumbnail-image" src={this.props.video.thumbnail} alt="Video poster frame" /></Link>
        <div className="episode-title">{this.props.video.title}</div>
        <div className="episode-metadata">EPISODE {this.props.index + 1} <span className="episode-duration">{this.props.video.duration}</span></div>
      </div>
    );
  }
});