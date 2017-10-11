var React = require(`react`);

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div>
        item
        {this.context.intl.formatMessage({id: 'most_wonderful'})}
      </div>
    );
  }
});
