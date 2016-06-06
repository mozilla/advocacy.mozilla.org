var React = require(`react`);
var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var ImageTag = require("./imagetag.js");

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="codemoji-banner">
        <div className="codemoji-banner-content">
          <FormattedHTMLMessage
            id="codemoji_banner"
          />
          <ImageTag className="emoji-image-1" height={130} width={130} alt="emoji image 1" src1x="/assets/Emoji_1.svg"/>
          <ImageTag className="emoji-image-2" height={85} width={85} alt="emoji image 2" src1x="/assets/Emoji_2.svg"/>
        </div>
      </div>
    );
  }
});
