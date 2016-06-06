var React = require(`react`);

module.exports = React.createClass({
  render: function() {
    return (
      <div className="icon-container">
        <div className="icon">
          <img className="footer-icon" height="20" width="20" src={this.props.src}></img>
          <a href={this.props.href}>{this.props.children}</a>
        </div>
      </div>
    );
  }
});
