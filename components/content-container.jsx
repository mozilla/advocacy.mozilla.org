var React = require('react');

module.exports = React.createClass({
  render: function() {
    var className = "content-container";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <div className={className}>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
});
