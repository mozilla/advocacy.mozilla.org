var React = require('react');
var pageTypes = {
  'social': require(`./social.js`),
  'direct': require(`./direct.js`),
  'hybrid': require(`./hybrid.js`),
  'codemoji': require(`./codemoji.js`),
  'codemoji-b': require(`./codemoji-b.js`)
}

var PageType = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },
  render: function() {
    var Page;
    if (this.props.params.type == 'direct' && this.props.params.video == '4') {
      Page = pageTypes.hybrid;
    } else if (this.props.params && pageTypes[this.props.params.type]) {
      Page = pageTypes[this.props.params.type]
    } else {
      Page = pageTypes.social;
    }
    return (
      <div>
        <Page params={this.props.params} location={this.props.location}/>
      </div>
    );
  }
});

module.exports = PageType;
