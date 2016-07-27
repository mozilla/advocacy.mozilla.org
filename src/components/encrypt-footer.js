var React = require(`react`);
var Footer = require(`./footer.js`);
var Icon = require(`./footer-icon.js`);

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <Footer shareThisPage={this.props.shareThisPage}>
        <Icon href="https://medium.com/mozilla-advocacy" src="/assets/footer-icon-medium.svg" title="Medium">{this.context.intl.formatMessage({id: "join_the_convo"})}</Icon>
      </Footer>
    );
  }
});
