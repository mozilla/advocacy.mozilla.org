var React = require(`react`);

module.exports = React.createClass({
  render: function() {
    return (
      <div className="video-wrapper">
	<video poster="/assets/Encrypt_static_image.png" autoBuffer width={this.props.width} height={this.props.height}>
          <source id="mp4" src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" type="video/mp4"/>
        </video>
        <div className="encrypt-meta-wrapper">
          <div className="encrypt-meta">
            <span className="videoMeta"><span className="white-text">EPISODE 1</span> &nbsp;       <span className="purple-text">FEBUARY 08, 2016 &nbsp; 0:53</span></span>
            <span className="videoTitle">
              Privacy Lets You Be You
            </span>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    );
  }

});
