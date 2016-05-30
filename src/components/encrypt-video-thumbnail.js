var React = require(`react`);
var classNames = require('classnames');
var Link = require('react-router').Link;
import { FormattedMessage } from 'react-intl';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getDefaultProps() {
    return {
        "isActive": false
    };
  },
  changeVideo() {
    if(this.props.activeVideo !== this.props.index){
      this.props.makeActive();
    }
  },
  render() {
    var thumbnailClass = classNames({
      'video-thumbnail': true,
      'active': this.props.activeVideo == (this.props.index)
    })
    var locale = this.context.intl.locale;
    var target = "/" + locale + `/encrypt/${this.props.pageType}/${this.props.index + 1}`;
    return (
      <div className={thumbnailClass}>
        {(this.props.activeVideo == this.props.index) && this.props.videoDidStart ? <span className="now-playing">{this.context.intl.formatMessage({id: 'now_playing'})}</span> : ''}
        <Link to={target}><img onClick={this.changeVideo} className="thumbnail-image" src={this.props.video.thumbnail} alt="Video poster frame" /></Link>
        <div className="episode-metadata">
          <FormattedMessage
            id='episode_num'
            values={{
              num: this.props.index + 1
            }}
          />
          <span className="episode-duration">{this.props.video.duration}</span>
        </div>
        <div className="episode-title">{this.context.intl.formatMessage({id: this.props.video.title})}</div>
      </div>
    );
  }
});
