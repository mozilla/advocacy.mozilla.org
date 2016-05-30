var React = require('react');
var Page = require(`./hybrid.js`);

var HybridVariant = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div>
        <Page
          params={{
            video: '2',
            type: 'hybrid'
          }}
          signupHeader={this.context.intl.formatMessage({id: 'signup_header_variant_a'})}
          signupBody={this.context.intl.formatMessage({id: 'signup_body_variant_a'})}
          hideVideoMeta={true}
          location={this.props.location}
        />
      </div>
    );
  }
});

module.exports = HybridVariant;
