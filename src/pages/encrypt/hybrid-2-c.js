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
          signupHeader="Be safety savvy"
          signupBody="Get tips, news and resources delivered to your inbox from Mozilla, your trusted advocate for a safer, better online life."
          hideVideoMeta={true}
          location={this.props.location}
        />
      </div>
    );
  }
});

module.exports = HybridVariant;
