var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="videoSection">
        <video autoBuffer controls autoPlay>
          <source id="mp4" src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }

});
