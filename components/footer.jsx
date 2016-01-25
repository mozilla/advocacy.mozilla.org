var React = require('react');
var Icon = React.createClass({
  render: function() {
    return (
      <div className="icon-container">
        <div className="icon">
          <div className="icon-circle"></div>
          <a href={this.props.href}>{this.props.children}</a>
        </div>
      </div>
    );
  }
});
module.exports = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <Icon href="" src="" title="">Contact Us</Icon>
        <Icon href="" src="" title="">Connext on Twitter</Icon>
        <Icon href="" src="" title="">Legal</Icon>
        <Icon href="" src="" title="">Privacy Policy</Icon>
        <div>mozilla</div>
        <div className="horizontal-rule"></div>
        <p>
          Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good.
        </p>
      </div>
    );
  }
});
