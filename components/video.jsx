var React = require(`react`);

module.exports = React.createClass({

  render: function() {
    return (
      <div className={this.props.className}>
        <video poster={this.props.poster} autoBuffer controls width={this.props.width} height={this.props.height}>
          <source id="mp4" src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" type="video/mp4"/>
        </video>
        {this.props.children}
      </div>
    );
  }

});
