var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <a href={this.props.link} className="button button-groove">{this.props.text}</a>
      </div>
    );
  }

});
