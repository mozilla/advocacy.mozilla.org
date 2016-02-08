var React = require(`react`);

module.exports = React.createClass({
  render: function() {
    return (
      <div className="video-wrapper">
        <video aria-describedby="videoDescription" aria-labeledby="videoTitle" poster="/assets/encrypt-poster-dark-1920x1080.jpg" autoBuffer width={this.props.width} height={this.props.height}>
          <source id="mp4" src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" type="video/mp4"/>
        </video>
        <div className="encrypt-meta-wrapper">
          <div className="encrypt-meta">
            <span className="videoMeta">
            <span className="episodeNumber">EPISODE 1</span>
            <time className="video-date" dateTime="2016-02-08">FEBUARY 08, 2016</time>
            <span className="duration">0:53</span>
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
