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
          signupHeader="Get in the loop"
          signupBody="Mozilla is tracking Internet issues like encryption that touch our daily lives, sometimes in hidden ways. Sign up to stay informed about important news, updates and more."
          hideVideoMeta={true}
          location={this.props.location}
        />
      </div>
    );
  }
});

module.exports = HybridVariant;
