var React = require('react');
var Page = require(`./hybrid.js`);

var HybridVariant = React.createClass({
  render: function() {
    return (
      <div>
        <Page
          params={{
            video: '2',
            type: 'hybrid'
          }}
          signupHeader="Become an encryption champion"
          signupBody="At Mozilla, we advocate for security and privacy online. Sign up to get updates, news and opportunities to stand with us."
          hideVideoMeta={true}
          location={this.props.location}
        />
      </div>
    );
  }
});

module.exports = HybridVariant;
