var React = require('react');

var Page = React.createClass({

  render: function() {
    return (
      <div>
          { this.props.children }
      </div>
    );
  }

});

module.exports = Page;