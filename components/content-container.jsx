var React = require('react');
var HeroUnit = require('./hero-unit.jsx');

module.exports = React.createClass({
  render: function() {
    var className = "content-container";
    if (this.props.className) {
      className += " " + this.props.className
    }
    return (
      <div className={className}>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
});
